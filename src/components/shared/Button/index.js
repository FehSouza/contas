import { Icon } from '../Icon/index.js';
import { Element } from '../Element/index.js';

export const Button = ({ title, icon, ...properties }) => {
  const $button = Element('button', { ...properties, children: [title, Icon(icon)] });
  return $button;
};
// export const Button = (classes, text, nameIcon) => {
//   const $button = document.createElement('button');
//   $button.classList.add(classes);
//   if (text) $button.textContent = text;
//   if (nameIcon) $button.appendChild(Icon(nameIcon));
//   return $button;
// };
