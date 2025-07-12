// Toggle light/dark theme, persist preference
const btn = document.getElementById('theme-toggle');
const root = document.documentElement;

function setTheme(theme) {
  theme === 'dark' ? root.classList.add('dark') : root.classList.remove('dark');
  btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', theme);
}

const saved = localStorage.getItem('theme');
setTheme(saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));

btn.addEventListener('click', () => {
  setTheme(root.classList.contains('dark') ? 'light' : 'dark');
});
