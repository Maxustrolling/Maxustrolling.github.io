
// Año en el pie
document.getElementById('year').textContent = new Date().getFullYear();

// Menú móvil
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
burger.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  burger.setAttribute('aria-expanded', open ? 'true' : 'false');
});

// Gestión de enlace activo (persistente): al hacer clic se guarda en localStorage
(() => {
  // Sólo seleccionar los enlaces del menú del header. No tocar los enlaces del footer.
  const menuLinks = document.querySelectorAll('.menu a');
  if (!menuLinks.length) return;

  // Al hacer click en un enlace del menú, marcarlo y guardar la referencia
  menuLinks.forEach(a => {
    a.addEventListener('click', (ev) => {
      try {
        const href = a.getAttribute('href');
        localStorage.setItem('citrumax.activeMenu', href);
        menuLinks.forEach(x => x.classList.remove('active'));
        a.classList.add('active');
      } catch (e) {
        // no crítico
      }
    });
  });

  // Al cargar la página, aplicar la selección guardada (si existe)
  try {
    const saved = localStorage.getItem('citrumax.activeMenu');
    if (saved) {
      menuLinks.forEach(a => {
        if (a.getAttribute('href') === saved) a.classList.add('active');
      });
    } else {
      // Si no hay guardado, intentar inferir por la ruta actual
      const path = location.pathname.split('/').pop() || 'index.html';
      menuLinks.forEach(a => {
        const h = a.getAttribute('href');
        if (!h) return;
        // coincidencia por nombre de archivo o hash
        if (h === path || h === location.pathname || h === ('#' + location.hash.replace('#',''))) {
          a.classList.add('active');
        }
      });
    }
  } catch (e) {
    // no crítico
  }
})();

// Animaciones al hacer scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Form handler: valida en cliente; si `form.action` apunta a un endpoint real usa fetch POST,
// si no (por ejemplo action="#") usa `mailto:` como fallback para abrir el cliente de correo.
const form = document.getElementById('contact-form');
const statusEl = document.getElementById('form-status');
const sendBtn = form.querySelector('.btn-send');

form.addEventListener('submit', async (ev) => {
  ev.preventDefault();
  statusEl.textContent = '';

  const formData = new FormData(form);
  const nombre = (formData.get('nombre') || '').toString().trim();
  const email = (formData.get('email') || '').toString().trim();
  const mensaje = (formData.get('mensaje') || '').toString().trim();

  // Validación simple en cliente
  if (!nombre || !email || !mensaje) {
    statusEl.textContent = 'Por favor completa los campos requeridos: nombre, email y mensaje.';
    return;
  }
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(email)) {
    statusEl.textContent = 'Ingresa un correo electrónico válido.';
    return;
  }

  // UI: deshabilitar botón mientras se procesa
  if (sendBtn) {
    sendBtn.disabled = true;
    sendBtn.style.opacity = '0.7';
  }
  statusEl.textContent = 'Enviando…';
  // Si el formulario está configurado para EmailJS, usarlo para enviar automáticamente
  const ejService = form.dataset.emailjsService;
  const ejTemplate = form.dataset.emailjsTemplate;
  const ejUser = form.dataset.emailjsUser;
  if (ejService && ejTemplate && window.emailjs) {
    try {
      if (ejUser && typeof emailjs.init === 'function') emailjs.init(ejUser);
    } catch (e) {
      console.warn('EmailJS init failed', e);
    }
    try {
      const resp = await emailjs.sendForm(ejService, ejTemplate, form);
      form.reset();
      statusEl.textContent = '¡Gracias! Te contactaremos pronto.';
    } catch (err) {
      console.error('EmailJS send error', err);
      statusEl.textContent = 'No se pudo enviar el formulario vía EmailJS. Revisa la configuración.';
    } finally {
      if (sendBtn) { sendBtn.disabled = false; sendBtn.style.opacity = ''; }
    }
    return;
  }

  const action = (form.getAttribute('action') || '').trim();
  try {
    if (action && action !== '#') {
      // Envío a endpoint real (por ejemplo Formspree, Netlify Forms o backend propio)
      const res = await fetch(action, { method: 'POST', body: formData });
      if (res.ok) {
        form.reset();
        statusEl.textContent = '¡Gracias! Te contactaremos pronto.';
      } else {
        let text = '';
        try { text = await res.text(); } catch(e) { /* ignore */ }
        statusEl.textContent = 'Error en el envío: ' + (text || res.statusText || res.status);
      }
    } else {
      // Fallback: abrir cliente de correo del usuario con mailto:
      const recipient = 'genskowski.maxi@gmail.com';
      const subject = encodeURIComponent(`Consulta desde sitio — ${nombre}`);
      const bodyLines = [
        `Nombre: ${nombre}`,
        `Empresa: ${formData.get('empresa') || ''}`,
        `Email: ${email}`,
        `Teléfono: ${formData.get('telefono') || ''}`,
        '',
        `Mensaje:`,
        `${mensaje}`
      ];
      const body = encodeURIComponent(bodyLines.join('\n'));
      const mailto = `mailto:${recipient}?subject=${subject}&body=${body}`;
      // Abrir el cliente de correo. Algunos navegadores bloquean ventanas emergentes; usar location.href
      window.location.href = mailto;
      statusEl.textContent = 'Se abrió tu cliente de correo para enviar el mensaje. Si no sucede nada, escribe a contacto@citrumax.com';
    }
  } catch (e) {
    console.error('Contact form error', e);
    statusEl.textContent = 'Hubo un problema al enviar. Intenta nuevamente más tarde.';
  } finally {
    if (sendBtn) {
      sendBtn.disabled = false;
      sendBtn.style.opacity = '';
    }
  }
});