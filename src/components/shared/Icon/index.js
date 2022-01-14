export const Icon = (icon) => {
  const $icon = document.createElement('i');
  if (icon === 'coin') $icon.classList.add('fas', 'fa-coins');
  if (icon === 'add') $icon.classList.add('fas', 'fa-plus');
  return $icon;
};
