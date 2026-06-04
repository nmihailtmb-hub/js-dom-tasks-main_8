export default (root) => {
  const result = [];
  const walk = (el) => {
    if (el.tagName === 'P') result.push(el.textContent.trim());
    [...el.children].forEach(walk);
  };
  walk(root);
  return result;
};