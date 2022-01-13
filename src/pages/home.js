import { Test } from "../components/Test/index.js";

const $container = document.querySelector(".container");

export const renderHome = () => {
  const $title = Test();
  $container.appendChild($title);
};
