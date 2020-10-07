import { OrxeButton } from '../index';
import { axe, toHaveNoViolations } from '@orxe-devkit/axe';

expect.extend(toHaveNoViolations);

describe('orxe-button-axe', () => {
  let button;

  beforeEach(function() {
    OrxeButton;
    document.body.appendChild(document.createElement('orxe-button'));
    button = document.querySelector('orxe-button') as OrxeButton;
  });

  afterEach(function() {
    button.remove();
  });

  it('should support all WCAG Accessibility Rules. when component is rendered', async () => {
    // pass the HTML element into the axe function.
    const results = await axe(button);
    expect(results).toHaveNoViolations();
  });

  it('should support all WCAG Accessibility Rules. when closeIconAriaLabel is given', async () => {
    button.closeIcon = true;
    button.a11yCloseLabel = 'close icon';
    button.buttonType = 'floating-button';
    await button.requestUpdate();
    const results = await axe(button);
    expect(results).toHaveNoViolations();
  });

  it('should support all WCAG Accessibility Rules. when buttonType is given', async () => {
    button.buttonType = 'default-button';
    await button.requestUpdate();
    const results = await axe(button);
    expect(results).toHaveNoViolations();
  });
});
