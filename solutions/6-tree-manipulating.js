export default (doc) => {
  [...doc.getElementsByTagName('div')].forEach(div => {
    [...div.childNodes].forEach(node => {
      if (node instanceof Text && node.textContent.trim()) {
        const p = doc.createElement('p');
        p.textContent = node.textContent.trim();
        node.replaceWith(p);
      }
    });
  });
};