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
