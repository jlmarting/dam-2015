

// Validación para todos los formularios
HTMLFormElement.prototype.validate = function() {
    var validador = {
        required : function(val){
            return false;
        },
        email : function(val) {
            return false;
        }
    };

    var  required = this.querySelectorAll('.required');

    var validate = function(){

    };
};


// Listener en submit
this.addEventListener('submit', validate, false);