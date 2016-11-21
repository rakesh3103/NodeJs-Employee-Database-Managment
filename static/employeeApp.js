
var app = angular.module('employeeApp', ['ngRoute','ngAnimate','tc.chartjs']);

app.config(function ($routeProvider) {
    $routeProvider
	.when('/', {
	    controller: 'mainController',
        templateUrl: '/partials/main.html'
    })
    .when('/dashboard', {
	    controller: 'dashboardController',
        templateUrl: '/partials/dashboard.html'
    })
	.when('/edit', {
	    controller: 'newController',
        templateUrl: '/partials/edit.html'
    })
	.when('/back', {
	    controller: 'mainController',
        templateUrl: '/partials/main.html'
    })
        .when('/employeeDetails',{
            controller: 'employeeDetails',
            templateUrl: '/partials/employeeDetails.html'
        });

});


/*
function customersController($scope,$http) {
    $http.get('dummy_data.json')
    .success(function(response) {$scope.employees = response.employees;});
}
*/
