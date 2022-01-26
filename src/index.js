import { Home } from './pages/Home/index.js';
import { Wallets } from './pages/Wallets/index.js';
import { Navbar } from './components/Navbar/index.js';
import { Element } from './components/shared/Element/index.js';

const $container = document.querySelector('.container');

const $content = Element('div', { class: 'content' });

const $home = Home();
const $wallets = Wallets();

const handleNavigationHome = () => {
  $content.innerHTML = '';
  $content.appendChild($home);
};

const handleNavigationWallets = () => {
  $content.innerHTML = '';
  $content.appendChild($wallets);
};

$content.appendChild($home);

const $navbar = Navbar(handleNavigationHome, handleNavigationWallets);
const $bottom = Element('div', { class: 'navbar', children: $navbar });

$container.appendChild($content);
$container.appendChild($bottom);
