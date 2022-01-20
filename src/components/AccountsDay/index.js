import { Element } from '../shared/Element/index.js';
import { importCSS } from '../../utils/importCSS/index.js';
import { Bill } from '../Bill/index.js';

importCSS('./src/components/AccountsDay/styles.css');

export const AccountsDay = (props) => {
  const $accountsDayWrapper = Element('div', { class: 'accounts-day-wrapper' });

  const $date = Element('h3', { class: 'accounts-day-date', children: props.date });
  $accountsDayWrapper.appendChild($date);

  for (const item of props.bills) {
    const $bill = Bill(item);
    $accountsDayWrapper.appendChild($bill);
  }

  return $accountsDayWrapper;
};
