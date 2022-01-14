import { Header } from '../components/Header/index.js';

const $container = document.querySelector('.container');

export const Home = () => {
  const $header = Header(100000);
  $container.appendChild($header);
};
