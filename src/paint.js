import {h, render, Component} from 'preact';
import markdown from 'marked';
import { createPopupService } from './popupService';

let popupService;
const redrededItemsMeta = {};

export default function setupPaint({ Qlik, translator }) {
  let app = Qlik.currApp();
  popupService = createPopupService({ LabelOK: translator.get('Common.Close') });
  let renderer = new markdown.Renderer();
  renderer.br = function(){
    return '<br/><br/>'
  }
  markdown.setOptions({
    gfm: true,
    breaks: false,
    sanitize: false,
    tables: true,
    renderer
  });
  return {
    // Paint method
    paint($element, layout) {
      renderItems($element, layout, app, this.inEditState());

      // Remove zoom-in button:
      // const $parent = $element.parents('.qv-object-qsSimplePopup');
      // const $zoomIn = $parent && $parent.find('[tid=nav-menu-zoom-in]');
      // if($zoomIn) $zoomIn.remove();
    },

    destroy($element, layout) {
      //const element = getElementFor(layout.options.buttonPlaceSelector, $element);
      //$(element).children(`#${layout.qInfo.qId}`).remove();
      destroyItems($element, layout);
    }
  }
}

function getElementFor(elementSelector, $element) {
  return (elementSelector && $(elementSelector)[0]) || ($element)[0];
}

function renderItems($element, layout, app, editState = false) {
  let renderedItems = {};
  layout.listItems && layout.listItems.forEach(item => {
    const id = `${layout.qInfo.qId}--${item.cId}`;
    let element = getElementFor(item.buttonPlaceSelector, $element);
    const metaInfo = redrededItemsMeta[id];

    if(metaInfo) {
      // remove previous one if need it
      if(metaInfo.element &&
        (metaInfo.renderAsLastChild != item.renderAsLastChild
        || metaInfo.element != element)) {
        // remove previous one
        let children = $(metaInfo.element).children(`#${id}`);
        if(children)
          children.remove();
      }
    }

    const insertAt = item.renderAsLastChild ? element.lastChild : element.firstChild;
    const placeholder = `<div id="${id}"> </div>`;
    let renderAt$ = $(element).find(`#${id}`);
    if(!renderAt$.length) {
      renderAt$ = item.renderAsLastChild ?
      $(placeholder).insertAfter(insertAt) :
      $(placeholder).insertBefore(insertAt);
    }

    const placeElement = renderAt$[0];
    // id={id}
    if(placeElement) {
      const text = item.text.replace(/\$appid/gi, app.id);
      render(<PopupButton {...item}
        QlikApp={app}
        textToRender={markdown(text)} />, placeElement, placeElement.firstChild); // markdown(item.text)

      redrededItemsMeta[id] = {
          element,
          renderAsLastChild: item.renderAsLastChild
      }
    }

    //if(editState)
    renderedItems[id] = true;
  });

  // Remove deleted items if any...
  if(editState) {
    for(let key in redrededItemsMeta) {
      if(!renderedItems[key]) {
        // delete item
        const metaInfo = redrededItemsMeta[key];
        let children = $(metaInfo.element).children(`#${key}`);
        if(children)
          children.remove();
      }
    }
  }
}

function destroyItems($element, layout) {
  layout.listItems && layout.listItems.forEach(item => {
    const id = `${layout.qInfo.qId}--${item.cId}`;
    const element = getElementFor(item.buttonPlaceSelector, $element);
    const metaInfo = redrededItemsMeta[id];

    if(metaInfo) {
      let children = $(metaInfo.element).children(`#${id}`);
      if(children)
        children.remove();

      delete redrededItemsMeta[id];
    }
  });
}

class PopupButton extends Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.omMouseOut = this.omMouseOut.bind(this);
  }

  render(){
    const icon = this.props.icon || "";
    const label = this.props.label || "";
    const id = this.props.id;
    const fillcellClass = this.props.fillCell ? 'qv-sp-fillcell' : '';
    return (
      <div id={id} className={`qv-simplepopup ${fillcellClass}`}>
        <button className={`lui-button qui-button qv-sp-tbutton ${fillcellClass}`}
          onClick={this.onClickHandler}
          onTouchStart={this.onClickHandler}
          onMouseOver={this.onMouseOver}
          onMouseOut={this.omMouseOut}>
          <span className={`lui-icon lui-icon--${icon}`}></span>
          {label}
        </button>
      </div>
    )
  }

  onMouseOver(e) {
    if(!popupService.isPopupShow() && !this._tid) {
      this._tid = setTimeout(() => {
        this._tid = null;
        this.showPopup();
      }, 3000);
    }
  }

  omMouseOut(e) {
    if(this._tid) {
      clearTimeout(this._tid)
      this._tid = null;
    }
  }

  onClickHandler(e) {
    e.preventDefault();
    e.stopPropagation();
    this.showPopup();
    if(this._tid) {
      clearTimeout(this._tid)
      this._tid = null;
    }
  }

  showPopup(){
    const QlikApp = this.props.QlikApp;
    let textToRender = this.props.textToRender;
    const r = /\$([A-Za-z0-9_-]+)(\{([.|\s\S]+?)\})?/gm;
    const objectsToRender = [];
    let res;
    while(res = r.exec(textToRender)) {
      if(res.length > 3) {
        const objId = res[1];
        textToRender = textToRender.replace(res[0], `<div id="$sp_${objId}" style="${res[3]}"></div>`);
        objectsToRender.push(objId);
      }
    }
    popupService.showAsPopup(
      <p className="content" dangerouslySetInnerHTML={{__html: textToRender}}>
      </p>,
      function () {
        QlikApp.visualization && objectsToRender.forEach(item => {
          QlikApp.visualization.get(item).then(vis => vis.show(`$sp_${item}`));
        })
      },
      { width: this.props.dialogWidth, height: this.props.dialogHeight}
    );
  }
}
