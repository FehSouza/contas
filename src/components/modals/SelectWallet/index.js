import { createElement } from '../../../utils/createElement/index.js';
import { Button } from '../../shared/Button/index.js';
import { importCSS } from '../../../utils/importCSS/index.js';
import { WalletsList } from '../../WalletsList/index.js';
import { InfoWallet } from '../../WalletInfo/index.js';
import { AddTransactionInfo } from '../../../pages/AddTransactionInfo/index.js';
import { store } from '../../../store/index.js';

importCSS('modals/SelectWallet');

export const SelectWallet = (add) => {
  const addWalletClick = (id) => {
    store.setWallet(id);
    $container.remove();
    const $addTransactionContent = document.querySelector('.add-transaction-content');
    $addTransactionContent.innerHTML = '';
    $addTransactionContent.appendChild(AddTransactionInfo({ walletInfo: store.getWallet() }));
    store.setAddWalletStatus(false);
  };

  const addNewWallet = () => {
    if (store.getAddWalletStatus()) {
      $addWalletWrapper.removeChild($addNewWallet);
      store.setAddWalletStatus(false);
    } else {
      $addWalletWrapper.appendChild($addNewWallet);
      store.setAddWalletStatus(true);
    }
  };

  const $title = createElement('span', { class: 'add-new-wallet-title', textContent: 'Nome da carteira:' });
  const $titleInput = createElement('input', {
    class: 'add-new-wallet-input',
    type: 'text',
    onkeyup: () => handleInputs(),
  });
  const $titleWrapper = createElement('div', { class: 'add-new-wallet-wrapper', children: [$title, $titleInput] });

  const $user = createElement('span', { class: 'add-new-wallet-title', textContent: 'Nome do usuário:' });
  const $userInput = createElement('input', {
    class: 'add-new-wallet-input',
    type: 'text',
    onkeyup: () => handleInputs(),
  });
  const $userWrapper = createElement('div', { class: 'add-new-wallet-wrapper', children: [$user, $userInput] });

  const $amount = createElement('span', { class: 'add-new-wallet-title', textContent: 'Valor inicial:' });
  const $amountInput = createElement('input', {
    class: 'add-new-wallet-input',
    type: 'number',
    onkeyup: () => handleInputs(),
  });
  const $amountWrapper = createElement('div', { class: 'add-new-wallet-wrapper', children: [$amount, $amountInput] });

  const handleInputs = () => {
    $titleInput.value && $userInput.value && $amountInput.value
      ? ($buttonAddWallet.disabled = false)
      : ($buttonAddWallet.disabled = true);
  };

  let $listWallets = WalletsList({ blueCard: true, isButton: true, funcButton: addWalletClick, animation: true });

  const $buttonAddWallet = Button({
    title: 'Criar carteira',
    class: 'add-new-wallet-button',
    disabled: true,
    onClick: () => {
      store.addWallet({
        wallet: $titleInput.value,
        user: $userInput.value,
        amount: Number($amountInput.value),
        id: Math.random().toString(36).slice(2, 11),
      });
      $titleInput.value = '';
      $userInput.value = '';
      $amountInput.value = '';
      $buttonAddWallet.disabled = true;
      $addWalletWrapper.removeChild($addNewWallet);
      store.setAddWalletStatus(false);
      $listWallets.remove();
      $listWallets = WalletsList({ blueCard: true, isButton: true, funcButton: addWalletClick, animation: true });
      $textWithoutWallet.remove();
      $content.appendChild($listWallets);
    },
  });

  const $addWallet = InfoWallet(
    { wallet: 'Adicione uma nova carteira', amount: false },
    { blueCard: true, isButton: true, funcButton: addNewWallet }
  );
  const $addNewWallet = createElement('div', {
    class: 'add-new-wallet-content',
    children: [$titleWrapper, $userWrapper, $amountWrapper, $buttonAddWallet],
  });

  const $addWalletWrapper = createElement('div', { class: 'add-wallet-wrapper', children: $addWallet });

  if (add) {
    $addWalletWrapper.appendChild($addNewWallet);
    store.setAddWalletStatus(true);
  }

  const $content = createElement('div', {
    class: 'select-wallet-content',
    children: [$addWalletWrapper],
    onClick: (event) => event.stopPropagation(),
  });
  const $textWithoutWallet = createElement('span', {
    class: 'text-without-wallet',
    textContent: 'Não há nenhuma carteira adicionada.',
  });

  store.getWallets().length ? $content.appendChild($listWallets) : $content.appendChild($textWithoutWallet);

  const $container = createElement('div', {
    class: 'select-wallet-container',
    children: $content,
    onClick: (event) => {
      event.target.remove(), store.setAddWalletStatus(false);
    },
  });
  return $container;
};
