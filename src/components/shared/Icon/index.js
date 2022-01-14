export const Icon = (icon) => {
  const $icon = document.createElement('i');
  if (icon === 'coin') $icon.classList.add('fas', 'fa-coins');
  return $icon;
};
