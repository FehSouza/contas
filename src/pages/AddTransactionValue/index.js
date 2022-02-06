import { HeaderTransaction } from '../../components/HeaderTransaction/index.js';
import { NumericKeyboard } from '../../components/NumericKeyboard/index.js';
import { AddTransactionInfo } from '../AddTransactionInfo/index.js';
import { Element } from '../../components/shared/Element/index.js';
import { Button } from '../../components/shared/Button/index.js';
import { importCSS } from '../../utils/importCSS/index.js';
import { store } from '../../store/index.js';
import { TransactionValue } from '../../components/TransactionValue/index.js';
import { formatMoney } from '../../utils/currency/index.js';

importCSS('./src/pages/AddTransactionValue/styles.css');

export const AddTransactionValue = () => {
  store.setTransactionAmount(0);

  const handleNavigationAddTransactionInfo = () => {
    if (store.getTransactionAmount() === 0 || store.getTransactionAmount() === '0.00') return;
    $addTransactionContent.innerHTML = '';
    $addTransactionContent.appendChild(AddTransactionInfo());
  };

  const $transactionValue = TransactionValue();

  const $continueButton = Button({
    title: 'Continuar',
    class: 'add-transaction-button-continue',
    onClick: () => handleNavigationAddTransactionInfo(),
  });

  const updateValue = () => {
    const $value = document.querySelector('.transaction-amount');
    $value.textContent = formatMoney(store.getTransactionAmount());
    $value.className = 'transaction-amount';
    if (store.getTypeTransaction() === 'recipe') $value.classList.add('transaction-amount-recipe');
    if (store.getTypeTransaction() === 'expense') $value.classList.add('transaction-amount-expense');
    if (store.getTypeTransaction() === 'transfer') $value.classList.add('transaction-amount-transfer');
  };

  const $addTransactionContent = Element('div', {
    class: 'add-transaction-content',
    children: [HeaderTransaction(updateValue), $transactionValue, NumericKeyboard(updateValue), $continueButton],
  });

  return $addTransactionContent;
};
