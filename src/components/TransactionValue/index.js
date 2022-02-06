import { Element } from '../shared/Element/index.js';
import { formatMoney } from '../../utils/currency/index.js';
import { importCSS } from '../../utils/importCSS/index.js';
import { store } from '../../store/index.js';

importCSS('./src/components/TransactionValue/styles.css');

export const TransactionValue = () => {
  const $amount = Element('h2', { class: 'transaction-amount', children: formatMoney(0) });

  if (store.getTypeTransaction() === 'recipe') $amount.classList.add('transaction-amount-recipe');
  if (store.getTypeTransaction() === 'expense') $amount.classList.add('transaction-amount-expense');
  if (store.getTypeTransaction() === 'transfer') $amount.classList.add('transaction-amount-transfer');

  $amount.textContent = formatMoney(store.getTransactionAmount());
  const $amountWrapper = Element('div', { class: 'transaction-amount-wrapper', children: $amount });
  return $amountWrapper;
};
