import {h, render, Component} from 'preact';
import markdown from 'marked';
import { createPopupService } from './popupService';

let popupService;

export default function setupPaint({ translator }) {
  popupService = createPopupService({ translator });
  markdown.setOptions({
    breaks: true,
    sanitize: false
  });
  let previousRenderAt;

  return {
    // Paint method
    paint($element, layout) {
      if(layout.options) {
        const element = $(layout.options.buttonPlaceSelector)[0] || ($element)[0];
        console.log(layout.options.renderAsLastChild);
        const renderAt = layout.options.renderAsLastChild ? element.lastChild : element.firstChild;
        //if(previousRenderAt && previousRenderAt != renderAt) {
          // remove previous node
          //$(previousRenderAt).find('.qv-simplepopup').remove();
        //}
        render(<PopupButton {...layout.options} textToRender={markdown(layout.options.text)} />, element, renderAt); // element.lastChild
        previousRenderAt = renderAt;
      }
    }
  }
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
    return (
      <div className="qv-simplepopup">
        <button className={'lui-button qui-button qv-sp-tbutton'}
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
