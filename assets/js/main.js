(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const header = document.querySelector('[data-header]');
  const menuButton = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  const closeMenu = () => {
    if (!menuButton || !mobileNav) return;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Menü öffnen');
    mobileNav.hidden = true;
  };

  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    menuButton.setAttribute('aria-label', open ? 'Menü öffnen' : 'Menü schließen');
    if (mobileNav) mobileNav.hidden = open;
  });
  mobileNav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  window.addEventListener('scroll', () => header?.classList.toggle('is-scrolled', window.scrollY > 20), { passive: true });

  const revealItems = document.querySelectorAll('[data-reveal]');
  if (reducedMotion) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      });
    }, { threshold: .14, rootMargin: '0px 0px -8% 0px' });
    revealItems.forEach((item) => observer.observe(item));
    const revealVisibleItems = () => revealItems.forEach((item) => {
      if (item.classList.contains('is-visible')) return;
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight * .96 && rect.bottom > 0) {
        item.classList.add('is-visible');
        observer.unobserve(item);
      }
    });
    window.addEventListener('scroll', revealVisibleItems, { passive: true });
    window.requestAnimationFrame(revealVisibleItems);
  }

  const serviceImage = document.querySelector('[data-service-image]');
  const serviceCaption = document.querySelector('[data-service-caption]');
  document.querySelectorAll('[data-service]').forEach((service) => {
    const showService = () => {
      if (!serviceImage) return;
      serviceImage.parentElement?.classList.add('is-changing');
      window.setTimeout(() => {
        serviceImage.src = service.dataset.image || serviceImage.src;
        serviceImage.alt = service.dataset.alt || '';
        if (serviceCaption) serviceCaption.textContent = service.querySelector('span')?.textContent || '';
        serviceImage.parentElement?.classList.remove('is-changing');
      }, reducedMotion ? 0 : 140);
    };
    service.addEventListener('mouseenter', showService);
    service.addEventListener('focus', showService);
    service.addEventListener('click', showService);
  });

  document.querySelectorAll('[data-compare]').forEach((compare) => {
    const input = compare.querySelector('input[type="range"]');
    input?.addEventListener('input', () => compare.style.setProperty('--split', `${input.value}%`));
  });

  const lightbox = document.querySelector('#lightbox');
  const lightboxImage = lightbox?.querySelector('img');
  const lightboxCaption = lightbox?.querySelector('p');
  const lightboxClose = lightbox?.querySelector('.lightbox-close');
  let lightboxTrigger = null;

  document.querySelectorAll('[data-lightbox]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      if (!lightbox || !lightboxImage || !lightboxCaption) return;
      lightboxTrigger = trigger;
      lightboxImage.src = trigger.dataset.lightbox || trigger.querySelector('img')?.src || '';
      lightboxImage.alt = trigger.querySelector('img')?.alt || 'Projekt von Sydney Sanierung';
      lightboxCaption.textContent = trigger.dataset.caption || '';
      lightbox.showModal();
      lightboxClose?.focus();
    });
  });
  const closeLightbox = () => {
    lightbox?.close();
    lightboxTrigger?.focus({ preventScroll: true });
  };
  lightboxClose?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  const galleryButtons = document.querySelectorAll('[data-gallery-filter]');
  const galleryItems = document.querySelectorAll('[data-gallery-item]');
  const galleryStatus = document.querySelector('[data-gallery-status]');
  galleryButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.galleryFilter || 'all';
      galleryButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
      let visible = 0;
      galleryItems.forEach((item) => {
        const show = filter === 'all' || (item.dataset.category || '').split(' ').includes(filter);
        item.hidden = !show;
        if (show) visible += 1;
      });
      if (galleryStatus) galleryStatus.textContent = `${visible} Projektbilder sichtbar.`;
    });
  });

  document.querySelectorAll('[data-contact-form]').forEach((form) => {
    const status = form.querySelector('[data-form-status]');
    const fallback = form.querySelector('[data-form-fallback]');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const email = form.dataset.email || 'info@sydney-sanierung.de';
      const subject = encodeURIComponent(`Projektanfrage von ${data.get('name') || 'Website'}`);
      const body = encodeURIComponent(`Name: ${data.get('name') || ''}\nTelefon: ${data.get('telefon') || ''}\nE-Mail: ${data.get('email') || ''}\n\nProjekt:\n${data.get('projekt') || ''}`);
      const href = `mailto:${email}?subject=${subject}&body=${body}`;
      if (fallback) fallback.href = href;
      if (status) status.textContent = 'Ihr E-Mail-Programm wird geöffnet. Falls nichts passiert, nutzen Sie den Link darunter.';
      window.location.href = href;
    });
  });
})();
