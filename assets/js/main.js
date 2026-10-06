// Interações da página: menu mobile, seletor de unidade do WhatsApp e filtro da galeria.
// Os links rastreáveis já têm data-track/data-origem (ver _docs/padrao-whatsapp.md);
// GA4/Pixel e o banner de consentimento entram na contratação.
(function () {
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  // Menu mobile
  var menuBtn = $('[data-menu-toggle]');
  var menu = $('#menu-mobile');
  function setMenu(aberto) {
    menu.hidden = !aberto;
    menuBtn.setAttribute('aria-expanded', String(aberto));
    menuBtn.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    $('[data-icon-menu]', menuBtn).classList.toggle('hidden', aberto);
    $('[data-icon-x]', menuBtn).classList.toggle('hidden', !aberto);
  }
  menuBtn.addEventListener('click', function () { setMenu(menu.hidden); });
  $$('a', menu).forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });

  // Botão flutuante do WhatsApp: sem JS é um link direto; com JS abre o seletor de unidade
  var waBtn = $('[data-wa-toggle]');
  var waMenu = $('#wa-menu');
  function setWa(aberto) {
    waMenu.hidden = !aberto;
    waBtn.setAttribute('aria-expanded', String(aberto));
  }
  waBtn.addEventListener('click', function (e) {
    e.preventDefault();
    setWa(waMenu.hidden);
  });

  // Fechar menus com Esc ou clique fora
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (!waMenu.hidden) { setWa(false); waBtn.focus(); }
    if (!menu.hidden) { setMenu(false); menuBtn.focus(); }
  });
  document.addEventListener('click', function (e) {
    if (!waMenu.hidden && !waMenu.contains(e.target) && !waBtn.contains(e.target)) setWa(false);
    if (!menu.hidden && !menu.contains(e.target) && !menuBtn.contains(e.target)) setMenu(false);
  });

  // Filtro da galeria
  var CLASSE_IMG = 'w-full object-cover transition-transform duration-500 hover:scale-[1.03]';
  var figuras = $$('figure[data-categoria]');
  var botoes = $$('[data-filtro]');

  function filtrar(filtro) {
    botoes.forEach(function (b) {
      var ativo = b.getAttribute('data-filtro') === filtro;
      b.setAttribute('aria-pressed', String(ativo));
      b.classList.toggle('btn-primary', ativo);
      b.classList.toggle('btn-outline', !ativo);
    });
    var visiveis = figuras.filter(function (f) {
      var mostrar = filtro === 'Todos' || f.getAttribute('data-categoria') === filtro;
      f.hidden = !mostrar;
      return mostrar;
    });
    visiveis.forEach(function (f, i) {
      // com quantidade ímpar, a última foto ocupa a linha inteira no celular
      var larga = visiveis.length % 2 === 1 && i === visiveis.length - 1;
      f.className = 'overflow-hidden bg-card' + (larga ? ' col-span-2 sm:col-span-1' : '');
      $('img', f).className = CLASSE_IMG + (larga ? ' aspect-[16/10] sm:aspect-[3/4]' : ' aspect-[3/4]');
    });
  }

  botoes.forEach(function (b) {
    b.addEventListener('click', function () { filtrar(b.getAttribute('data-filtro')); });
  });
})();
