import { Element } from '../shared/Element/index.js';
import { Button } from '../shared/Button/index.js';
import { Icon } from '../shared/Icon/index.js';
import { importCSS } from '../../utils/importCSS/index.js';

importCSS('./src/components/CategoryInfo/styles.css');

export const CategoryInfo = ({ category, subcategory, setCategory, setSubcategory }) => {
  const $icon = Element('div', { class: 'category-info-icon', children: Icon('category') });

  const $category = Element('h3', { class: 'category-info-name', children: 'Selecione a Categoria' });
  if (category) $category.textContent = category;
  const $subCategory = Element('span', { class: 'category-info-sub-name' });
  if (subcategory) $subCategory.textContent = subcategory;
  const $categoryAndSub = Element('div', { class: 'category-info-name-sub-name', children: [$category, $subCategory] });

  const $categoryButton = Button({
    class: 'category-button',
    icon: 'add',
    iconProps: 'category-info-button-icon',
    onClick: () => {
      setCategory('food');
      setSubcategory('restaurante');
    },
  });

  const $categoryContent = Element('div', {
    class: 'category-info-content',
    children: [$icon, $categoryAndSub, $categoryButton],
  });
  return $categoryContent;
};
