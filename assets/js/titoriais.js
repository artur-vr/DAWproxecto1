document.addEventListener('DOMContentLoaded', () => {
    
    const allVideos = document.querySelectorAll('video');
    const playlists = document.querySelectorAll('details');

    allVideos.forEach(video => {
        
        // Reproduce el vídeo muteado
        video.addEventListener('mouseenter', () => {
            video.muted = true;
            video.play();
            video.classList.add('video-expandido');
            
            // Trasparencia al resto
            allVideos.forEach(v => {
                if (v !== video) v.style.opacity = '0.7';
            });
        });

        // Pausa el vídeo, restablece la opacidad
        video.addEventListener('mouseleave', () => {
            video.pause();
            video.classList.remove('video-expandido');
            allVideos.forEach(v => v.style.opacity = '1');
        });

        // Al reproducir cambia el color del título
        video.addEventListener('play', () => {
            const title = video.parentElement.parentElement.querySelector('h2, h3');
            if (title) title.style.color = '#8BE8CB';
        });

        // Al pausar vuelve al original
        video.addEventListener('pause', () => {
            const title = video.parentElement.parentElement.querySelector('h2, h3');
            if (title) title.style.color = '';
        });
    });

    // Al abrir una plyalist cerramos el resto
    playlists.forEach(pl => {
        pl.addEventListener('click', () => {
            if (!pl.open) {
                playlists.forEach(other => {
                    if (other !== pl) other.open = false;
                });
            }
        });
    });
});