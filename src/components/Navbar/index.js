import { Element } from '../shared/Element/index.js';
import { Button } from '../shared/Button/index.js';
import { importCSS } from '../../utils/importCss/index.js';

importCSS('./src/components/Navbar/styles.css');

export const Navbar = () => {
  const $buttonHome = Button({ icon: 'home', class: 'button-home' });
  const $buttonAddAccount = Button({ icon: 'add', class: 'button-add-account' });
  const $buttonWallet = Button({ icon: 'wallet', class: 'button-wallet' });
  const $pageNavbar = Element('div', {
    class: 'page-navbar',
    children: [$buttonHome, $buttonAddAccount, $buttonWallet],
  });

  return $pageNavbar;
};
