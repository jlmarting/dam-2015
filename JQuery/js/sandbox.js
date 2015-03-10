$(function(){
    // todos los divs
    var $divs = $('div.module'); 
    console.log($divs);
    // el tercer elemento de una lista
    var $li = $('#mylist li:nth-child(2)');
    console.log($li);
    var $lis = $('#mylist > li');

    //Eventos
    $lis.on('click', function(e){
        console.log(e);
        console.log(this);
    });




    console.log($lis.eq(2));
    //seleccionar elemento label de input utilizando un atributo
    var $input = $('input[name="q"]');
    var $label = $('label[for="'+ $input.attr(name)+'"');

    // encontrar elementos ocultos (por la razón que sea)
    var $hidden = $(':hidden');

    // mostrar elementos ocultados
    $hidden.each(function(idx, elem){
        $(elem).show();  //elem es un elemento de javascript puro
        //Al aplicare el wrapper podemos usar métidos de jquery
    });

    //seleccionar todas las img y mostrar atributos alt
    $('img').each(function(idx,elem){
        console.log(elem.alt);
        // console.log(elem).attr('alt'); no tiene sentido usar el wrapper jquery 
        // estándo ya disponible en js puro
    });


    $input.closest('form').addClass('form');

    //Seleccionar el ítem que posee la clase "current" dentro de la lista #myList 
    //y remover dicha clase en el elemento; luego añadir la clase "current" al siguiente ítem de la lista.
    $('#mylist .current').removeClass('current').next().addClass('current');

    //Seleccionar el elemento select dentro de #specials; luego dirigirse hacia el botón submit.
    $('#select').closest('ul').find('input[type="submit"]');

    //Seleccionar el primer ítem de la lista en el elemento #slideshow; 
    //añadirle la clase "current" al mismo y luego añadir la clase "disabled" a los elementos hermanos.    
    $('#slideshow li').first().addClass('current').siblings().addClass('disabled');

    //Añadir 5 nuevos ítems al final de la lista desordenada #myList.
    var lis = [];
    for (var i = 0; i <4; i++) {
        lis.push('<li>Element ' + i +'</li>');
    }
    $('#myList').append(lis.join());

    //Eliminar elementos impares de una lista
    $('ul').find('li:odd').remove();


    //Creación de elementos del DOM en Jquery indicando propiedades
    //(tratamos de evitar concatenaciones de strings...)
    $li = $('<li/>',{
        class : 'current',
        text : 'Node List',
        id : 'myli'
    });


      //Delegación de eventos 
      //aunque se eliminen o agregen elementos en tiempo real conseguimos escucharlos
    $ul.on('click', 'li', function(e){
        console.log(e);
        console.log(this);
    });


});