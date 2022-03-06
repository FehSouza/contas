export const Icon = (icon, classes) => {
  const $icon = document.createElement('i');
  if (icon === 'coin') $icon.classList.add('fas', 'fa-coins', classes);
  if (icon === 'add') $icon.classList.add('fas', 'fa-plus', classes);
  if (icon === 'home') $icon.classList.add('fas', 'fa-home', classes);
  if (icon === 'wallet') $icon.classList.add('fas', 'fa-wallet', classes);
  if (icon === 'backspace') $icon.classList.add('fas', 'fa-backspace', classes);
  if (icon === 'delete') $icon.classList.add('fas', 'fa-times', classes);
  if (icon === 'category') $icon.classList.add('fas', 'fa-list', classes);
  if (icon === 'check') $icon.classList.add('fas', 'fa-check', classes);
  if (icon === 'delete-trash') $icon.classList.add('fa-solid', 'fa-trash-can', classes);

  return $icon;
};
