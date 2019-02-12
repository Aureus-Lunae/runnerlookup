runnersApp.controller(`runnersCtrl`, [`$scope`, `runners`, function($scope,
	runners) {
	console.log(`controller started`);

	$scope.getRunners = function() {
		console.log(`getRunners Started`);
		console.log(`Scope: ${$scope.search}`);
		if ($scope.search) {
			console.log(`Seach: ${this.search}`);
			runners.getRunners(this.search)
				.then((runnersOutput) => {
					$scope.runners = runnersOutput.data.data;
					$scope.pagination = runnersOutput.data.pagination;
					console.log(runnersOutput.data.data);
				});
		}
	}

	$scope.changePage = function(pageUrl) {
		runners.pageRunners(pageUrl)
			.then((runnersOutput) => {
				$scope.runners = runnersOutput.data.data;
				$scope.pagination = runnersOutput.data.pagination;
			});
	}


}]);