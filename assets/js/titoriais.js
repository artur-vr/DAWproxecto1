document.addEventListener('DOMContentLoaded', () => {
    
    const allVideos = document.querySelectorAll('video');
    const playlists = document.querySelectorAll('details');

    allVideos.forEach(video => {
        
        // Reproduce o video muteado
        video.addEventListener('mouseenter', () => {
            video.muted = true;
            video.play();
            video.classList.add('video-expandido');
            
            // Trasparencia ao resto
            allVideos.forEach(v => {
                if (v !== video) v.style.opacity = '0.7';
            });
        });

        // Pausa o video, reestablece a opacidade
        video.addEventListener('mouseleave', () => {
            video.pause();
            video.classList.remove('video-expandido');
            allVideos.forEach(v => v.style.opacity = '1');
        });

        // Ao reproducir cambia a cor do titulo
        video.addEventListener('play', () => {
            const title = video.parentElement.parentElement.querySelector('h2, h3');
            if (title) title.style.color = '#8BE8CB';
        });

        // Ao pausar volve ao orixinal
        video.addEventListener('pause', () => {
            const title = video.parentElement.parentElement.querySelector('h2, h3');
            if (title) title.style.color = '';
        });
    });

    // Ao abrir unha playlist pechamos o resto
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