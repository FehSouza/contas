import { Home } from './pages/Home/index.js';
import { Navbar } from './components/Navbar/index.js';
import { Element } from './components/shared/Element/index.js';

const $container = document.querySelector('.container');

const $content = Element('div', { class: 'content', children: Home() });
const $navbar = Element('div', { class: 'navbar', children: Navbar() });

$container.appendChild($content);
$container.appendChild($navbar);
