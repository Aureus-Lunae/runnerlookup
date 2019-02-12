runnersApp.controller(`runnerCtrl`, [`$scope`, `runners`, `$routeParams`,
	function($scope,
		runners, $routeParams) {
		console.log(`runner controller started`);

		let getRunnerInfo = function() {
			runners.runnerInfo($routeParams.id)
				.then((runnerInfo) => {
					console.log(runnerInfo.data);
					$scope.runner = runnerInfo.data.data;
				});
		}

		getRunnerInfo();

		$scope.changePage = function(pageUrl) {
			runners.pageRunners(pageUrl)
				.then((runnersOutput) => {
					$scope.runners = runnersOutput.data.data;
					$scope.pagination = runnersOutput.data.pagination;
				});
		}


	}
]);