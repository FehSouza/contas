export const Element = (type, properties) => {
  const elem = document.createElement(type);
  for (const key in properties) {
    if (key === 'class' && Array.isArray(properties[key])) {
      elem.classList.add(...properties[key]);
      continue;
    }
    if (key === 'class' && !Array.isArray(properties[key])) {
      elem.classList.add(properties[key]);
      continue;
    }
    if (key === 'children' && Array.isArray(properties[key])) {
      for (const item of properties[key]) {
        if (item === undefined || item === null) continue;
        if (typeof item === 'string') {
          const textNode = document.createTextNode(item);
          elem.appendChild(textNode);
          continue;
        }
        elem.appendChild(item);
      }
      continue;
    }
    if (key === 'children' && !Array.isArray(properties[key])) {
      if (properties[key] === undefined || properties[key] === null) continue;
      if (typeof properties[key] === 'string') {
        const textNode = document.createTextNode(properties[key]);
        elem.appendChild(textNode);
        continue;
      }
      elem.appendChild(properties[key]);
      continue;
    }
    if (key.toLowerCase() === 'onclick') {
      elem.addEventListener('click', properties[key]);
      continue;
    }
    elem.setAttribute(key, properties[key]);
  }
  return elem;
};
