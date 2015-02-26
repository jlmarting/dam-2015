// Validación para todos los formularios
HTMLFormElement.prototype.validate = function() {

    // Utilidades
    var validator = {
        required: function(val) {
            console.log('required: ' + val.value);
            return val !== undefined &&
                val !== null &&
                !/^\s+$/.test(val) &&
                val.length>0;

        },
        email: function(val) {
            console.log('email: ' + val);
            if (/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/.test(val)) {
                return true;
            } else
                return false;
        },
        checkbox: function(val) {
            console.log('checkbox: ' + val);
            if (val.checked == true) {
                return true;
            } else {
                return false;
            }
        },
        password: function(val) {
            return this.required(value) &&
                value.length > 6 &&
                /[a-z]/.test(val) &&
                /[A-Z]/.test(val) &&
                /[0-9]/.test(val);
 
        },
        maxlong: function(val) {
            if (val.length < 50) {
                return true;
            } else {
                return false;
            }

        }
    };


    /*
    Tenemos que validar cada campo. El tipo de validación a realizar estará especificada en la clase.
    Recogeremos todos los campos que sean requeridos.
     */
    var required = this.querySelectorAll('.required');
    var email = this.querySelectorAll('.email');
    var password = this.querySelectorAll('.password');
    var textarea = this.querySelectorAll('.maxlong');

    var validate = function(e) {
        console.log('Validando formulario...');

        var err = [];

        //Comprobación de required
        for (var i = 0; i < required.length; i++) {

            if (required[i].type == "checkbox") {
                if (validator.checkbox(required[i])) {
                    console.log('Ok');
                } else {
                    console.log('Meeec!');
                    err.push(this.name + ' no está marcado');
                }


            } else {
                if (validator.required(required[i])) {
                    console.log('Ok');
                } else {
                    console.log('Meeec!');
                    err.push(this.name + ' es obligatorio');
                }

            }

        }

        //Comprobación de mail
        for (var i = 0; i < email.length; i++) {
            if (validator.email(email[i].value)) {
                console.log('ok');
            } else {
                console.log('meec!');
                err.push('email');
            }
        }

        //Comprobación de textarea
        for (var i = 0; i < textarea.length; i++) {
            if (validator.maxlong(textarea[i].value)) {
                console.log('ok');
            } else {
                console.log('meec!');
                err.push(this.name + ' texto demasiado largo');
        }
    }

    //if (err.length > 0) {
        e.preventDefault();
        alert(err.join('\n'));
    //  }

};

// Listener en formulario para submit
this.addEventListener('submit', validate, false);

};
