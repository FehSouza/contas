import { Header } from '../../components/Header/index.js';
import { AccountsDay } from '../../components/AccountsDay/index.js';
import { Element } from '../../components/shared/Element/index.js';
import { importCSS } from '../../utils/importCSS/index.js';

importCSS('./src/pages/Home/styles.css');

export const Home = () => {
  const $header = Header(100000);
  const $accountsDay = AccountsDay({ date: '13/01/2022', category: 'food', typeCategory: 'Almoço', wallet: 'NuBank', moneyValue: 150, status: 'pago' });
  const $containerAccountsPerDay = Element('div', {
    class: 'accounts-per-day-container',
    children: $accountsDay,
  });
  const $pageHome = Element('div', { class: 'home-page', children: [$header, $containerAccountsPerDay] });

  return $pageHome;
};
