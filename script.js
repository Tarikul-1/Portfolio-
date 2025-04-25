document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('night-mode');
    themeToggle.textContent = document.body.classList.contains('night-mode')
      ? 'Light Mode'
      : 'Night Mode';
  });
});

