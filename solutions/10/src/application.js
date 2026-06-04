import escapeHtml from 'escape-html';

export default () => {
  const form = document.querySelector('form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const [email, name, comment] = ['email', 'name', 'comment'].map(field => escapeHtml(form.querySelector(`[name="${field}"]`)?.value || ''));
    form.replaceWith(Object.assign(document.createElement('div'), { innerHTML: `<p>Feedback has been sent</p><div>Email: ${email}</div><div>Name: ${name}</div><div>Comment: ${comment}</div>` }));
  });
};