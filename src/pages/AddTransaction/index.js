import { HeaderTransaction } from '../../components/HeaderTransaction/index.js';
import { Element } from '../../components/shared/Element/index.js';
import { importCSS } from '../../utils/importCSS/index.js';

importCSS('./src/pages/AddTransaction/styles.css');

export const AddTransaction = () => {
  const $addTransactionContent = Element('div', { class: 'add-transaction-content', children: HeaderTransaction() });

  return $addTransactionContent;
};
