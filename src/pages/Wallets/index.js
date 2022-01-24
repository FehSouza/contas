import { Element } from '../../components/shared/Element/index.js';
import { importCSS } from '../../utils/importCSS/index.js';
import { Header } from '../../components/Header/index.js';
import { WalletsList } from '../../components/WalletsList/index.js';
import { GoalsList } from '../../components/GoalsList/index.js';

importCSS('./src/pages/Wallets/styles.css');

export const Wallets = () => {
  const $header = Header(100000);
  const $walletsListWrapper = WalletsList([
    { title: 'NuBank', user: 'Raul', amount: 10000 },
    { title: 'Santander', user: 'Fernanda', amount: 4500 },
    { title: 'Carteira', user: 'Raul', amount: 150 },
    { title: 'Itau', user: 'Fernanda', amount: 0.8 },
  ]);

  const $goalsListWrapper = GoalsList([
    { title: 'Reserva', amount: 200 },
    { title: 'Poupança', amount: 18000 },
  ]);

  const $walletContent = Element('div', {
    class: 'wallet-content',
    children: [$walletsListWrapper, $goalsListWrapper],
  });

  const $walletPage = Element('div', { class: 'wallets-page', children: [$header, $walletContent] });

  return $walletPage;
};
