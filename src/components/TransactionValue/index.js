import { Element } from '../shared/Element/index.js';
import { formatMoney } from '../../utils/currency/index.js';
import { importCSS } from '../../utils/importCSS/index.js';
import { store } from '../../store/index.js';

importCSS('./src/components/TransactionValue/styles.css');

export const TransactionValue = () => {
  const $amount = Element('h2', { class: 'transaction-amount', children: formatMoney(0) });
  $amount.textContent = formatMoney(store.getTransactionAmount());
  const $amountWrapper = Element('div', { class: 'transaction-amount-wrapper', children: $amount });
  return $amountWrapper;
};
