import { createElement } from '../../../utils/createElement/index.js';
import { Icon } from '../Icon/index.js';

export const Button = ({ title, icon, iconProps, ...properties }) => {
  const children = [];

  if (title) children.push(title);
  if (icon) children.push(Icon(icon, iconProps));

  const $button = createElement('button', { ...properties, children });

  return $button;
};

// export const Button = (classes, text, nameIcon) => {
//   const $button = document.createElement('button');
//   $button.classList.add(classes);
//   if (text) $button.textContent = text;
//   if (nameIcon) $button.appendChild(Icon(nameIcon));
//   return $button;
// };
