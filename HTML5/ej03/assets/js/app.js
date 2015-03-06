window.onload = function(){
    console.log('Here we go!');

    //inicializar variable de texto almacenado
    // seleccionar input  
    // cargar input con texto almacenado    
    // asignar evento keydown    
        //almacenar en xxxstorage
        //actualizar input
    
   //var currentText = sessionStorage.getItem('currentText')?sessionStorage.getItem('currentText'):"";
    var currentText = localStorage.getItem('currentText')?localStorage.getItem('currentText'):"";

    console.log('currentText: ' + currentText);

    var input = document.getElementById('input');
    input.value = currentText;

    /*var inputSession = function(e){
        console.log(this.value);
        currentText = this.value;
        sessionStorage.setItem('currentText', currentText);
    };*/

    var inputLocal = function(e){
        console.log(this.value);
        currentText = this.value;
        localStorage.setItem('currentText', currentText);
    };

    input.addEventListener('input',inputSession ,false);



}; 