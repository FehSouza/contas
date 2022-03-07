import { Home } from './pages/Home/index.js';
import { Wallets } from './pages/Wallets/index.js';
import { AddTransactionValue } from './pages/AddTransactionValue/index.js';
import { Navbar } from './components/Navbar/index.js';
import { createElement } from './utils/createElement/index.js';
import { store } from './store/index.js';

const $container = document.querySelector('.container');

const $content = createElement('div', { class: 'content' });

const $home = Home();

export const handleNavigationHome = () => {
  const $home = Home();
  $content.innerHTML = '';
  $content.appendChild($home);
};

const handleNavigationWallets = () => {
  const $wallets = Wallets();
  $content.innerHTML = '';
  $content.appendChild($wallets);
};

const handleNavigationAddTransaction = () => {
  store.setTypeTransaction('expense');
  const $addTransaction = AddTransactionValue();
  $content.innerHTML = '';
  $content.appendChild($addTransaction);
};

$content.appendChild($home);

const $navbar = Navbar({ handleNavigationHome, handleNavigationAddTransaction, handleNavigationWallets });

$container.appendChild($content);
$container.appendChild($navbar);
