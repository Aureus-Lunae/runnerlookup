var runnersApp = angular.module(`runnersApp`, [`ngRoute`]);

runnersApp.config(($routeProvider) => {
	$routeProvider
		.when(`/`, {
			controller: `runnersCtrl`,
			templateUrl: `views/home.html`
		})
		// .when(`/runner/:id`, {
		// 	controller: `runnerCtrl`,
		// 	templateUrl: `views/runner.html`
		// })
		.otherwise({
			redirectTo: `/`
		});
});