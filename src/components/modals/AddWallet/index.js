import { createElement } from '../../../utils/createElement/index.js';
import { importCSS } from '../../../utils/importCSS/index.js';
import { Button } from '../../shared/Button/index.js';
import { store } from '../../../store/index.js';
import { WalletsList } from '../../WalletsList/index.js';

importCSS('modals/AddWallet');

export const AddWallet = () => {
  const $title = createElement('span', { class: 'add-new-wallet-title-2', textContent: 'Nome da carteira:' });
  const $titleInput = createElement('input', {
    class: 'add-new-wallet-input-2',
    type: 'text',
    keyup: () => handleInputs(),
  });
  const $titleWrapper = createElement('div', { class: 'add-new-wallet-wrapper-2', children: [$title, $titleInput] });

  const $user = createElement('span', { class: 'add-new-wallet-title-2', textContent: 'Nome do usuário:' });
  const $userInput = createElement('input', {
    class: 'add-new-wallet-input-2',
    type: 'text',
    keyup: () => handleInputs(),
  });
  const $userWrapper = createElement('div', { class: 'add-new-wallet-wrapper-2', children: [$user, $userInput] });

  const $amount = createElement('span', { class: 'add-new-wallet-title-2', textContent: 'Valor inicial:' });
  const $amountInput = createElement('input', {
    class: 'add-new-wallet-input-2',
    type: 'number',
    keyup: () => handleInputs(),
  });
  const $amountWrapper = createElement('div', { class: 'add-new-wallet-wrapper-2', children: [$amount, $amountInput] });

  const handleInputs = () => {
    $titleInput.value && $userInput.value && $amountInput.value
      ? ($buttonAddWallet.disabled = false)
      : ($buttonAddWallet.disabled = true);
  };
  const walletList = document.querySelector('.wallets-list-wrapper');
  const walletContent = document.querySelector('.wallets-wrapper-page');

  const $buttonAddWallet = Button({
    title: 'Criar carteira',
    class: 'add-new-wallet-button-2',
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
      $modal.remove();
      walletList.remove();
      walletContent.prepend(WalletsList({}));
    },
  });

  const $container = createElement('div', {
    class: 'add-wallet-container',
    children: [$titleWrapper, $userWrapper, $amountWrapper, $buttonAddWallet],
    onClick: (e) => {
      e.stopPropagation();
    },
  });

  const $modal = createElement('div', {
    class: 'add-wallet-modal',
    children: $container,
    onClick: (e) => {
      e.target.remove();
    },
  });
  return $modal;
};
