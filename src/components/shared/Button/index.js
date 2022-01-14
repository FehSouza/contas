import { Icon } from '../Icon/index.js';

export const Button = (classes, text, nameIcon) => {
  const $button = document.createElement('button');
  $button.classList.add(classes);
  if (text) $button.textContent = text;
  if (nameIcon) $button.appendChild(Icon(nameIcon));
  return $button;
};
