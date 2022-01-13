import { importCSS } from "../../utils/importCSS/index.js";
importCSS("./src/components/Test/index.css");

export const Test = () => {
  const $title = document.createElement("h1");
  $title.classList.add("title");
  $title.textContent = "teste";
  return $title;
};
