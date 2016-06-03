angular.module('app.controllers', [])
  
.controller('searchCtrl', function() {
console.log('settingsCtrl');

})
   
.controller('editCreateCtrl', function() {

})
   
.controller('settingsCtrl', ['$http', function($http) {
	this.fromls = localStorage.getItem('fromls');
	this.save = function(n) {
		console.log('save', n);
		localStorage.setItem('fromls', n);
	};
	this.load = function() {
		$http.get('http://www.vladajanosevic.info/demo/radio/data/data.json')
			.then(function(r) {
				alert(r);
			},
			function(e) {
				alert('ERROR', e);
			});
	}
}]);
    