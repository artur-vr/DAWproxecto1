//EFECTO 1. Hamburguesa
(function () {
    // querySelector  – busca o header
    var header = document.querySelector('header');

    // createElement  – crea o botón hamburguesa
    var btn = document.createElement('button');

    btn.className = 'hamburguesa';
    btn.textContent = '☰';

    // appendChild    – engade o botón ao header
    header.appendChild(btn);

    // Evento: click no botón – abre/pecha o menú
    btn.addEventListener('click', function () {
        header.classList.toggle('menu-aberto');
        btn.textContent = header.classList.contains('menu-aberto') ? '✕' : '☰';
    });
}());



//FUNCION JQUERY
$(document).ready(function () {
    let $bar = $('<div></div>').css({
        position: 'fixed',
        top: 0,
        left: 0,
        height: '5px',
        width: 0,
        background: '#8BE8CB',
    });

    $('body').append($bar);

    $(window).on('scroll resize', function () {
        let max = $(document).height() - $(window).height() || 1;
        $bar.css('width', $(window).scrollTop()*100/ max + '%');
    });
});
