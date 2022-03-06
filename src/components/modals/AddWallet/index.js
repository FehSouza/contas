import { Element } from '../../shared/Element/index.js';
import { importCSS } from '../../../utils/importCSS/index.js';
import { Button } from '../../shared/Button/index.js';
import { store } from '../../../store/index.js';
import { WalletsList } from '../../WalletsList/index.js';

importCSS('./src/components/modals/AddWallet/styles.css');

export const AddWallet = () => {
  const $title = Element('span', { class: 'add-new-wallet-title-2', children: 'Nome da carteira:' });
  const $titleInput = Element('input', {
    class: 'add-new-wallet-input-2',
    type: 'text',
    onkeyup: () => handleInputs(),
  });
  const $titleWrapper = Element('div', { class: 'add-new-wallet-wrapper-2', children: [$title, $titleInput] });

  const $user = Element('span', { class: 'add-new-wallet-title-2', children: 'Nome do usuário:' });
  const $userInput = Element('input', { class: 'add-new-wallet-input-2', type: 'text', onkeyup: () => handleInputs() });
  const $userWrapper = Element('div', { class: 'add-new-wallet-wrapper-2', children: [$user, $userInput] });

  const $amount = Element('span', { class: 'add-new-wallet-title-2', children: 'Valor inicial:' });
  const $amountInput = Element('input', {
    class: 'add-new-wallet-input-2',
    type: 'number',
    onkeyup: () => handleInputs(),
  });
  const $amountWrapper = Element('div', { class: 'add-new-wallet-wrapper-2', children: [$amount, $amountInput] });

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

  const $container = Element('div', {
    class: 'add-wallet-container',
    children: [$titleWrapper, $userWrapper, $amountWrapper, $buttonAddWallet],
    onClick: (e) => {
      e.stopPropagation();
    },
  });

  const $modal = Element('div', {
    class: 'add-wallet-modal',
    children: $container,
    onClick: (e) => {
      e.target.remove();
    },
  });
  return $modal;
};
