import { Header } from '../components/Header/index.js';

const $content = document.querySelector('.content');

export const Home = () => {
  const $header = Header(100000);
  $content.appendChild($header);
};
