import camelCase from 'lodash/camelCase';

export default (doc) => {
  [...doc.body.getElementsByTagName('*')].forEach(el => {
    const classAttr = el.getAttribute('class');
    if (classAttr) {
      el.setAttribute('class', classAttr.split(' ').map(camelCase).join(' '));
    }
  });
};