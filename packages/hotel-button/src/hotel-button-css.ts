import {css} from 'lit-element';
export default css`:host{--button-font-family: var(--global-font-family);--button-font-color: var(--secondary-text);--button-font-weight: var(--font-weight-regular);--button-close-icon-color: currentColor;--button-background-color: var(--neutral);--button-min-height: 48px;--floating-button-max-height: 177px}.button__container{background-color:var(--button-background-color);min-height:var(--button-min-height);padding:var(--spacing-05);font-family:var(--button-font-family);font-size:1.2rem;color:var(--button-font-color);font-weight:var(--button-font-weight)}.button__container[button-type='floating-button']{position:relative;box-shadow:0 2px 6px rgba(0,0,0,0.16);max-height:var(--button-max-height)}.button__container[button-type='floating-button'] .button__icon--close{--button-icon-color: var(--button-close-icon-color);position:absolute;top:0;right:0;cursor:pointer;background-color:inherit}`;