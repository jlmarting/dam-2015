window.onload = function() {

    var enlace = document.querySelectorAll('.enlace'),
        span = document.querySelectorAll('.adicional.oculto');

    if (enlace.length>0) {
        enlace[0].addEventListener('click', function(e){
                    e.preventDefault();
                if (span.length>0) { //siempre comprobar que existen datos...
                        span[0].classList.remove('oculto');
                    }
                if (enlace.length>0) { //siempre comprobar que existen datos...
                        enlace[0].classList.add('oculto');
                }
            }, false);
    }


};
