import { Element } from '../../components/shared/Element/index.js';
import { Button } from '../../components/shared/Button/index.js';
import { HeaderTransaction } from '../../components/HeaderTransaction/index.js';
import { importCSS } from '../../utils/importCSS/index.js';

importCSS('./src/pages/AddTransactionInfo/styles.css');

export const AddTransactionInfo = () => {
  const $addTransactionContent = Element('div', { class: 'add-transaction-content', children: HeaderTransaction(0) });

  return $addTransactionContent;
};
