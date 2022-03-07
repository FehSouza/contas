import { createElement } from '../../utils/createElement/index.js';
import { importCSS } from '../../utils/importCSS/index.js';
import { Button } from '../shared/Button/index.js';
import { Icon } from '../shared/Icon/index.js';

importCSS('StatusAccount');

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

  const $title = createElement('h2', { class: 'title-status-account', textContent: 'Status' });

  const $buttonTogglePay = Button({ class: 'button-toggle', onClick: toggleButtons });
  const $togglePay = Button({ class: ['toggle-pay', 'toggle-pay-pay'], title: 'Pago', onClick: toggleButtons });
  const $buttonToggleNoPay = Button({ class: 'button-toggle', onClick: toggleButtons });
  $buttonToggleNoPay.appendChild($icon);
  const $toggleNoPay = Button({ class: 'toggle-pay', title: 'Não pago', onClick: toggleButtons });

  const $toggle = createElement('div', {
    class: 'toggle-status-account',
    children: [$buttonTogglePay, $togglePay, $buttonToggleNoPay, $toggleNoPay],
  });

  const $statusAccountContent = createElement('div', { class: 'status-account', children: [$title, $toggle] });
  return $statusAccountContent;
};
