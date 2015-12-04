(function() {
'use strict';

angular
.module('App.Core', [])
.config(Config)
.value('Stage', {
	isLoaded:true,
	thm:'thmFlat',
	sideMenuOpen:false,
	detailsOpen:false
})
.controller('AppCtrl', AppCtrl);


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
// App main controller
//**************************************************************************************************
AppCtrl.$inject = ['Stage', 'DataBase'];

function AppCtrl(Stage, DataBase) {
	Stage = angular.extend(this, Stage);

	DataBase.load();

	// if is run first time, add some demo contacts
	if( DataBase.getData().length === 0 ) {
		DataBase.clearData();
		DataBase.addContact({"firstName":"Aaa","middleName":"","lastName":"Bbb","nick":"","phones":[["000000",""]],"emails":[["aaabbb@gmail.com",""]]});
		DataBase.addContact({"firstName":"Ccc","middleName":"","lastName":"Ddd","nick":"","phones":[["111111",""],["222222",""]],"emails":[["cd@xxx.yyy",""]]});
		DataBase.addContact({"firstName":"","middleName":"","lastName":"Bbb","nick":"Eee","phones":[],"emails":[["eee@zx.xz",""]]});
		DataBase.addContact({"firstName":"Aaa","middleName":"","lastName":"Ggg","nick":"","emails":[["aaa@ggg",""]]});
		DataBase.save();
	}
}
})();