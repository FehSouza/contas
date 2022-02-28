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
import { StatusAccount } from '../../components/StatusAccount/index.js';
import { handleNavigationHome } from '../../index.js';
import { SelectWallet } from '../../components/modals/SelectWallet/index.js';

importCSS('./src/pages/AddTransactionInfo/styles.css');

export const AddTransactionInfo = ({ walletInfo }) => {
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

  const updateValue = () => {
    $valueWrapper.className = 'transaction-value-wrapper';
    if (store.getTypeTransaction() === 'recipe') $valueWrapper.classList.add('transaction-value-wrapper-recipe');
    if (store.getTypeTransaction() === 'expense') $valueWrapper.classList.add('transaction-value-wrapper-expense');
    if (store.getTypeTransaction() === 'transfer') $valueWrapper.classList.add('transaction-value-wrapper-transfer');
  };
  updateValue();

  const $finishButton = Button({
    class: 'transaction-value-button-finish',
    title: 'Concluir',
    disabled: true,
    onClick: () => {
      if (date && category && wallet) {
        store.addBill(date, { amount: store.getTransactionAmount(), category, subcategory, wallet, status });
        handleNavigationHome();
      }
    },
  });

  let category;
  let subcategory;
  let date;
  let status = false;

  const setCategory = (newCategory) => {
    category = newCategory;
    date && category && wallet ? ($finishButton.disabled = false) : ($finishButton.disabled = true);
  };
  const setSubcategory = (newSubcategory) => (subcategory = newSubcategory);
  const setDate = (newDate) => {
    date = newDate;
    date && category && wallet ? ($finishButton.disabled = false) : ($finishButton.disabled = true);
  };
  const setStatus = (newStatus) => (status = newStatus);

  let $walletInfo;
  let wallet;
  if (walletInfo) {
    date && category && wallet ? ($finishButton.disabled = false) : ($finishButton.disabled = true);
    $walletInfo = InfoWallet(walletInfo, true, true, () => {
      const selectWallet = SelectWallet();
      document.body.appendChild(selectWallet);
    });
    wallet = walletInfo.wallet;
  } else
    $walletInfo = InfoWallet({ wallet: 'Selecione a Carteira' }, true, true, () => {
      const selectWallet = SelectWallet();
      document.body.appendChild(selectWallet);
    });

  const $categoryInfo = CategoryInfo({ category, subcategory, setCategory, setSubcategory });
  const $date = Date(setDate);
  const $installment = Installment();
  const $statusAccount = StatusAccount(setStatus);
  const $tag = Tag();
  const $comments = Comments();

  const $addTransactionContent = Element('div', {
    class: 'add-transaction-content-info',
    children: [HeaderTransaction(updateValue), $valueContent, $walletInfo, $categoryInfo],
  });
  const $addTransactionContainer = Element('div', {
    class: 'add-transaction-container-info',
    children: [$addTransactionContent, $date, $installment, $statusAccount, $tag, $comments, $finishButton],
  });
  return $addTransactionContainer;
};
