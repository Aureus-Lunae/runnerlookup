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
			runners.runnerPB($routeParams.id)
				.then((runnerPB) => {
					console.log(runnerPB.data);
					$scope.pbRuns = runnerPB.data.data;
					$scope.pagination = runnerPB.data.pagination;
				});
		}

		getRunnerInfo();

		$scope.changePage = function(pageUrl) {
			runners.pageRunners(pageUrl)
				.then((runnersOutput) => {
					$scope.pbRuns = runnersOutput.data.data;
					$scope.pagination = runnersOutput.data.pagination;
				});
		}


	}
]);