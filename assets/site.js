(() => {
  const root = document.documentElement;
  root.classList.add('js');

  const year = String(new Date().getFullYear());
  document.querySelectorAll('[data-year]').forEach((node) => { node.textContent = year; });

  const revealItems = document.querySelectorAll('.reveal');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if ('IntersectionObserver' in window && !reduceMotion) {
    const observer = new IntersectionObserver((entries, activeObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          activeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  // Motion is activated only while its artwork is visible, keeping idle work low.
  const motionItems = document.querySelectorAll('.motion-art');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const motionObserver = new IntersectionObserver((entries, activeObserver) => {
      entries.forEach((entry) => {
        // Start each engraving on first approach, then keep its motion alive
        // so the visual system feels continuous rather than restarting on scroll.
        if (entry.isIntersecting) {
          entry.target.classList.add('is-active');
          activeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '80px 0px 80px 0px' });
    motionItems.forEach((item) => motionObserver.observe(item));
  } else {
    motionItems.forEach((item) => item.classList.add('is-active'));
  }

  // Keep the page usable if script runs late or an observer is unavailable.
  window.addEventListener('pageshow', () => {
    revealItems.forEach((item) => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92) item.classList.add('is-visible');
    });
  }, { once: true });
})();
