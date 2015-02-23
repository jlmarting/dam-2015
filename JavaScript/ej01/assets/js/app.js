(function() {

    var validarDNI = function(dni) {
        var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y',
            'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S',
            'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'
        ];
        var ok = false;

        if (dni && typeof dni === "string" && dni.length === 9) {
            var num = parseInt(dni);

            if (num >= 0 && num <= 99999999) {
                var char = dni.charAt(dni.length - 1).toUpperCase();
                ok = char === letras[num % 23];
            }


        }
        return ok;

    };


    console.log(validarDNI("44148828Y") === true);
    console.log(validarDNI("44148822Y") === false);
    console.log(validarDNI("00000000Y") === false);
    console.log(validarDNI("44") === false);
    console.log(validarDNI("44148828") === false);
    console.log(validarDNI("") === false);

})();
