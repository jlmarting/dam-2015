var todoApp = angular.module('todoApp',[]);

todoApp.controller('TodoController',['$scope',function($scope){
    var todos = [];

    todos.push({done:true, task: 'Aprender JS'});
    todos.push({done:false, task: 'Aprender Ionic'});
    todos.push({done:false, task: 'Adorar JavaScript'});

    $scope.todos = todos;

    $scope.addTodo  = function(){
        console.log($scope.inputText);
        todos.push({ done:false, task: $scope.inputText });
        $scope.inputText='';
    };


}]);