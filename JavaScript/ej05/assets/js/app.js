(function() {

    var palindroma = function(cadena){
        try{
            var cadena2 = cadena.trim().toLowerCase().split("").reverse().join("");
            return (cadena2===cadena);
        }
        catch(e){
            throw 'type_error';
        }
    };


    var test = function(param, res){
        try{
            console.log((param) === res);
        }catch(e){
            console.log ('e.message');
        }finally {
            
        }
    };


    test(palindroma("dabale arroz a la zorra el abad"),false);    
    test(palindroma("vamonos de aqui"),false);
    test(palindroma("aAa"),true);
    test(palindroma("a a"),true);
    test(palindroma(1225221),false);
    test(palindroma("1225221"),true);
    test(palindroma(),false);
    test(palindroma(13),false);


})();
