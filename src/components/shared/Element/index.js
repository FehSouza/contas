export const Element = (type, classes, nameAttribute, valueAttribute, text) => {
  const elem = document.createElement(type);
  elem.classList.add(classes);
  if (nameAttribute && valueAttribute) elem.setAttribute(nameAttribute, valueAttribute);
  if (text) elem.textContent = text;
  return elem;
};
