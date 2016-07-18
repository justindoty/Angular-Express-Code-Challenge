angular.module('studentsApp').config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/students', {
    templateUrl: 'views/students.html',
    controller: 'StudentsController'
  })

  $locationProvider.html5Mode(true);

});
