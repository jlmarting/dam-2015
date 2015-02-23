(function() {

    var parOimpar = function(num){

        var resto = num % 2;

        if (resto == 1){
            return 'impar';
        }

        if (resto == 0) {
            return 'par';
        }

        return null;
       

    };




    console.log(parOimpar(4) === 'par');
    console.log(parOimpar(-48) === 'par');
    console.log(parOimpar(41) === 'impar');
    console.log(parOimpar(1) === 'impar');
    console.log(parOimpar(3) === 'impar');
    console.log(parOimpar(0) === 'par');
    console.log(parOimpar("aaa") === null);
    console.log(parOimpar({}) === null);
    console.log(parOimpar(function(){}) === null);




})();
