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
      if(layout.renderTimeout == 0)
        renderItems($element, layout, app, this.inEditState());
      else 
        setTimeout(() => renderItems($element, layout, app, this.inEditState()), layout.renderTimeout);

      // Remove zoom-in button:
      // const $parent = $element.parents('.qv-object-qsSimplePopup');
      // const $zoomIn = $parent && $parent.find('[tid=nav-menu-zoom-in]');
      // if($zoomIn) $zoomIn.remove();
    },

    beforeDestroy() {
      const $element = this.$element;
      const layout = this.backendApi.model.layout;
      destroyItems($element, layout);
    },

    /*
    destroy(self, layout) {
      //const element = getElementFor(layout.options.buttonPlaceSelector, $element);
      //$(element).children(`#${layout.qInfo.qId}`).remove();
      // Changes from Qlik Sense April 2018:
      if(layout) {
        // for old versions
        const $element = self;
        destroyItems($element, layout);
      } else {
        // from April 2018
        const $element = self.$element;
        const layout = self.backendApi.model.layout;
        destroyItems($element, layout);
      }
    }
    */
  }
}

function getElementFor(elementSelector, $element) {
  return (elementSelector && elementSelector.length > 0 && $(elementSelector)[0]) || ($element)[0];
}

function renderItems($element, layout, app, editState = false) {
  console.log(layout);
  let renderedItems = {};
  layout.listItems && layout.listItems.forEach(item => {
    const id = `${layout.qInfo.qId}--${item.cId}`;
    let element = getElementFor(item.buttonPlaceSelector, $element);
    const metaInfo = redrededItemsMeta[id];

    if(metaInfo) {
      // remove previous one if need it
      if(metaInfo.element &&
        (metaInfo.renderAsLastChild != item.renderAsLastChild
        || metaInfo.fillCell != item.fillCell
        || metaInfo.element != element)) {
        // remove previous one
        let children = $(metaInfo.element).children(`#${id}`);
        if(children)
          children.remove();
      }
    }

    const insertAt = (item.renderAsLastChild ? element.lastChild : element.firstChild);
    const placeholder = item.fillCell ? `<div id="${id}" class="qv-simple-popup-ph qv-sp-fillcell"> </div>` : `<div id="${id}" class="qv-simple-popup-ph"> </div>`;
    let renderAt$ = $(element).find(`#${id}`);
    if(insertAt && !renderAt$.length) {
      renderAt$ = item.renderAsLastChild ?
      $(placeholder).insertAfter(insertAt) :
      $(placeholder).insertBefore(insertAt);
    } else if (!element.hasChildNodes()) {
      renderAt$ = $(placeholder).appendTo(element);
    }

    const placeElement = renderAt$[0];
    // id={id}
    if(placeElement) {

      redrededItemsMeta[id] = {
        element,
        renderAsLastChild: item.renderAsLastChild,
        fillCell: item.fillCell,
        removeEmbeddedObjects: null
      }

      const text = item.text.replace(/\$appid/gi, app.id);
      render(<PopupButton {...item}
        QlikApp={app}
        onObjectsEmbedded={removeFunc => redrededItemsMeta[id].removeEmbeddedObjects = removeFunc }
        textToRender={markdown(text)} />, placeElement, placeElement.firstChild); // markdown(item.text)
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
    //const element = getElementFor(item.buttonPlaceSelector, $element);
    const metaInfo = redrededItemsMeta[id];

    if(metaInfo) {
      metaInfo.removeEmbeddedObjects && metaInfo.removeEmbeddedObjects();

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
    this.renderedObjects = null;
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.omMouseOut = this.omMouseOut.bind(this);
    this.removeEmbeddedObjects = this.removeEmbeddedObjects.bind(this);
  }

  render(){
    const icon = this.props.icon || "";
    const iconColor = this.props.iconColor ? this.props.iconColor.color : "inherit";
    const label = this.props.label || "";
    const id = this.props.id;
    const fillcellClass = this.props.fillCell ? 'qv-sp-fillcell' : '';
    const iconVerticalAlignment = this.props.iconVerticalAlignment || 'center';
    const iconHorizAlignment = this.props.iconHorizontalAlignment || 'center';
    return (
      <div id={id} className={`qv-simplepopup ${fillcellClass}`}>
        <button 
          className={`lui-button qui-button qv-sp-tbutton ${fillcellClass}`}
          style={{alignItems: iconVerticalAlignment, justifyContent: iconHorizAlignment }}
          onClick={this.onClickHandler}
          onTouchStart={this.onClickHandler}
          onMouseOver={this.onMouseOver}
          onMouseOut={this.omMouseOut}>
          <span className={`lui-icon lui-icon--${icon}`} style={{color: iconColor}}></span>
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

  removeEmbeddedObjects() {
    this.renderedObjects && this.renderedObjects.forEach(o => {
      o.close();
    });

    this.renderedObjects = null;
  }

  showPopup(){
    const QlikApp = this.props.QlikApp;
    const onObjectsEmbedded = this.props.onObjectsEmbedded;
    let textToRender = this.props.textToRender;
    const r = /\$([A-Za-z0-9_-]+)(\{([.|\s\S]+?)\})?/gm;
    const objectsToRender = [];
    const removeEmbeddedObjects = this.removeEmbeddedObjects;
    this.renderedObjects = [];
    const renderedObjects = this.renderedObjects;
    let res;
    while(res = r.exec(textToRender)) {
      if(res.length > 3) {
        const objId = res[1];
        textToRender = textToRender.replace(res[0], `<div id="sp_${objId}" style="${res[3]}"></div>`);
        objectsToRender.push(objId);
      }
    }
    popupService.showAsPopup(
      <p className="content" dangerouslySetInnerHTML={{__html: textToRender}}>
      </p>,
      function () {
        QlikApp.visualization && objectsToRender.forEach(item => {
          if(item === 'CurrentSelections') {
            QlikApp.getObject(`sp_${item}`, item).then(vis => {
              renderedObjects.push(vis);
            });
          } else
            QlikApp.visualization.get(item).then(vis => {
              vis.show(`sp_${item}`);
              renderedObjects.push(vis);
            });
          //QlikApp.getObject(`$sp_${item}`, item);
        });
        onObjectsEmbedded && onObjectsEmbedded(removeEmbeddedObjects);
      },
      { 
        onClosePopup: () => {
          removeEmbeddedObjects();
        },
        width: this.props.dialogWidth, 
        height: this.props.dialogHeight,
      }
    );
  }
}
