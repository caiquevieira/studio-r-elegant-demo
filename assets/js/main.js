// Interações da página: menu mobile, seletor de unidade do WhatsApp e filtro da galeria.
(function () {
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  // Menu mobile
  var menuBtn = $('[data-menu-toggle]');
  var menu = $('#menu-mobile');
  function setMenu(aberto) {
    menu.hidden = !aberto;
    menuBtn.setAttribute('aria-expanded', String(aberto));
    $('[data-icon-menu]', menuBtn).classList.toggle('hidden', aberto);
    $('[data-icon-x]', menuBtn).classList.toggle('hidden', !aberto);
  }
  menuBtn.addEventListener('click', function () { setMenu(menu.hidden); });
  $$('a', menu).forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });

  // Botão flutuante do WhatsApp
  var waBtn = $('[data-wa-toggle]');
  var waMenu = $('#wa-menu');
  waBtn.addEventListener('click', function () {
    waMenu.hidden = !waMenu.hidden;
    waBtn.setAttribute('aria-expanded', String(!waMenu.hidden));
  });

  // Filtro da galeria
  var ATIVO = 'bg-primary text-primary-foreground shadow hover:bg-primary/90'.split(' ');
  var INATIVO = 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground'.split(' ');
  var CLASSE_IMG = 'w-full object-cover transition-transform duration-500 hover:scale-[1.03]';
  var figuras = $$('figure[data-categoria]');
  var botoes = $$('[data-filtro]');

  function filtrar(filtro) {
    botoes.forEach(function (b) {
      var ativo = b.getAttribute('data-filtro') === filtro;
      b.setAttribute('aria-pressed', String(ativo));
      ATIVO.forEach(function (c) { b.classList.toggle(c, ativo); });
      INATIVO.forEach(function (c) { b.classList.toggle(c, !ativo); });
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
  filtrar('Todos');
})();
