/*
Patrón para módulos javascript
Inicialización de la variable global (APP)
Uso de función anónima autoejecutable
 */

var APP = APP || {};
APP.DB = (function() {
    var db,
        cfg = {
            name: 'Twitter2.db',
            version: 5,
            description: 'Twitter database'
                // indexeddb no requiere especificar tamaño
        };


    var init = function(success) {
        if (!db) { // si no se ha creado

            /* Se abre la base de datos */

            var request = indexedDB.open(cfg.name, cfg.version); //nombre y versión

            request.addEventListener('success', function(e) {
                console.log('Database ' + cfg.name + ' opened.');
                console.log(e);
                db = e.target.result;
                console.log('DB >>> ' + db);
                success();
            });


            // Cambio de versiones
            request.addEventListener('upgradeneeded', function(e) {
                console.log('Upgrade needed!');
                db = e.target.result;

                var tweets = db.createObjectStore('tweets', {
                    keyPath: 'id',
                    autoIncrement: false
                });

                console.log('Tweets >> ' + tweets);

            });


            request.addEventListener('error', function() {
                console.log('Error opening database');
            });





        } else { // si se ha creado
            console.log('succcess function: ' + success);
            console.log(db);
            success();

        }
    };



    var insert = function(tweet) {
        init(function() {
            var transaction = db.transaction(['tweets'], 'readwrite');
            var store = transaction.objectStore('tweets');
            var request = store.add(tweet);
        });
    };


    var get = function(id, success) {
        init(function() {
            var transaction = db.transaction(['tweets'], 'readwrite');
            var store = transaction.objectStore('tweets');

            var getRequest = store.get(id);
            getRequest.addEventListener('success', function(e){
                console.log(e.target.result);
            });
        });


    };


    return { //aquí meteremos los métodos que deseemos que sean públicos
        "insert": insert,
        "get" : get
    };


})();
