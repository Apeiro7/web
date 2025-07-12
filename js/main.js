// AOS and Preloader
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({ once: true, duration: 600 });
  const pre = document.getElementById('preloader');
  setTimeout(() => pre.style.opacity = 0, 300);
  setTimeout(() => pre.remove(), 800);
});

// Highlight active nav link
const path = window.location.pathname.split('/').pop();
document.querySelectorAll('.nav-link').forEach(a => {
  if (a.getAttribute('href') === path) a.classList.add('active');
});
