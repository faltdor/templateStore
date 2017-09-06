angular.module('templateStore.templates',['ngRoute'])

.config(['$routeProvider',function($routeProvider){
	$routeProvider.
		when('/templates',{
			templateUrl: 'templates/templates.html',
			controller: 'TemplateCtrl'
		});

}])

.controller('TemplateCtrl',['$scope',function($scope){
	console.log('TemplateCtrl');
}])