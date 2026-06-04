export default () => {
  document.querySelectorAll('.nav').forEach(nav => {
    nav.querySelectorAll('[data-bs-toggle="tab"], [data-bs-toggle="pill"]').forEach(tab => {
      tab.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = (tab.getAttribute('data-bs-target') || tab.getAttribute('href')).replace('#', '');
        const targetPane = document.getElementById(targetId);
        if (targetPane) {
          const container = tab.closest('.nav');
          const content = targetPane.closest('.tab-content');
          container.querySelectorAll('.nav-link').forEach(t => t.classList.remove('active'));
          content?.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
          tab.classList.add('active');
          targetPane.classList.add('active');
        }
      });
    });
  });
};