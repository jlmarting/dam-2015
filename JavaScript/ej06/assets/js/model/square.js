var App = App || {Model:{}};    // emulamos namespace

App.Model.Square = (function(){
   
    var _lado;
   
    function Square(x,y,lado){
        App.Model.Shape.call(this,x,y);
        _lado = (typeof lado === 'number') ? lado : 0;
    }

    // Indicamos la 'clase padre'
    Square.prototype = Object.create(App.Model.Shape.prototype);
    Square.prototype.constructor = Square; 

    Square.prototype.getLado = function(){
        return _lado;
    };


    Square.prototype.getArea = function() {
        return _lado*_lado;
    };
    
    return Square;

})();