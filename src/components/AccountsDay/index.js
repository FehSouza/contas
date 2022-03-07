import { createElement } from '../../utils/createElement/index.js';
import { importCSS } from '../../utils/importCSS/index.js';
import { Bill } from '../Bill/index.js';

importCSS('AccountsDay');

export const AccountsDay = (props) => {
  const $accountsDayWrapper = createElement('div', { class: 'accounts-day-wrapper' });

  const $date = createElement('h3', { class: 'accounts-day-date', textContent: props.date });
  $accountsDayWrapper.appendChild($date);

  for (const item of props.bills) {
    const $bill = Bill(item);
    $accountsDayWrapper.appendChild($bill);
  }

  return $accountsDayWrapper;
};
