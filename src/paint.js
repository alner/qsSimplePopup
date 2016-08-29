import {h, render} from 'preact';

export default function paint($element, layout) {
  console.log('*** From paint ! ***');
  console.log($element, layout);
  const element = ($element)[0];
  paintComponent(layout, element);
}

function paintComponent(layout, element) {
  const options = layout.options;
  const icon = options && options.icon || "";
  const label = options && options.label || "";
  const classNames = ['lui-button', 'qui-button'];
  render(
    <div className="qv-simplepopup">
      <button className={classNames.join(' ')}>
      <span className={`lui-icon lui-icon--${icon}`}></span>
      {label}
      </button>
    </div>,
  element, element.lastChild);
}
