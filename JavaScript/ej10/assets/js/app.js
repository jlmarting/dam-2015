window.onload = function(){

    var boton = document.getElementById('add');

    // evitar a toda costa hacer selecciones en el DOM dentro de bucles y funciones de eventos
    var lista = document.getElementById("lista"), 
   remove = function(e){
        console.log(this);
        this.removeChild(e.target);
    },
    log = function(e){
        console.log(e);
    };




    if(lista){
            lista.addEventListener('click',remove, false);
    }

    document.addEventListener('click',log, false);

    lista.addEventListener('click',remove, false);

    var lorem = ['lorem ipsum', 'tararitararo', 'qwerty','olaq','sdfdsfds', 'aserejéjadejé'];
   
    boton.addEventListener('click',function(e){
        if(lista){
            e.stopPropagation();
            var elemento = document.createElement('li'); 
            var i = Math.floor((Math.random() * 6));
            elemento.innerText = lorem[i];
            lista.appendChild(elemento);
        }

    },false);

};