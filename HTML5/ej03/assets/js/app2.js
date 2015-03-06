window.onload = function(){


    var inputs = document.querySelectorAll('input, textarea'),
        storage = localStorage, //localStorage o sessionStorage
        prefix = 'ej03_prefix_'; //para evitar conflictos

    
    var saveText = function(e){
        storage.setItem(prefix+this.name, this.value);
    };


    for (var i = inputs.length - 1; i >= 0; i--) {
        inputs.item(i).addEventListener('input', saveText);
    }

    var showData = function(key,value){
        for (var i = inputs.length - 1; i >= 0; i--) {
            var name = key.replace(prefix,'');

            if (inputs.item(i).name === name) {
                inputs.item(i).value = value;
            }
        }
    } ;


    if (storage.length){
        for (var j = storage.length - 1; j >= 0; j--) {
            var key = storage.key(j);
            showData(key,storage.getItem(key));
        }

    }

    var handleStorage = function(e){
        showData(e.key,e.newValue);
    };

    window.addEventListener('storage',handleStorage);
};