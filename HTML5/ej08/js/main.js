$(function() {
    "use strict";

    // Obtener los elementos del DOM
    var input = document.getElementById('input'),
        status = document.getElementById('status'),
        content = $('#content');

    // Mi color asignado por el servidor
    var myColor = false;
    // Mi nick
    var myName = false;

    console.log('Here we go!');

    // Comprobar la disponibilidad de Web Socket en el navegador
    if (!Modernizr.websockets) {
        return false;
    }

    window.WebSocket = window.WebSocket || window.MozWebSocket;

    console.log('Conectando a server...');

    // Abrir la conexion con ws://www.arkaitzgarro.com:1337
    // 1. Al abrir la conexión, solicitar el nick.
    // 2. Controlar posibles errores del servidor.
    // 3. Escucar los mensajes del servidor, y mostrarlos en el elemento "content"
    // 4. La estructura del objeto enviado por el servidor es la siguiente:{}
    //      {
    //          // Contiene el tipo de mensaje recibido
    //          type : @string in ['color', 'history', 'message'],
    //          // Contiene los datos según el tipo de mensaje recibido
    //          data: @Object {author, text, color, time}
    //      }
    // 5. Enviar un mensaje al pulsar enter. El mensaje enviado es únicamente la cadena de caracteres.

    var websocket = new WebSocket('ws://www.arkaitzgarro.com:1337');

    if (websocket) input.disabled = false;
    else return false;

    input.addEventListener('keydown', function(e) {

        if ((e.keyCode === 13) && (input.value !== '')) {
            console.log('Keydown 13');
            websocket.send(input.value);
            input.value = "";
        }
    }, false);

    var socketOpen = function() {console.log('Socket Opened');};
    var socketClose = function() {console.log('Socket Closed');};
    var socketError = function() {console.log('Socket Error');};


    var handleMessage = function(e) {
        var json;
        try {
            json = JSON.parse(e.data);
        } catch (ex) {
            console.log('Bad json');
        }
        if (json) {
            switch (json) {
                case 'color':
                    console.log('color: ' + e.data);
                    myColor = json.data;
                    status.style.color = myColor;
                    break;
                case 'message':
                    addMessage(json.data.author, json.data.text, json.data.color, new Date(json.data.time));
                    break;
                case 'history':
                    console.log('Type history');
                    for (var i = json.data.length - 1; i >= 0; i--) {
                        msg = json.data[i];
                        addMessage(msg.author, msg.text, msg.color, new Date(msg.time));
                    }

                    break;
            }
        }
    };

    websocket.addEventListener('open', socketOpen, false);
    websocket.addEventListener('close', socketClose, false);
    websocket.addEventListener('error', socketError, false);
    websocket.addEventListener('message', handleMessage, false);


    /**
     * Añadir el mensaje a la ventana de chat
     */
    function addMessage(author, message, color, dt) {
        content.prepend('<p><span style="color:' + color + '">' + author + '</span> @ ' +
            +(dt.getHours() < 10 ? '0' + dt.getHours() : dt.getHours()) + ':' + (dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes()) + ': ' + message + '</p>');
    }
});
