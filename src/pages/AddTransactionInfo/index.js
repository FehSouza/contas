import { createElement } from '../../utils/createElement/index.js';
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

importCSS('pages/AddTransactionInfo');

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
  const $value = createElement('span', {
    class: 'transaction-value',
    textContent: formatMoney(store.getTransactionAmount()),
  });
  const $valueWrapper = createElement('div', { class: 'transaction-value-wrapper', children: $value });
  const $boxInvisible = createElement('div', { class: 'box-invisible' });

  const $valueContent = createElement('div', {
    class: 'transaction-value-content',
    children: [$deleteButton, $valueWrapper, $boxInvisible],
  });

  const updateValue = () => {
    $valueWrapper.className = 'transaction-value-wrapper';
    $value.innerHTML = '';
    $value.textContent = formatMoney(store.getTransactionAmount());
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
        const amount = store.getTransactionAmount();
        const type = store.getTypeTransaction();
        store.addBill(date, { amount, category, subcategory, wallet, status, type });
        store.setAmountTotal({ amount, type });
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
    $walletInfo = InfoWallet(walletInfo, {
      blueCard: true,
      isButton: true,
      funcButton: () => {
        const selectWallet = SelectWallet();
        document.body.appendChild(selectWallet);
      },
    });
    wallet = walletInfo.wallet;
  } else
    $walletInfo = InfoWallet(
      { wallet: 'Selecione a Carteira' },
      {
        blueCard: true,
        isButton: true,
        funcButton: () => {
          const selectWallet = SelectWallet();
          document.body.appendChild(selectWallet);
        },
      }
    );

  const $categoryInfo = CategoryInfo({ category, subcategory, setCategory, setSubcategory });
  const $date = Date(setDate);
  const $installment = Installment();
  const $statusAccount = StatusAccount(setStatus);
  const $tag = Tag();
  const $comments = Comments();

  const $addTransactionContent = createElement('div', {
    class: 'add-transaction-content-info',
    children: [HeaderTransaction(updateValue), $valueContent, $walletInfo, $categoryInfo],
  });
  const $addTransactionContainer = createElement('div', {
    class: 'add-transaction-container-info',
    children: [$addTransactionContent, $date, $installment, $statusAccount, $tag, $comments, $finishButton],
  });
  return $addTransactionContainer;
};
