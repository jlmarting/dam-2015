$(function() {
    var $provincia = $('#provincia'),
        $municipio = $('#municipio'),
        options = [];


    $.ajax('servidor/cargaProvinciasJSON.php', {
        'success': function(data) {
            data = JSON.parse(data);

            for (var i in data) { //i - clave de la propiedad
                console.log(i + ' ' + data[i]);
                var option = new Option(data[i], i);
                options.push(option);
            }

            console.log('options:' + options);
            //se puede agregar directamente el array con objs del DOM ...
            $provincia.children().remove();
            $provincia.append(options);
        }
    });

    $provincia.on('click', function(e) {
        console.log('click provincia');
        var cp = $provincias.val();
        $.ajax('servidor/cargaMunicipiosJSON.php', {
            type: 'POST',
            data: {
                'provincia': pc,
            },
            dataType : json,
            success : function(){
                
            }
        });
    });





    $municipio.on('click', function() {
        console.log('click municipio');
    });

});
