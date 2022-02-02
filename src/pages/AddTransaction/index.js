import { HeaderTransaction } from '../../components/HeaderTransaction/index.js';
import { NumericKeyboard } from '../../components/NumericKeyboard/index.js';
import { Element } from '../../components/shared/Element/index.js';
import { importCSS } from '../../utils/importCSS/index.js';

importCSS('./src/pages/AddTransaction/styles.css');

export const AddTransaction = () => {
  const $addTransactionContent = Element('div', {
    class: 'add-transaction-content',
    children: [HeaderTransaction(0), NumericKeyboard()],
  });

  return $addTransactionContent;
};
