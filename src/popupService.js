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

export function createPopupService({ LabelOK }) {
  let popupNode;

  function showAsPopup(component, OnRender,
    { width, height, onClosePopup } = {width: '85%', height: '85%', onClosePopup: nil}) {
    if(!popupNode) {
      popupNode = document.createElement('div');
      popupNode.className = 'qv-spopup-container';
      setTimeout(() => {
        popupNode.onclick = function(e) {
          if(e.target == popupNode) {
            e.preventDefault();
            e.stopPropagation();
            removePopupIfExists();
            if(onClosePopup) onClosePopup();
          }
        };
        popupNode.ontouchstart = popupNode.onclick;
      }, 500);
      document.body.appendChild(popupNode);
    }
    const closeLabel = LabelOK || 'OK';
    render(
    <div className="qv-spopup qv-spopup-modal" style={{width, height}}>
      <div className="qv-spopup-content">
      {/*<PopupHeader onClose={removePopupIfExists} />*/}
      {component}
      </div>
      <PopupFooter {...{ closeLabel }} onClose={() => {
        removePopupIfExists();
        if(onClosePopup) onClosePopup();
      }} />
    </div>,
    popupNode, popupNode.lastChild);

    OnRender && OnRender();
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
