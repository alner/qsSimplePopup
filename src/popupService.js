import {h, Component, render} from 'preact';

/*
function PopupHeader(props) {
  return (
    <div className="qv-spopup-header">
      <button className="lui-button qui-button qv-sp-closebutton"
        onClick={props.onClose} onTouchStart={props.onClose} >
        <span class="lui-icon lui-icon--remove"></span>
      </button>
    </div>
  )
}
*/

function PopupFooter(props) {
  return (
    <footer className="qv-spopup-footer">
      <button className="lui-button lui-button--inverse qui-button"
        autofocus="true"
        onClick={props.onClose} onTouchStart={props.onClose} >
        {props.closeLabel}
      </button>
    </footer>
  )
}

export function createPopupService({ translator }) {
  let translatorService = translator;
  let popupNode;

  function showAsPopup(component,
    { width, height } = {width: '85%', height: '85%'}) {
    if(!popupNode) {
      popupNode = document.createElement('div');
      popupNode.className = 'qv-spopup-container';
      popupNode.onclick = function(e) {
        if(e.target == popupNode) {
          e.preventDefault();
          e.stopPropagation();
          removePopupIfExists();
        }
      };
      popupNode.ontouchstart = popupNode.onclick;
      document.body.appendChild(popupNode);
    }
    const closeLabel = translator.get('Common.OK') || 'OK';
    render(
    <div className="qv-spopup qv-spopup-modal" style={{width, height}}>
      <div className="qv-spopup-content">
      {/*<PopupHeader onClose={removePopupIfExists} />*/}
      {component}
      </div>
      <PopupFooter {...{ closeLabel }} onClose={removePopupIfExists} />
    </div>,
    popupNode, popupNode.lastChild);
  }

  function removePopupIfExists() {
    if(popupNode) {
        popupNode.removeChild(popupNode.lastChild);
        document.body.removeChild(popupNode);
        popupNode = undefined;
        return true;
    }

    return false;
  }

  function isPopupShow() {
    return popupNode != undefined
  }

  return {
    showAsPopup,
    removePopupIfExists,
    isPopupShow,
  }
}
