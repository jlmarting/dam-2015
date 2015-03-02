document.ready = (function() {
    console.log("Here we go!");

    // Seleccionar tag video
    var video = document.getElementsByTagName("video")[0];

    console.log('video --->' + video);

    // Cargar 1 video inicial

    video.src = "videos/F1.webm";
    video.controls = true;

    // crear objeto de utilidades para

    var commands = {
        "init": function() {
            console.log('le estás dando a init!!!');
            video.play();
        },
        "pause": function() {
            console.log('le estás dando a pause!!!');
            video.pause();
        },
        "stop": function() {
            console.log('le estás dando a stop!!!');
            video.currentTime=0;
        },
        "forward": function() {
            console.log('le estás dando a forward!!!');
            this.pause();
            video.currentTime += 0.1;
        },
        "back": function() {
            console.log('le estás dando a back!!!');
            this.pause();
            video.currentTime -= 0.1;
        },
        "begin": function() {
            console.log('le estás dando a begin!!!');
            video.currentTime = video.seekable.start();
        },
        "end": function() {
            console.log('le estás dando a end!!!');
            this.stop();
            video.currentTime = video.seekable.end();
        },
        "fullscreen": function() {
            console.log('le estás dando a fullscreen!!!');
        },
        "volume": function() {
            console.log('le estás dando a volume!!!');
        }
    };

    //  crear eventos para botones ...    

    var init = document.getElementById('init');
    init.addEventListener('click', function() {
        commands.init();
    });

    var pause = document.getElementById('pause');
    pause.addEventListener('click', function() {
        commands.pause();
    });

    var stop = document.getElementById('stop');
    stop.addEventListener('click', function() {
        commands.stop();
    });

    var forward = document.getElementById('forward');
    forward.addEventListener('click', function() {
        commands.forward();
    });

    var back = document.getElementById('back');
    back.addEventListener('click', function() {
        commands.back();
    });
    var begin = document.getElementById('begin');
    init.addEventListener('click', function() {
        commands.begin();
    });
    var end = document.getElementById('end');
    init.addEventListener('click', function() {
        commands.end();
    });
    var fullscreen = document.getElementById('fullscreen');
    init.addEventListener('click', function() {
        commands.fullscreen();
    });

    var volume = document.getElementById('volume');
    init.addEventListener('click', function() {
        commands.volume();
    });




})();
