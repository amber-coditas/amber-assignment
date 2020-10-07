/**
 * @packageDocumentation
 * @module Button
 */

import { html, customElement, property } from 'lit-element';
import styles from './hotel-button-css';
import { TranslationClass } from '@orxe-culture/lit';
import '@orxe-components/button';

/**
 * @noInheritDoc
 */
@customElement('orxe-button')
export default class OrxeButton extends TranslationClass {
  /**
   *
   * @memberof OrxeButton
   * This is used to give the type of a button(floating-button or primary-button)
   */
  @property({ type: String, reflect: true, attribute: 'button-type' })
  buttonType = '';

  /**
   *
   * @memberof Orxebutton
   * this property is used to show close icon on floating button
   */
  @property({ type: Boolean, reflect: true, attribute: 'close-icon' })
  closeIcon = false;

  /**
   *
   * @memberof Orxebutton
   * This property will set the aria-label for close icon
   */
  @property({ type: String, reflect: true, attribute: 'a11y-close-label' })
  a11yCloseLabel = '';

  render() {
    return html`
      <div data-testid="button-container" class="button__container" button-type=${this.buttonType}>
        <slot></slot>
        ${this._renderCloseIcon()}
      </div>
    `;
  }

  /**
   * This method render the close icon if the button type is set to 'floating button'
   */
  private _renderCloseIcon() {
    if (this.buttonType === 'floating-button' && this.closeIcon) {
      return html`
        <orxe-button
          class="button__icon--close"          
          a11y-label=${this.a11yCloseLabel || this.t('orxe-button.ally_close_label')}
          data-testid="close-icon"
          @click=${this._destroyFloatingbutton}
        >
        </orxe-button>
      `;
    }
  }

  /**
   * This methid will destroy the floating button, when user click on the close icon
   */
  private _destroyFloatingbutton(): void {
    this.remove();
  }

  static styles = styles;
}
