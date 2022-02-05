import { Element } from '../shared/Element/index.js';
import { Button } from '../shared/Button/index.js';
import { Icon } from '../shared/Icon/index.js';
import { importCSS } from '../../utils/importCSS/index.js';

importCSS('./src/components/CategoryInfo/styles.css');

export const CategoryInfo = ({ categoryName, subcategoryName }) => {
  const $icon = Element('div', { class: 'category-info-icon', children: Icon('category') });

  const $name = Element('h3', { class: 'category-info-name', children: 'Categoria' });
  if (categoryName) $name.textContent = categoryName;
  const $subName = Element('span', { class: 'category-info-sub-name' });
  if (subcategoryName) $subName.textContent = subcategoryName;
  const $nameAndSubName = Element('div', { class: 'category-info-name-sub-name', children: [$name, $subName] });

  const $categoryButton = Button({
    class: 'category-info-button',
    icon: 'add',
    iconProps: 'category-info-button-icon',
  });

  const $categoryContent = Element('div', {
    class: 'category-info-content',
    children: [$icon, $nameAndSubName, $categoryButton],
  });
  return $categoryContent;
};
