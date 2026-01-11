'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const tooltip = document.querySelector('.tooltip');
  const phoneBtn = document.querySelector('.icon--phone');
  const firstLink = tooltip ? tooltip.querySelector('.tooltip__link') : null;

  if (!tooltip || !phoneBtn) return;

  const toggleTooltip = (forceState) => {
    let isActive;

    if (typeof forceState === 'boolean') {
      isActive = forceState;
      if (isActive) {
        tooltip.classList.add('is-active');
      } else {
        tooltip.classList.remove('is-active');
      }
    } else {
      isActive = tooltip.classList.toggle('is-active');
    }

    phoneBtn.setAttribute('aria-expanded', String(isActive));

    if (isActive && firstLink) {
      firstLink.focus();
    }
  };

  phoneBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleTooltip();
  });

  document.addEventListener('click', (e) => {
    if (tooltip.classList.contains('is-active') && !tooltip.contains(e.target)) {
      toggleTooltip(false);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && tooltip.classList.contains('is-active')) {
      toggleTooltip(false);
      phoneBtn.focus();
    }
  });

});
