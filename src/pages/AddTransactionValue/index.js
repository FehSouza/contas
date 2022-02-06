import { HeaderTransaction } from '../../components/HeaderTransaction/index.js';
import { NumericKeyboard } from '../../components/NumericKeyboard/index.js';
import { AddTransactionInfo } from '../AddTransactionInfo/index.js';
import { Element } from '../../components/shared/Element/index.js';
import { Button } from '../../components/shared/Button/index.js';
import { importCSS } from '../../utils/importCSS/index.js';
import { store } from '../../store/index.js';

importCSS('./src/pages/AddTransactionValue/styles.css');

export const AddTransactionValue = () => {
  store.setTransactionAmount(0);

  const handleNavigationAddTransactionInfo = () => {
    if (store.getTransactionAmount() === 0 || store.getTransactionAmount() === '0.00') return;
    $addTransactionContent.innerHTML = '';
    $addTransactionContent.appendChild(AddTransactionInfo());
  };

  const $continueButton = Button({
    title: 'Continuar',
    class: 'add-transaction-button-continue',
    onClick: () => handleNavigationAddTransactionInfo(),
  });

  const $addTransactionContent = Element('div', {
    class: 'add-transaction-content',
    children: [HeaderTransaction(), NumericKeyboard(), $continueButton],
  });

  return $addTransactionContent;
};
