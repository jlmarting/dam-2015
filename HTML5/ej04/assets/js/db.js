/*
Patrón para módulos javascript
Inicialización de la variable global (APP)
Uso de función anónima autoejecutable
 */

var APP = APP || {};
APP.DB = (function() {
    var db,
        cfg = {
            name: 'Twitter.db',
            version: '1.0',
            description: 'Twitter database',
            size: 1 * 1024 * 1024
        },
        createTable = 'CREATE TABLE IF NOT EXISTS tweets (id TEXT CONSTRAINT pk_tweet PRIMARY KEY, text TEXT, author TEXT, created_at INTEGER)';

    try {
        db = openDatabase(cfg.name, cfg.version, cfg.description, cfg.size);
    } catch (e) {
        if (e.code === 11) { // código de error 11: versión de base de datos almacenada diferente
            db.changeVersion(cfg.version); // habría que realizar quizá cambios de estructura, etc
        }
        console.log(e);
    }

    if (db) {
        var createSchema = function(tx) {
            tx.executeSql(createTable, [],
                function() {
                    console.log('Database created');
                },
                function(tx, error) {
                    console.log('DB error: ' + error);

                });
        };
        db.transaction(createSchema);
    }


    var insert = function(tweet){
        var sql = "INSERT INTO tweets VALUES (?,?,?);";
        db.transaction(function(tx){
            console.log("--->" + tweet.author);
            tx.executeSql(sql,[tweet.id, tweet.text, tweet.author, tweet.createdAt],
                function(tx, results){
                    console.log('Tweet inserted');
                    console.log(results);
                },
                function(tx, error){
                    console.log('Insertion fail');
                    console.log(error);
                });
        });
    };


    var getAll = function(success){
            db.transaction(function(tx){
                var sql = "SELECT * FROM tweets;";
                tx.executeSql(sql, [], 
                    function(tx, results){
                        console.log('Results found');
                        console.log(results.rows);

                        var datos = [];

                        for (var i = result.rows.length - 1; i >= 0; i--) {
                            console.log(result.rows.item(i));
                            datos.push(result.rows.item(i));
                        }

                        success(datos);
                    },
                    function(tx,error){
                        console.log('Error SELECT');
                    });

            });
    }; 

    console.log(db);

    return { //aquí meteremos los métodos que deseemos que sean públicos
        "insert" : insert,
        "getAll" : getAll
    };


})();
