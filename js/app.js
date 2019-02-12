const runnersApp = angular.module(`runnersApp`, [`ngRoute`]);

runnersApp.config(function($routeProvider) {
	$routeProvider
		.when(`/`, {
			controller: `runnersCtrl`,
			templateUrl: `views/home.html`
		})
		.when(`/runner/:id`, {
			controller: `runnerCtrl`,
			templateUrl: `views/runner.html`
		})
		.otherwise({
			redirectTo: `/`
		});
});

/**
 * Filters
 * @return {string}   [Filter at split index]
 */
runnersApp.filter(`split`, function() {
	return function(input, splitChar, splitIndex) {
		return input.split(splitChar)[splitIndex];
	}
});