import { Header } from '../../components/Header/index.js';
import { Button } from '../../components/shared/Button/index.js';
import { Element } from '../../components/shared/Element/index.js';

export const Home = () => {
  const button = Button({ title: 'clique', class: 'botao' });
  const $page = Element('div', { class: 'page-home', children: button });
  const $teste2 = Element('div', { class: 'abc' });
  const $header = Header(100000);
  $page.appendChild($header);
  const $teste = Element('div', {
    class: 'dfsdf',
    'data-test': 5,
    src: 'img',
    onClick: () => {
      console.log('funciona');
    },
    children: [$teste2, 'teste'],
  });
  $page.appendChild($teste);
  return $page;
};
