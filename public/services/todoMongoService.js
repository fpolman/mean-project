/**
 * Created by littleworld on 21/02/16.
 */


angular.module('todoService', [])

  .factory('Todos', ['$http', function ($http) {
    return {
      get: function () {
        return $http.get('/todos');
      },
      create: function (newTodo) {
        return $http.post('/todo', newTodo);
      },
      delete: function (id) {
        return $http.delete('todo/' + id);
      }
    }
  }]);