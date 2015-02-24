var App = App || {Model:{}};    // emulamos namespace

App.Model.Rectangle = (function(){
   
    var _lado2;
   
    function Rectangle(x,y,lado1,lado2){
        App.Model.Square.call(this,x,y,lado1);
        _lado2 = (typeof lado2 === 'number') ? lado2 : 0;
    }

    // Indicamos la 'clase padre'
    Rectangle.prototype = Object.create(App.Model.Square.prototype);
    Rectangle.prototype.constructor = Rectangle;    

    Rectangle.prototype.getArea = function() {
        return _lado2 * App.Model.Square.prototype.getLado();
    };
    
    return Rectangle;

})();