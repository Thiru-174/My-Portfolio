// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
  });
  
  // Dark Mode Toggle
// Initialize AOS once at page load
AOS.init({
  duration: 1000,
  once: false
});

const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  // Toggle dark mode class
  document.body.classList.toggle('dark-mode');
  
  // Re-initialize AOS so animations are available in dark mode
  AOS.init({
    duration: 1000,
    once: false
  });
});

const contactBtn = document.getElementById('contact-btn');
if (contactBtn) {
  contactBtn.addEventListener('click', () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

  // Mobile Navigation Toggle (for screens below 768px)
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.querySelector('nav');
  if (navToggle) {
    navToggle.addEventListener('change', () => {
      if (navToggle.checked) {
        nav.classList.add('active');
      } else {
        nav.classList.remove('active');
      }
    });
  }
  
  // Typing Animation for "typing-container"
  const typingText = document.getElementById('typing-text');
  const phrases = ["About"];
  let phraseIndex = 0;
  let letterIndex = 0;
  let currentPhrase = "";
  let isDeleting = false;
  
  function type() {
    if (phraseIndex >= phrases.length) {
      phraseIndex = 0;
    }
    currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
      typingText.textContent = currentPhrase.substring(0, letterIndex--);
      if (letterIndex < 0) {
        isDeleting = false;
        phraseIndex++;
        setTimeout(type, 500);
      } else {
        setTimeout(type, 50);
      }
    } else {
      typingText.textContent = currentPhrase.substring(0, letterIndex++);
      if (letterIndex > currentPhrase.length) {
        isDeleting = true;
        setTimeout(type, 1500);
      } else {
        setTimeout(type, 150);
      }
    }
  }
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  document.addEventListener('DOMContentLoaded', type);

  // View CV Option: Open PDF in a new tab
  const viewCVBtn = document.getElementById('view-cv');
  if (viewCVBtn) {
    viewCVBtn.addEventListener('click', () => {
      window.open('Thirumalaivasan_CV.pdf', '_blank');
    });
  }
  