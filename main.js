// Hello Light — small, dependency-free behaviours.

// Nav: compact on scroll
const nav = document.querySelector('.nav');
const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 24);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Mobile menu
const toggle = document.querySelector('.nav__toggle');
const menu = document.getElementById('mobile-menu');
if (toggle && menu) toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(open));
});
if (menu) menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menu.classList.remove('is-open');
  toggle.setAttribute('aria-expanded', 'false');
}));

// Reveal on scroll (sections + a few inner blocks)
const targets = document.querySelectorAll('main section > *, .footer > *');
targets.forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
targets.forEach(el => io.observe(el));

// Hide broken placeholder images gracefully (until real assets are added)
document.querySelectorAll('img').forEach(img => {
  const hide = () => { img.style.display = 'none'; };
  img.addEventListener('error', hide);
  if (img.complete && img.naturalWidth === 0) hide();
});

// Footer year
const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
