// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Scroll to top button
const scrollBtn = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) scrollBtn.classList.add('show');
  else scrollBtn.classList.remove('show');
});
scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Certification popup
const certCard = document.getElementById('cert-card');
const certPopup = document.getElementById('cert-popup');
const closePopup = document.getElementById('close-popup');

certCard.addEventListener('click', () => certPopup.style.display = 'flex');
closePopup.addEventListener('click', () => certPopup.style.display = 'none');
window.addEventListener('click', (e) => { if (e.target === certPopup) certPopup.style.display = 'none'; });
