(function() {


    var s1 = new App.Model.Shape();
    s1.move(5,5);
    console.log(s1.getX());
    console.log(s1.getY());
 
    var s2 = new App.Model.Shape(10,10);
    s2.move(5,5);
    console.log(s2);
    console.log(s2.getX());
    console.log(s2.getY());

    s2.setY(0);
    console.log(s2.getX());
    console.log(s2.getY());

    var c = new App.Model.Circle(3,3,100);
    console.log(c.getX());
    console.log(c.getArea());

    var s = new App.Model.Square(3,3,10);
    console.log('square____');
    console.log(s.getY());
    console.log(s.getArea());


    var r = new App.Model.Rectangle(3,3,100,10);
    console.log('rectangle____');
    console.log(r);
    console.log(r.getArea());

})();
