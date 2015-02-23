(function() {

    var factorial = function(num){

        var resultado = 1;

        if (typeof num != 'number') return false;

        if (num<0) return false;

        for (var i=num;i>0;i--){
            resultado = resultado * i;
        }

        return resultado;
    };


    console.log(factorial(0) === 1);
    console.log(factorial(3) === 1*2*3);
    console.log(factorial(9) === 1*2*3*4*5*6*7*8*9);
    console.log(factorial(-1) === false);
    console.log(factorial("qqqq") === false);
    console.log(factorial(null) === false);
    console.log(factorial(function(){}) === false);




 

})();