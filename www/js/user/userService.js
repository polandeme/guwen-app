define(function () {
	var userService = function ($http, $location) {
		// var HOST = 'http://192.168.1.103/guwen/index.php/';
		var HOST = 'http://guwen.stuzone.com/index.php/';
		
		var o = {
			profile: {
				username: '',
				password: ''
			},
			login: function () {
				console.log(o.profile.username);
				var data = {
					username: o.profile.username,
					password: o.profile.password
				};
				var url = HOST + 'api/user/login/';
				$http.post(url, data)
					 .success(function(data) {
					 	if(data.status === 1) {
					 		window.location.href = "#/menu/ask"
					 		console.log('success');
					 	}
					 })
					 .error(function() {
					 	console.log('error');
					 })
			}
		}	
		return o;
	}
	return userService;
})