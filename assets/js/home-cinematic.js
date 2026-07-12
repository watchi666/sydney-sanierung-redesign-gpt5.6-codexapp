(() => {
  const orbit = document.querySelector('[data-orbit]');
  const ring = document.querySelector('[data-orbit-ring]');
  const cards = [...document.querySelectorAll('.orbit-card')];
  const title = document.querySelector('[data-orbit-title]');
  if (!orbit || !ring || !cards.length) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const step = 360 / cards.length;
  let angle = -8;
  let dragging = false;
  let moved = false;
  let startX = 0;
  let startAngle = 0;
  let lastInteraction = performance.now();
  let lastActive = -1;
  let previousTime = performance.now();
  let lastPaint = 0;
  let lastFrontCheck = 0;

  const normalize = (value) => ((value % 360) + 360) % 360;
  const updateFront = () => {
    let nearestIndex = 0;
    let nearestDistance = Infinity;
    cards.forEach((card, index) => {
      const cardAngle = normalize(angle + index * step);
      const distance = Math.min(cardAngle, 360 - cardAngle);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });
    if (nearestIndex === lastActive) return;
    lastActive = nearestIndex;
    cards.forEach((card, index) => card.classList.toggle('is-front', index === nearestIndex));
    if (title) title.textContent = cards[nearestIndex].dataset.title || 'Ausgewählte Arbeit';
  };

  const render = (time) => {
    if (time - lastPaint < 32) {
      window.requestAnimationFrame(render);
      return;
    }
    lastPaint = time;
    const elapsed = Math.min(time - previousTime, 40);
    previousTime = time;
    if (!reducedMotion && !dragging && time - lastInteraction > 1600) angle += elapsed * .0042;
    ring.style.transform = `rotateY(${angle}deg)`;
    if (time - lastFrontCheck > 140) {
      lastFrontCheck = time;
      updateFront();
    }
    window.requestAnimationFrame(render);
  };

  orbit.addEventListener('wheel', (event) => {
    if (reducedMotion) return;
    angle -= event.deltaY * .035;
    lastInteraction = performance.now();
  }, { passive: true });

  orbit.addEventListener('pointerdown', (event) => {
    if (event.button !== 0) return;
    dragging = true;
    moved = false;
    startX = event.clientX;
    startAngle = angle;
    orbit.setPointerCapture?.(event.pointerId);
    orbit.dataset.dragging = 'true';
  });

  orbit.addEventListener('pointermove', (event) => {
    if (!dragging) return;
    const distance = event.clientX - startX;
    if (Math.abs(distance) > 7) moved = true;
    angle = startAngle + distance * .16;
    lastInteraction = performance.now();
  });

  const finishDrag = (event) => {
    if (!dragging) return;
    dragging = false;
    orbit.releasePointerCapture?.(event.pointerId);
    delete orbit.dataset.dragging;
    lastInteraction = performance.now();
  };
  orbit.addEventListener('pointerup', finishDrag);
  orbit.addEventListener('pointercancel', finishDrag);
  orbit.addEventListener('click', (event) => {
    if (!moved) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    moved = false;
  }, true);

  cards.forEach((card, index) => {
    card.addEventListener('focus', () => {
      angle = -(index * step);
      lastInteraction = performance.now();
    });
  });

  updateFront();
  window.requestAnimationFrame(render);

  const revealFallback = () => document.querySelectorAll('[data-reveal]').forEach((item) => {
    if (item.classList.contains('is-visible')) return;
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight * .98 && rect.bottom > 0) item.classList.add('is-visible');
  });
  window.addEventListener('scroll', revealFallback, { passive: true });
  window.requestAnimationFrame(revealFallback);
})();
