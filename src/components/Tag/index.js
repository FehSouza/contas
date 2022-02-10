import { Element } from '../shared/Element/index.js';
import { importCSS } from '../../utils/importCSS/index.js';
import { Button } from '../shared/Button/index.js';

importCSS('./src/components/Tag/styles.css');

export const Tag = () => {
  let listTags = [];

  const renderTag = (listTags) => {
    $newTagContent.innerHTML = '';
    for (let i = 0; i < listTags.length; i++) {
      const $deleteButton = Button({
        class: 'tag-button-delete',
        icon: 'delete',
        iconProps: 'tag-button-delete-icon',
        onClick: () => handleDeleteTag(i),
      });
      const $newTag = Element('div', { class: ['new-tag'], children: [listTags[i], $deleteButton] });
      $newTagContent.appendChild($newTag);
      $newTagContent.classList.add('new-tag-content');
      $tagContainer.classList.remove('tag-container');
      $tagContainer.classList.add('tag-container-new-tag');
    }
    if (listTags.length === 0) {
      $newTagContent.classList.remove('new-tag-content');
      $tagContainer.classList.remove('tag-container-new-tag');
      $tagContainer.classList.add('tag-container');
    }
  };

  const handleAddTag = () => {
    if ($tagInput.value && listTags.length < 3) {
      listTags.push($tagInput.value);
      $tagInput.value = '';
    }
    renderTag(listTags);
  };

  const handleDeleteTag = (position) => {
    let newTags = [];
    for (const i in listTags) if (position !== Number(i)) newTags.push(listTags[Number(i)]);
    listTags = newTags;
    renderTag(listTags);
  };

  const $newTagContent = Element('div');
  const $tagInput = Element('input', { class: 'tag-input' });
  const $tagButton = Button({ title: 'Adicionar', icon: 'add', class: 'tag-button', onClick: () => handleAddTag() });
  const $tagContent = Element('div', { class: 'tag-content', children: [$tagInput, $tagButton] });
  const $tagContainer = Element('div', { class: 'tag-container', children: [$newTagContent, $tagContent] });

  return $tagContainer;
};
