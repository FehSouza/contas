import { Element } from '../shared/Element/index.js';
import { importCSS } from '../../utils/importCSS/index.js';
import { Button } from '../shared/Button/index.js';
import { Icon } from '../shared/Icon/index.js';

importCSS('./src/components/StatusAccount/styles.css');

export const StatusAccount = () => {
  const $title = Element('h2', { class: 'title-status-account', children: 'Status' });

  const $buttonTogglePay = Button({ class: 'button-toggle', onClick: () => toggleButtons() });
  const $togglePay = Element('span', { class: ['toggle-pay', 'toggle-pay-pay'], children: 'Pago' });
  const $buttonToggleNoPay = Button({ class: 'button-toggle', onClick: () => toggleButtons() });
  const $toggleNoPay = Element('span', { class: 'toggle-pay-status-account', children: 'Não pago' });

  const $icon = Icon('check');
  $buttonToggleNoPay.appendChild($icon);

  let disabledPay = true;
  let disabledNoPay = false;
  const toggleButtons = () => {
    if (disabledPay) {
      $buttonToggleNoPay.removeChild($icon);
      $buttonTogglePay.appendChild($icon);
      disabledPay = false;
      disabledNoPay = true;
    } else {
      $buttonToggleNoPay.appendChild($icon);
      disabledPay = true;
      disabledNoPay = false;
    }
  };

  const $toggle = Element('div', {
    class: 'toggle-status-account',
    children: [$buttonTogglePay, $togglePay, $buttonToggleNoPay, $toggleNoPay],
  });

  const $statusAccountContent = Element('div', { class: 'status-account', children: [$title, $toggle] });
  return $statusAccountContent;
};
