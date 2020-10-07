import { OrxeButton } from '../index';
import '@testing-library/jest-dom';

describe('orxe-button', () => {
  let button;

  beforeEach(async function() {
    OrxeButton;
    button = (await document.body.appendChild(document.createElement('orxe-button'))) as OrxeButton;
  });

  afterEach(async function() {
    await button.remove();
  });

  /**
   * Function that sets properties on the Custom Element.
   */
  async function setProperties(properties: object): Promise<void> {
    for (const property in properties) {
      if (button.hasOwnProperty(property)) {
        button[property] = properties[property];
      }
    }
    await button.requestUpdate();
  }

  /**
   * Function that returns an element containing the testId data attribute.
   */
  function getByTestId(id: string): HTMLElement {
    return button.shadowRoot.querySelector(`[data-testid=${id}]`);
  }

  it('should check default value for properties for button', () => {
    expect(button.buttonType).toEqual('default-button');
    expect(button.closeIcon).toBeFalsy;
    expect(button.a11yCloseLabel).toEqual('');
  });

  it('Should check button is default button if no buttonType is given', async () => {
    const buttonConatiner = getByTestId('button-container');
    expect(buttonConatiner).toHaveAttribute('button-type', 'default-button');
  });

  it('Should set floating button Type', async () => {
    await setProperties({ buttonType: 'floating-button' });
    const buttonConatiner = getByTestId('button-container');
    expect(buttonConatiner).toHaveAttribute('button-type', 'floating-button');
  });

  it('Should show close icon', async () => {
    await setProperties({ buttonType: 'floating-button', closeIcon: true });
    const closeIconContainer = getByTestId('close-icon');
    expect(closeIconContainer).toHaveClass('button__icon--close');
    expect(closeIconContainer).toHaveAttribute('a11y-label', 'Close The Button');

    await setProperties({ a11yCloseLabel: 'close' });
    // validate the value of a11y-close-label as given
    expect(closeIconContainer).toHaveAttribute('a11y-label', button.a11yCloseLabel);
  });

  it('Should show close the floating button when clicked on cross icon', async () => {
    await setProperties({ buttonType: 'floating-button', closeIcon: true });
    const closeIconContainer = getByTestId('close-icon');
    await closeIconContainer.click();
    expect(document.querySelector(`orxe-button`)).toBeFalsy();
  });
});
