/**
 * Created by littleworld on 21/02/16.
 */


angular.module('todoController', [])
  .controller('TodoCrtl', ['$scope', '$http', 'Todos', function ($scope, $http, Todos) {


    //globale variabele
    $scope.todo = "";

    load = function () {
      Todos.get().success(function (data) {
        $scope.todos = data;
      });
    };

    load();

    $scope.save = function () {
      if ( $scope.todo.task != null ) {
        Todos.create($scope.todo)
        .success(function () {
          console.log($scope.todo);
          load();
        });
      }

      else {
        console.log("ik ben leeg");
      }
    };

    $scope.delete = function (id) {
      Todos.delete(id)
        .success(function (data) {
          load();
        });
    };
  }]);