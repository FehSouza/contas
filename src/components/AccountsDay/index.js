import { Element } from '../shared/Element/index.js';
import { importCSS } from '../../utils/importCSS/index.js';
import { AccountAdd } from '../AccountAdd/index.js';

importCSS('./src/components/AccountsDay/styles.css');

export const AccountsDay = () => {
  const $accountAdd = AccountAdd('food', 'Almoço', 'NuBank');
  const $accountsDayWrapper = Element('div', { class: 'accounts-day-wrapper', children: $accountAdd });

  return $accountsDayWrapper;
};
