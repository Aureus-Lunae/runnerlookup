runnersApp.controller(`runnerCtrl`, [`$scope`, `runners`, `$routeParams`,
	function($scope,
		runners, $routeParams) {
		console.log(`runner controller started`);

		const getImg = () => {
			let random = Math.floor(Math.random() * 20);
			let img = `rosalina`;
			switch (random) {
				case 0:
					img = `rosalina`;
					break;
				case 1:
					img = `eevee`;
					break;
				case 2:
					img = `mario`;
					break;
				case 3:
					img = `pikachu`;
					break;
				case 4:
					img = `knuckles`;
					break;
				case 5:
					img = `samus`;
					break;
				case 6:
					img = `hanzo`;
					break;
				case 7:
					img = `link`;
					break;
				case 8:
					img = `crash`;
					break;
				case 9:
					img = `masterchief`;
					break;
				case 10:
					img = `goku`;
					break;
				case 11:
					img = `kirby`;
					break;
				case 12:
					img = `ryu`;
					break;
				case 13:
					img = `vegeta`;
					break;
				case 14:
					img = `marisa`;
					break;
				case 15:
					img = `cirno`;
					break;
				case 16:
					img = `reimu`;
					break;
				case 17:
					img = `vivi`;
					break;
				case 18:
					img = `captainfalcon`;
					break;
				case 19:
					img = `spyro`;
					break;
				case 20:
					img = `cloud`;
					break;
				default:
					img = `rosalina`;
					break;
			}
			$scope.img = img;
		}

		const getRunnerInfo = function() {
			getImg();

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
			getImg();
			runners.pageRunners(pageUrl)
				.then((runnersOutput) => {
					$scope.pbRuns = runnersOutput.data.data;
					$scope.pagination = runnersOutput.data.pagination;
				});
		}

	}
]);