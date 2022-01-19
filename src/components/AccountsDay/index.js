import { Element } from '../shared/Element/index.js';
import { importCSS } from '../../utils/importCSS/index.js';
import { AccountAdd } from '../AccountAdd/index.js';

importCSS('./src/components/AccountsDay/styles.css');

export const AccountsDay = (properties) => {
  const $accountsDayWrapper = Element('div', { class: 'accounts-day-wrapper' });

  for (const key in properties) {
    if (key === 'date') {
      const $date = Element('h3', { class: 'accounts-day-date', children: properties[key] });
      $accountsDayWrapper.appendChild($date);
    }
  }

  const $accountAdd = AccountAdd(properties);
  $accountsDayWrapper.appendChild($accountAdd);
  return $accountsDayWrapper;
};
