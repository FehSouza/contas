import { HeaderTransaction } from '../../components/HeaderTransaction/index.js';
import { NumericKeyboard } from '../../components/NumericKeyboard/index.js';
import { AddTransactionInfo } from '../AddTransactionInfo/index.js';
import { Element } from '../../components/shared/Element/index.js';
import { Button } from '../../components/shared/Button/index.js';
import { importCSS } from '../../utils/importCSS/index.js';

importCSS('./src/pages/AddTransactionValue/styles.css');

export const AddTransactionValue = () => {
  const $addTransactionInfo = AddTransactionInfo();

  const handleNavigationAddTransactionInfo = () => {
    $addTransactionContent.innerHTML = '';
    $addTransactionContent.appendChild($addTransactionInfo);
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
