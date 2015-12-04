(function() {
'use strict';

angular
.module('App.Core', [])
.config(Config)
.run(Run);


//**************************************************************************************************
// Config and routing
//**************************************************************************************************
Config.$inject = ['$stateProvider', '$urlRouterProvider'];

function Config( $stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('about', {
			url:'/about',
			templateUrl:'app/Core/about.tpl.html'
		})
		.state('settings', {
			url:'/settings',
			templateUrl:'app/Core/settings.tpl.html',
			controller:'settingsCtrl',
			controllerAs:'vm'
		});
}


//**************************************************************************************************
// Run
//**************************************************************************************************
Run.$inject = ['$rootScope', 'DataBase'];

function Run($rootScope, DataBase) {
	$rootScope.isLoaded = true;
	$rootScope.sideMenuOpen = true;
	$rootScope.detailsOpen = false;

	DataBase.load();

	// if is run first time, add some demo contacts
	if( DataBase.getData().length === 0 ) {
		DataBase.clearData();
		DataBase.addContact({"firstName":"Aaa","middleName":"","lastName":"Bbb","nick":"","phones":[["000000",""]],"emails":[["aaabbb@gmail.com",""]]});
		DataBase.addContact({"firstName":"Ccc","middleName":"","lastName":"Ddd","nick":"","phones":[["111111",""],["222222",""]],"emails":[["cd@xxx.yyy",""]]});
		DataBase.addContact({"firstName":"","middleName":"","lastName":"","nick":"Eee","phones":[],"emails":[["eee@zx.xz",""]]});
		DataBase.addContact({"firstName":"Fff","middleName":"","lastName":"Ggg","nick":"","emails":[["fff@ggg",""]]});
		console.log( angular.toJson(DataBase.getData()));
		DataBase.save();
	}
}
})();