import { Element } from '../../components/shared/Element/index.js';
import { Button } from '../../components/shared/Button/index.js';
import { importCSS } from '../../utils/importCSS/index.js';
import { formatMoney } from '../../utils/currency/index.js';
import { HeaderTransaction } from '../../components/HeaderTransaction/index.js';
import { AddTransactionValue } from '../AddTransactionValue/index.js';
import { InfoWallet } from '../../components/WalletInfo/index.js';
import { CategoryInfo } from '../../components/CategoryInfo/index.js';
import { store } from '../../store/index.js';

importCSS('./src/pages/AddTransactionInfo/styles.css');

const WALLET_INFO_MOCK = { title: 'NuBank', user: 'Raul', amount: 10000, classes: 'wallet' };
const CATEGORY_INFO_MOCK = {};

export const AddTransactionInfo = () => {
  const handleNavigationDelete = () => {
    const $addTransactionValue = AddTransactionValue();
    $addTransactionContent.innerHTML = '';
    $addTransactionContent.appendChild($addTransactionValue);
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

  const $addTransactionContent = Element('div', {
    class: 'add-transaction-content-info',
    children: [HeaderTransaction(), $valueContent, $walletInfo, $categoryInfo],
  });
  return $addTransactionContent;
};
