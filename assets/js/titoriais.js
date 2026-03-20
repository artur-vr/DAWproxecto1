$(document).ready(function() {
    
    const allVideos = $('video');

    allVideos.on('mouseenter', function() {
        // Reproducir vídeo e mutearo
        this.muted = true;
        this.play();
        
        // Engadímoslle unha clase
        $(this).addClass('video-expandido');
        
        // Atenuar o resto de vídeos
        allVideos.not(this).css('opacity', '0.7');
    });

    allVideos.on('mouseleave', function() {
        // Pausar e resetear efectos
        this.pause();
        
        // Quitamos a clase
        $(this).removeClass('video-expandido');
        
        allVideos.css('opacity', '1');
    });


    const playlists = $('details');

    playlists.on('click', function(e) {
        
        const currentPlaylist = $(this);
        
        // Pechamos o resto de playlist
        if (!currentPlaylist.prop('open')) {
            playlists.not(currentPlaylist).prop('open', false);
        }
    });


    // --- CAMBIO COR TÍTULOS ---
    
    allVideos.on('play', function() {
        $(this).parent().prevAll('h3, h2').first().css('color', '#8BE8CB');
    });

    allVideos.on('pause', function() {
        $(this).parent().prevAll('h3, h2').first().css('color', '');
    });

});