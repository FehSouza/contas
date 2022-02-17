import { Element } from '../shared/Element/index.js';
import { importCSS } from '../../utils/importCSS/index.js';
import { Button } from '../shared/Button/index.js';
import { Icon } from '../shared/Icon/index.js';

importCSS('./src/components/StatusAccount/styles.css');

export const StatusAccount = (setStatus) => {
  const $icon = Icon('check');

  let payed = false;

  const toggleButtons = () => {
    if (payed) {
      $buttonToggleNoPay.appendChild($icon);
      payed = false;
    } else {
      $buttonTogglePay.appendChild($icon);
      payed = true;
    }
    setStatus(payed);
  };

  const $title = Element('h2', { class: 'title-status-account', children: 'Status' });

  const $buttonTogglePay = Button({ class: 'button-toggle', onClick: toggleButtons });
  const $togglePay = Element('span', { class: ['toggle-pay', 'toggle-pay-pay'], children: 'Pago' });
  const $buttonToggleNoPay = Button({ class: 'button-toggle', onClick: toggleButtons });
  const $toggleNoPay = Element('span', { class: 'toggle-pay', children: 'Não pago' });
  $buttonToggleNoPay.appendChild($icon);

  const $toggle = Element('div', {
    class: 'toggle-status-account',
    children: [$buttonTogglePay, $togglePay, $buttonToggleNoPay, $toggleNoPay],
  });

  const $statusAccountContent = Element('div', { class: 'status-account', children: [$title, $toggle] });
  return $statusAccountContent;
};
