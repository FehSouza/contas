import { createElement } from '../../utils/createElement/index.js';
import { Button } from '../shared/Button/index.js';
import { Icon } from '../shared/Icon/index.js';
import { importCSS } from '../../utils/importCSS/index.js';

importCSS('CategoryInfo');

export const CategoryInfo = ({ category, subcategory, setCategory, setSubcategory }) => {
  const $icon = createElement('div', { class: 'category-info-icon', children: Icon('category') });

  const $category = createElement('h3', { class: 'category-info-name', textContent: 'Selecione a Categoria' });
  if (category) $category.textContent = category;
  const $subCategory = createElement('span', { class: 'category-info-sub-name' });
  if (subcategory) $subCategory.textContent = subcategory;
  const $categoryAndSub = createElement('div', {
    class: 'category-info-name-sub-name',
    children: [$category, $subCategory],
  });

  const $categoryButton = Button({
    class: 'category-button',
    icon: 'add',
    iconProps: 'category-info-button-icon',
    onClick: () => {
      setCategory('food');
      setSubcategory('restaurante');
    },
  });

  const $categoryContent = createElement('div', {
    class: 'category-info-content',
    children: [$icon, $categoryAndSub, $categoryButton],
  });
  return $categoryContent;
};
