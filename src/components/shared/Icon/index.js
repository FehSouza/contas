export const Icon = (icon) => {
  const $icon = document.createElement('i');
  if (icon === 'coin') $icon.classList.add('fas', 'fa-coins');
  if (icon === 'add') $icon.classList.add('fas', 'fa-plus');
  if (icon === 'home') $icon.classList.add('fas', 'fa-home');
  if (icon === 'wallet') $icon.classList.add('fas', 'fa-wallet');

  return $icon;
};
