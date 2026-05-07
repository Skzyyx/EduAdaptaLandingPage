// EduAdapta · Helper de navegación tipo Figma para el prototipo.
// Cada pantalla incluye este script. Los elementos con [data-goto="XX-archivo.html"]
// se vuelven clickables y, al pulsarlos, le piden al shell (index.html) que cargue
// la pantalla destino vía postMessage.
(function () {
  if (window.__eduAdaptaNavInit) return;
  window.__eduAdaptaNavInit = true;

  const HOTSPOT_STYLE_ID = 'eduadapta-hotspot-style';

  function injectStyles() {
    if (document.getElementById(HOTSPOT_STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = HOTSPOT_STYLE_ID;
    style.textContent = `
      [data-goto] { cursor: pointer; }
      [data-goto]:focus-visible { outline: 2px solid #E8611A; outline-offset: 2px; }
      html.show-hotspots [data-goto] {
        position: relative;
        box-shadow: 0 0 0 2px rgba(59,130,246,0.55), 0 0 0 6px rgba(59,130,246,0.18) !important;
        border-radius: 8px;
        animation: eduadapta-hotspot-pulse 1.6s ease-in-out infinite;
      }
      @keyframes eduadapta-hotspot-pulse {
        0%, 100% { box-shadow: 0 0 0 2px rgba(59,130,246,0.55), 0 0 0 6px rgba(59,130,246,0.18); }
        50%      { box-shadow: 0 0 0 2px rgba(59,130,246,0.85), 0 0 0 10px rgba(59,130,246,0.05); }
      }
      [data-goto]:active { transform: scale(0.985); transition: transform 80ms ease-out; }
    `;
    document.head.appendChild(style);
  }

  function sendGoto(src) {
    try {
      window.parent.postMessage({ type: 'eduadapta-goto', src: src }, '*');
    } catch (_) { /* same-origin only — silently ignore */ }
  }

  function onClick(e) {
    const el = e.target.closest('[data-goto]');
    if (!el) return;
    const target = el.getAttribute('data-goto');
    if (!target) return;
    e.preventDefault();
    e.stopPropagation();
    sendGoto(target);
  }

  function onKeydown(e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const el = e.target.closest('[data-goto]');
    if (!el) return;
    e.preventDefault();
    sendGoto(el.getAttribute('data-goto'));
  }

  function makeFocusable() {
    document.querySelectorAll('[data-goto]').forEach((el) => {
      const tag = el.tagName;
      if (tag === 'A' || tag === 'BUTTON' || tag === 'INPUT') return;
      if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '0');
      if (!el.hasAttribute('role')) el.setAttribute('role', 'button');
    });
  }

  // The shell can ask iframes to toggle the hotspot highlight.
  window.addEventListener('message', (e) => {
    const data = e.data;
    if (!data || data.type !== 'eduadapta-show-hotspots') return;
    document.documentElement.classList.toggle('show-hotspots', !!data.value);
  });

  function init() {
    injectStyles();
    makeFocusable();
    document.addEventListener('click', onClick, true);
    document.addEventListener('keydown', onKeydown, true);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
