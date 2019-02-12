runnersApp.factory(`runners`, [`$http`, function($http) {
	let service = {};
	console.log('factory Started');
	service.getRunners = (search) => {
		return $http.get(
				`https://www.speedrun.com/api/v1/users?max=30&name=${search}&orderby=name.int&direction=asc`
			)
			.then(function(data) {
				return data;
			})
			.catch(function(data) {
				return data;
			});
	}

	service.pageRunners = (pageUrl) => {
		return $http.get(pageUrl)
			.then(function(data) {
				return data;
			}, function errorCallback(data) {
				return data;
			});
	}

	return service;
}]);