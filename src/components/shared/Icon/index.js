export const Icon = (icon, classes) => {
  const $icon = document.createElement('i');
  if (icon === 'coin') $icon.classList.add('fas', 'fa-coins', classes);
  if (icon === 'add') $icon.classList.add('fas', 'fa-plus', classes);
  if (icon === 'home') $icon.classList.add('fas', 'fa-home', classes);
  if (icon === 'wallet') $icon.classList.add('fas', 'fa-wallet', classes);
  if (icon === 'backspace') $icon.classList.add('fas', 'fa-backspace', classes);

  return $icon;
};
