(function() {

    var mayusculas = function(cadena){

        if (typeof cadena === 'string'){
            if (cadena == cadena.toUpperCase()) {return 'M';}
            if (cadena == cadena.toLowerCase()) {return 'm';}
            return 'x';
        }
        return false;


    };


    console.log(mayusculas("44148828Y") === 'M');
    console.log(mayusculas("abracadabra") === 'm');
    console.log(mayusculas("Pata De Cabra") === 'x');
    console.log(mayusculas("TARARI TARARO") === 'M');
    console.log(mayusculas("CAMIÓN") === 'M');
    console.log(mayusculas("Beöwulf") === 'x');
    console.log(mayusculas("asereje já dejé") === 'm');
    console.log(mayusculas(0) === false);
    console.log(mayusculas({}) === false);
    console.log(mayusculas(function(){}) === false);

})();
