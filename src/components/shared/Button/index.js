import { Element } from '../Element/index.js';
import { Icon } from '../Icon/index.js';

export const Button = ({ title, icon, ...properties }) => {
  const children = [];

  if (title) children.push(title);
  if (icon) children.push(Icon(icon));

  const $button = Element('button', { ...properties, children });

  return $button;
};

// export const Button = (classes, text, nameIcon) => {
//   const $button = document.createElement('button');
//   $button.classList.add(classes);
//   if (text) $button.textContent = text;
//   if (nameIcon) $button.appendChild(Icon(nameIcon));
//   return $button;
// };
