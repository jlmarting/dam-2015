var App = App || {Model:{}};    // emulamos namespace

App.Model.Circle = (function(){
   
    var _radius = 0;
   
    function Circle(x,y,radius){
        App.Model.Shape.call(this,x,y);
        _radius = (typeof radius === 'number') ? radius : 0;
    }

    // Indicamos la 'clase padre'
    Circle.prototype = Object.create(App.Model.Shape.prototype);
    Circle.prototype.constructor = Circle;    

    Circle.prototype.getArea = function() {
        return Math.PI * Math.pow(_radius,2);
    };
    
    return Circle;

})();