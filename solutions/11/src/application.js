import 'whatwg-fetch';

export default () => {
  document.querySelectorAll('[data-autocomplete]').forEach(input => {
    const url = input.dataset.autocomplete;
    const name = input.dataset.autocompleteName;
    const list = document.querySelector(`ul[data-autocomplete-name="${name}"]`);
    
    list && input.addEventListener('input', async (e) => {
      const res = await fetch(`${window.location.origin}/${url}?search=${encodeURIComponent(e.target.value)}`);
      const data = await res.json();
      list.innerHTML = data.length ? data.map(item => `<li>${item}</li>`).join('') : '<li>Nothing</li>';
    });
  });
};
