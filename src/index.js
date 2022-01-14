import { Home } from './pages/home.js';
import { Button } from './components/shared/Button/index.js';

const $container = document.querySelector('.content');
const $navbar = document.querySelector('.navbar');

const $buttonAddTransaction = Button('button-add-transaction-navbar', undefined, 'add');

$navbar.appendChild($buttonAddTransaction);

Home();
