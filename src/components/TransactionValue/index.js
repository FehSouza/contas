import { Element } from '../shared/Element/index.js';
import { formatMoney } from '../../utils/currency/index.js';
import { importCSS } from '../../utils/importCSS/index.js';
import { store } from '../../store/index.js';

importCSS('./src/components/TransactionValue/styles.css');

export const TransactionValue = () => {
  const $amount = Element('h2', { class: 'transaction-amount', children: formatMoney(0) });

  const updateTransactionAmount = (tab) => {
    if (tab === 'recipe') $amount.classList.add('transaction-amount-recipe');
    if (tab === 'expense') $amount.classList.add('transaction-amount-expense');
    if (tab === 'transfer') $amount.classList.add('transaction-amount-transfer');
  };
  updateTransactionAmount(store.getTypeTransaction());

  $amount.textContent = formatMoney(store.getTransactionAmount());
  const $amountWrapper = Element('div', { class: 'transaction-amount-wrapper', children: $amount });
  return $amountWrapper;
};
