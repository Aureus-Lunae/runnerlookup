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

runnersApp.filter(`time`, function() {
	return function(input) {
		let time = new Date(null);
		time.setSeconds(input);
		return time.toISOString().substr(11, 8);
	}
});

runnersApp.filter(`secToTimeDec`, function() {
	return function(input) {
		let time = Math.floor(input);
		let secondsDec = Math.round((input - time)*1000);
		let hour = Math.floor(time / 3600);
		hour = (`0${hour}`).slice(-2);
		let minutes = Math.floor(time % 3600 / 60);
		minutes = (`0${minutes}`).slice(-2);
		let seconds = time % 3600 % 60;
		seconds = (`0${seconds}`).slice(-2);
		if (secondsDec !== 0){
		seconds = `${seconds}.${secondsDec}`;
		} 
		return `${hour}:${minutes}:${seconds}`;
	}
});

runnersApp.filter(`speedruntime`, function() {
	return function(input) {
		let time = Math.floor(input);
		let secondsDec = Math.round((input - time)*1000);
		let hour = Math.floor(time / 3600);
		
		let minutes = Math.floor(time % 3600 / 60);
		let seconds = time % 3600 % 60;
		if (secondsDec !== 0){
		seconds = `${seconds}.${secondsDec}`;
		} 
		if (hour > 0) {
			return `${hour}h ${minutes}m ${seconds}s`;
		} else {
			return `${minutes}m ${seconds}s`;
		}
		
	}
});

runnersApp.filter(`video`, [`$sce`, function($sce) {
	return function(input) {
		let host = input.split(`.`)[1];
		let url;
		switch (host){
			case `twitch`:
				url = `https://player.twitch.tv/?video=v` + input.split(`videos/`)[1] + `&autoplay=false`;
				if (url	=== undefined ){
					url = `https://player.twitch.tv/?video=v` + input.split(`/v/`)[1] + `&autoplay=false`;
				}
				break;
			case `youtube`:
				url = `https://www.youtube.com/embed/` + input.split(`?v=`)[1];
				url = url.split(`&t=`)[0];
				break;
			default:
				url = `https://www.youtube.com/embed/` + input.split(`/`)[3];
				url = url.split(`&t=`)[0];
				break;
		}

		return $sce.trustAsResourceUrl(url);
	}
}]);
