/* ============================================================
   ACQUA CAPITAL — Scripts compartidos
   ============================================================ */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {

    // Año dinámico en footer
    var year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();

    // Menú móvil
    var menuBtn = document.getElementById('menuBtn');
    var mobileMenu = document.getElementById('mobileMenu');
    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
      });
      mobileMenu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          mobileMenu.classList.add('hidden');
        });
      });
    }

    // Marcar enlace activo según la página actual
    var path = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(function (link) {
      var href = link.getAttribute('href');
      if (href === path) link.classList.add('active');
    });

    // Reveal on scroll
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.12 });
      document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
    } else {
      document.querySelectorAll('.reveal').forEach(function (el) {
        el.classList.add('is-visible');
      });
    }

    // Simulador de factoring transparente
    var simMonto = document.getElementById('simMonto');
    if (simMonto) {
      var simPlazo = document.getElementById('simPlazo');
      var simTasa = document.getElementById('simTasa');
      var clp = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 });
      var COMISION_PCT = 0.0035;   // 0,35% comisión operacional
      var COMISION_MIN = 8000;     // comisión mínima en CLP

      function calcularSimulador() {
        var monto = parseFloat(simMonto.value);
        var plazo = parseFloat(simPlazo.value);
        var tasa = parseFloat(simTasa.value);

        var interes = Math.round(monto * (tasa / 100 / 30) * plazo);
        var comision = Math.max(Math.round(monto * COMISION_PCT), COMISION_MIN);
        var costo = interes + comision;
        var recibe = monto - costo;

        document.getElementById('simMontoOut').textContent = clp.format(monto);
        document.getElementById('simPlazoOut').textContent = plazo + ' días';
        document.getElementById('simTasaOut').textContent = tasa.toFixed(2).replace('.', ',') + '%';
        document.getElementById('simInteres').textContent = clp.format(interes);
        document.getElementById('simComision').textContent = clp.format(comision);
        document.getElementById('simCosto').textContent = clp.format(costo);
        document.getElementById('simRecibe').textContent = clp.format(recibe);
      }

      [simMonto, simPlazo, simTasa].forEach(function (el) {
        el.addEventListener('input', calcularSimulador);
      });
      calcularSimulador();
    }

    // Formulario de contacto (demo — sin backend)
    var form = document.getElementById('leadForm');
    if (form) {
      form.addEventListener('submit', function (ev) {
        ev.preventDefault();
        if (!form.checkValidity()) { form.reportValidity(); return; }
        var msg = document.getElementById('formMsg');
        if (msg) msg.classList.remove('hidden');
        form.reset();
      });
    }
  });
})();
