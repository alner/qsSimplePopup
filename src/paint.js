import {h, render, Component} from 'preact';
import markdown from 'marked';
import { createPopupService } from './popupService';

let popupService;
const redrededItemsMeta = {};

export default function setupPaint({ translator }) {
  popupService = createPopupService({ LabelOK: translator.get('Common.Close') });
  markdown.setOptions({
    breaks: true,
    sanitize: false
  });
  return {
    // Paint method
    paint($element, layout) {
      if(layout.options) {
        /*
        const element = getElementFor(layout.options.buttonPlaceSelector, $element);
        const renderAt = layout.options.renderAsLastChild ? element.lastChild : element.firstChild;
        if(this.previousElement &&
          (this.previousRenderAs != layout.options.renderAsLastChild
          || this.previousElement != element)) {
          // remove previous one
          $(this.previousElement).children(`#${layout.qInfo.qId}`).remove();
        }
        render(<PopupButton id={layout.qInfo.qId} {...layout.options} textToRender={markdown(layout.options.text)} />, element, renderAt); // element.lastChild
        this.previousRenderAs = layout.options.renderAsLastChild;
        this.previousElement = element;
        */
        renderItems($element, layout, this.inEditState());
      }
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

function renderItems($element, layout, editState = false) {
  let renderedItems = {};
  layout.listItems && layout.listItems.forEach(item => {
    const id = `${layout.qInfo.qId}--${item.cId}`;
    const element = getElementFor(item.buttonPlaceSelector, $element);
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

    const renderAt = item.renderAsLastChild ? element.lastChild : element.firstChild;

    render(<PopupButton id={id} {...item}
      textToRender={markdown(item.text)} />, element, renderAt);

    redrededItemsMeta[id] = {
        element,
        renderAsLastChild: item.renderAsLastChild
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
    popupService.showAsPopup(
      <p dangerouslySetInnerHTML={{__html: this.props.textToRender}}>
      </p>, {
      width: this.props.dialogWidth, height: this.props.dialogHeight
    });
  }
}
