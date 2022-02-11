import { Element } from '../../components/shared/Element/index.js';
import { Button } from '../../components/shared/Button/index.js';
import { importCSS } from '../../utils/importCSS/index.js';
import { formatMoney } from '../../utils/currency/index.js';
import { store } from '../../store/index.js';
import { HeaderTransaction } from '../../components/HeaderTransaction/index.js';
import { AddTransactionValue } from '../AddTransactionValue/index.js';
import { InfoWallet } from '../../components/WalletInfo/index.js';
import { CategoryInfo } from '../../components/CategoryInfo/index.js';
import { Date } from '../../components/Date/index.js';
import { Installment } from '../../components/Installment/index.js';
import { Tag } from '../../components/Tag/index.js';
import { Comments } from '../../components/Comments/index.js';

importCSS('./src/pages/AddTransactionInfo/styles.css');

const WALLET_INFO_MOCK = { classes: 'wallet' };
const CATEGORY_INFO_MOCK = {};

export const AddTransactionInfo = () => {
  const handleNavigationDelete = () => {
    store.setTypeTransaction('expense');
    $addTransactionContainer.innerHTML = '';
    $addTransactionContainer.appendChild(AddTransactionValue());
  };

  const $deleteButton = Button({
    class: 'transaction-value-button-delete',
    icon: 'delete',
    onClick: () => handleNavigationDelete(),
  });
  const $value = Element('span', { class: 'transaction-value', children: formatMoney(store.getTransactionAmount()) });
  const $valueWrapper = Element('div', { class: 'transaction-value-wrapper', children: $value });
  const $boxInvisible = Element('div', { class: 'box-invisible' });

  const $valueContent = Element('div', {
    class: 'transaction-value-content',
    children: [$deleteButton, $valueWrapper, $boxInvisible],
  });

  const $walletInfo = InfoWallet(WALLET_INFO_MOCK);
  const $categoryInfo = CategoryInfo(CATEGORY_INFO_MOCK);
  const $date = Date();
  const $installment = Installment();
  const $tag = Tag();
  const $comments = Comments();

  const $addTransactionContent = Element('div', {
    class: 'add-transaction-content-info',
    children: [HeaderTransaction(), $valueContent, $walletInfo, $categoryInfo],
  });
  const $addTransactionContainer = Element('div', {
    class: 'add-transaction-container-info',
    children: [$addTransactionContent, $date, $installment, $tag, $comments],
  });
  return $addTransactionContainer;
};
