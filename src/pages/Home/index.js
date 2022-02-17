import { Header } from '../../components/Header/index.js';
import { AccountsDay } from '../../components/AccountsDay/index.js';
import { Element } from '../../components/shared/Element/index.js';
import { importCSS } from '../../utils/importCSS/index.js';
import { store } from '../../store/index.js';

importCSS('./src/pages/Home/styles.css');

export const Home = () => {
  const $header = Header(100000);

  const $containerAccountsPerDay = Element('div', { class: 'accounts-per-day-container' });

  if (store.getBills().length !== 0) {
    const $accountsDay = store.getBills().map((item) => AccountsDay(item));
    $accountsDay.forEach((elem) => $containerAccountsPerDay.appendChild(elem));
  } else $containerAccountsPerDay.textContent = 'teste';

  const $pageHome = Element('div', { class: 'home-page', children: [$header, $containerAccountsPerDay] });
  return $pageHome;
};
