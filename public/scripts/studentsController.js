angular.module('studentsApp').controller('StudentsController', function($scope, $http){
    

    $scope.displayStudents = function() {
    $http.get('/students').then(handleSuccess, handleFailure);

    }

    function handleSuccess(response) {
      console.log(response);
      $scope.students = response.data;

    }

    function handleFailure(response) {
      console.log('Failure', response);
    }


});
