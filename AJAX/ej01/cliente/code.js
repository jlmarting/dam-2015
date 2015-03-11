$(function() {
    var $ticker = $('#ticker'),
        $detener = $('#detener');

    var peticionAJAX = function() {
        $.ajax('../servidor/generaContenidos.php', {
            'success': function(data, status, jqXHR) {
                console.log(data);
                console.log(status);
                console.log(jqXHR);
                $ticker.text(data);
            }

        });
    };

    var interval = setInterval(peticionAJAX, 1000);

    $detener.on('click', function(){
            clearInterval(interval);
    });



});
