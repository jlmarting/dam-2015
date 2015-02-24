var App = App || { Model :{} };    // emulamos namespace

App.Model.Shape = (function(){

    //Variables privadas
    this.x = 0;
    this.y = 0;

    function Shape(x, y){
        this.x = (typeof x === 'number' ) ? x : 0;
        this.y = (typeof y === 'number' ) ? y : 0;
    }

    Shape.prototype.move = function (x, y){
        this.x += (typeof x === 'number' ) ? x : 0;
        this.y += (typeof y === 'number' ) ? y : 0;
    };


    Shape.prototype.getX = function(){
        return  this.x;
    };
    Shape.prototype.getY = function(){
        return this.y;
    };

    Shape.prototype.setX = function(x){
        this.x = (typeof x === 'number')  ? x : this.x;
    };
    Shape.prototype.setY = function(){
        this.y = (typeof y === 'number')  ? y : this.y;
    };

    return Shape;


})();