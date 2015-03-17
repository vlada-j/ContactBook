(function() {
'use strict';

angular
	.module('App.Core', [])
	.config(Config)
	.controller('AppCtrl', AppCtrl);


//**************************************************************************************************
// Config and routing
//**************************************************************************************************
Config.$inject = ['$routeProvider', '$locationProvider'];

function Config($routeProvider, $locationProvider) {
	$routeProvider
		.when('/about',			{ templateUrl:'app/Core/about.tpl.html' })
		.when('/settings',		{ templateUrl:'app/Core/settings.tpl.html', controller:'settingsCtrl', controllerAs:'vm' });
//	$routeProvider.otherwise('/');

//	$locationProvider.html5Mode(true);
}


//**************************************************************************************************
// App main controller
//**************************************************************************************************
AppCtrl.$inject = ['$rootScope', 'DataBase'];

function AppCtrl($rootScope, DataBase) {
	var stage = this;
	stage.isLoaded = true;
	stage.thm = 'thmSilky';
	stage.sideMenuOpen = false;
	stage.detailsOpen = false;
	$rootScope.stage = stage;

	DataBase.load();
	//DataBase.clearData();
	//DataBase.addContact({"firstName":"Vlada","middleName":"","lastName":"Janosevic","nick":"VJ","phones":[["000000",""]],"emails":[["vj@gmail.com",""]]});
	//DataBase.addContact({"firstName":"Ivana","middleName":"","lastName":"Saric","nick":"","phones":[["999666",""],["666999",""]],"emails":[["mm@xxx.yyy",""]]});
	//DataBase.addContact({"firstName":"Andrej","middleName":"","lastName":"","nick":"","phones":[],"emails":[["djidji@zx.xz",""]]});
	//DataBase.addContact({"firstName":"Marko","middleName":"","lastName":"Janosevic","nick":"","emails":[["madness@code",""]]});
	//console.log( angular.toJson(DataBase.getData()));
	//DataBase.save();
}
})();