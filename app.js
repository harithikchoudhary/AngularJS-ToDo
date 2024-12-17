var app = angular.module('todoApp', []); // Define the AngularJS app

app.controller('TodoController', function($scope) {
    // Array to hold the list of todos
    $scope.todos = [
        { text: 'Learn AngularJS', completed: false },
        { text: 'Build a Todo App', completed: false }
    ];

    // Function to add a new todo item
    $scope.addTodo = function(event) {
        // Check if the input is not empty and the key pressed is Enter (keyCode 13)
        if ($scope.newTodo && (event && event.keyCode === 13 || !event)) {  
            $scope.todos.push({
                text: $scope.newTodo,
                completed: false
            });
            $scope.newTodo = ''; // Clear the input field
        }
    };

    // Function to remove a todo item
    $scope.removeTodo = function(index) {
        $scope.todos.splice(index, 1); 
    };
});
