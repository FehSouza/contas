import { createElement } from '../../utils/createElement/index.js';
import { importCSS } from '../../utils/importCSS/index.js';
import { Header } from '../../components/Header/index.js';
import { WalletsList } from '../../components/WalletsList/index.js';
import { GoalsList } from '../../components/GoalsList/index.js';
import { Button } from '../../components/shared/Button/index.js';
import { AddWallet } from '../../components/modals/AddWallet/index.js';
import { store } from '../../store/index.js';

importCSS('pages/Wallets');

const GOALS_MOCK = [
  { title: 'Reserva', amount: 200 },
  { title: 'Poupança', amount: 18000 },
];

export const Wallets = () => {
  const $header = Header(store.getAmountTotal());

  const $titleWallets = createElement('span', { class: 'wallets-title', textContent: 'Carteiras' });
  const $walletsListWrapper = WalletsList({});
  const $addWalletButton = Button({
    title: 'Nova carteira',
    class: 'add-wallet-button',
    onClick: () => {
      const addWallet = AddWallet();
      document.body.appendChild(addWallet);
    },
  });
  const $walletsWrapper = createElement('div', {
    class: 'wallets-wrapper-page',
    children: [$walletsListWrapper, $addWalletButton],
  });
  const $walletsContent = createElement('div', {
    class: 'wallets-content-page',
    children: [$titleWallets, $walletsWrapper],
  });
  $walletsListWrapper.classList.add('wallets-list-wrapper-page');

  const $goalsListWrapper = GoalsList(GOALS_MOCK);

  const $walletContent = createElement('div', {
    class: 'wallet-content',
    children: [$walletsContent, $goalsListWrapper],
  });
  const $walletContainer = createElement('div', {
    class: 'wallet-container',
    children: $walletContent,
  });
  const $walletPage = createElement('div', { class: 'wallets-page', children: [$header, $walletContainer] });
  return $walletPage;
};
