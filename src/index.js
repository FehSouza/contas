import { Home } from './pages/Home/index.js';
import { Element } from './components/shared/Element/index.js';

const $container = document.querySelector('.container');

const $content = Element('div', { class: 'content' });
$container.appendChild($content);

$content.appendChild(Home());
