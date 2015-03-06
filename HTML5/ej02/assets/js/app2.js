window.onload = function() {



    var loaded = false,
        player = document.getElementById('player'),
        init = document.getElementById('init'),
        pause = document.getElementById('pause'),
        stop = document.getElementById('stop'),
        forward = document.getElementById('forward'),
        backward = document.getElementById('back'),
        begin = document.getElementById('begin'),
        end = document.getElementById('end'),
        fullscreen = document.getElementById('fullscreen'),
        volume = document.getElementById('volume'),
        progress = document.getElementById('progress'),
        playlist = document.querySelectorAll('#tracklist li');

    
    // Inicialización
    player.src = "videos/F1.webm";
    player.controls = true;
    progress.min = 0;
    progress.max = 100;

    //se ejecutará cada vez que se 'recargue' el video
    var canplay = function(e) {
        loaded = true;
        volume.value = player.volume * 100;
        progress.value = 0;

        //...

    };

    var playPauseFn = function(e) {
        e.preventDefault();
        if (loaded) {
            player.play();
        }
    };

    var playFn = function(e) {
        e.preventDefault();
        if (loaded) {
            player.play();
        }
    };

    var pauseFn = function(e) {
        e.preventDefault();
        if (loaded) {
            player.pause();
            player.currentTime = 0;
        }
    };

    var startFn = function(e) {
        e.preventDefault();
        if (loaded) {
            player.currentTime = 0;
        }
    };

    var play = function() {
        if (loaded) {
            player.play();
        }
    };

    var backwardFn = function(e) {
        e.preventDefault();
        if (loaded) {
            player.currentTime -= 10;
        }
    };

    var forwardFn = function(e) {
        e.preventDefault();
        if (loaded) {
            player.currentTime += 10;
        }
    };

    var endFn = function(e) {
        e.preventDefault();
        if (loaded) {
            player.currentTime = player.duration;
        }
    };

    var beginFn = function(e) {
        e.preventDefault();
        if (loaded) {
            player.currentTime = 0;
        }
    };

    var updateFn = function(e) {
        e.preventDefault();
        progress.value = (player.currentTime / player.duration) * 100;
    };

    var volumeFn = function(e) {
        e.preventDefault();
        if (loaded) {
            player.volume = this.value / 100;
        }
    };

    var changeVideo = function(e) {
        var src = e.target.dataset.src;
        if (Modernizr.video.h264) {
            player.src = src + '.mp4';
        } else {
            player.src = src + '.webm';
        }
    };


    player.addEventListener('click', playFn, false);
    player.addEventListener('canplay', canplay, false);
    player.addEventListener('click', playPauseFn, false);
    forward.addEventListener('click', forwardFn, false);
    backward.addEventListener('click', backwardFn, false);
    end.addEventListener('click', endFn, false);
    begin.addEventListener('click', beginFn, false);
    player.addEventListener('timeupdate', updateFn, false);
    volume.addEventListener('change', volumeFn, false);
    playlist.addEventListener('click', changeVideo, false);
};
