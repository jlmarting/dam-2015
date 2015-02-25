window.onload = function() {

var enlaces = document.getElementsByTagName("a");
console.log("Nº enlaces " + enlaces.length);

enlaces = document.querySelectorAll("a");
console.log("Nº enlaces " + enlaces.length);

console.log(enlaces[enlaces.length-2].href);

enlaces = document.querySelectorAll('a[href="http://prueba"]');
console.log("Nº enlaces a http://prueba " + enlaces.length);

enlaces = document.getElementsByTagName("p")[2].getElementsByTagName('a');
console.log("Nº de enlaces del 3er. párrafo " + enlaces.length);

};