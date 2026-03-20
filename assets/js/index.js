(function () {
    const subtitulo = document.querySelector('.texto-titulo h2');

    if (!subtitulo) {
        return;
    }

    const frases = [
        'Imaxina, crea e explota a túa creatividade',
        'Desenvolve máis rápido con Subreal Engine',
        'Do prototipo ao lanzamento'
    ];

    let indiceFrase = 0;
    subtitulo.style.transition = 'opacity .25s ease';

    setInterval(() => {
        subtitulo.style.opacity = '0';

        setTimeout(() => {
            indiceFrase = (indiceFrase + 1) % frases.length;
            subtitulo.textContent = frases[indiceFrase];
            subtitulo.style.opacity = '1';
        }, 150);
    }, 2800);
}());
