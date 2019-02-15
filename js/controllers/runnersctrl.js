runnersApp.controller(`runnersCtrl`, [`$scope`, `runners`, function($scope,
	runners) {
	console.log(`Runners search controller started`);

	$scope.getRunners = function() {
		console.log(`getRunners Started`);
		if ($scope.search) {
			$scope.loading = true;
			runners.getRunners(this.search)
				.then((runnersOutput) => {
					$scope.loading = false;
					$scope.runners = runnersOutput.data.data;
					$scope.pagination = runnersOutput.data.pagination;
					console.log(runnersOutput.data.data);
				});
		}
	}

	$scope.changePage = function(pageUrl) {
		$scope.loading = true;
		runners.pageRunners(pageUrl)
			.then((runnersOutput) => {
				$scope.loading = false;
				$scope.runners = runnersOutput.data.data;
				$scope.pagination = runnersOutput.data.pagination;
			});
	}

}]);