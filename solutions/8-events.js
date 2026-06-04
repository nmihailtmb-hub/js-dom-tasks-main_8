export default () => {
  const button = document.getElementById('alert-generator');
  const container = document.querySelector('.alerts');
  let counter = 0;
  
  button.addEventListener('click', () => {
    const alert = document.createElement('div');
    alert.className = 'alert alert-primary';
    alert.textContent = `Alert ${++counter}`;
    container.insertBefore(alert, container.firstChild);
  });
};