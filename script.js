const toggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
if (toggle && mobileMenu) {
  toggle.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    toggle.classList.toggle('active', open);
    toggle.setAttribute('aria-expanded', open);
  });
  mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    mobileMenu.classList.remove('open'); toggle.classList.remove('active'); toggle.setAttribute('aria-expanded', 'false');
  }));
}

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), { threshold: 0.14 });
document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));

const glow = document.querySelector('.cursor-glow');
if (glow && window.matchMedia('(pointer:fine)').matches) {
  window.addEventListener('pointermove', (event) => {
    glow.style.transform = `translate(${event.clientX - 180}px, ${event.clientY - 180}px)`;
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const form = document.querySelector('#contact-form');
if (form) form.addEventListener('submit', (event) => {
  event.preventDefault();
  const values = new FormData(form);
  const body = `Nombre: ${values.get('name')}\nEmail: ${values.get('email')}\nTeléfono: ${values.get('phone') || 'No indicado'}\n\nConsulta:\n${values.get('reason')}`;
  window.location.href = `mailto:lima.analia2022@gmail.com?subject=${encodeURIComponent('Nueva consulta desde la web')}&body=${encodeURIComponent(body)}`;
});
