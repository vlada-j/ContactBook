(function() {
'use strict';

angular
.module('App.Core', [])
.config(Config)
.run(Run)
.directive('cbHeader', cbHeader)
.directive('cbSideMenu', cbSideMenu)
.directive('cbContent', cbContent)
.value('Stage', {
	isLoaded:true,
	thm:'thmFlat',
	sideMenuOpen:false,
	detailsOpen:false
});


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
	//DataBase.clearData();
	//DataBase.addContact({"firstName":"Vlada","middleName":"","lastName":"Janosevic","nick":"VJ","phones":[["000000",""]],"emails":[["vj@gmail.com",""]]});
	//DataBase.addContact({"firstName":"Ivana","middleName":"","lastName":"Saric","nick":"","phones":[["999666",""],["666999",""]],"emails":[["mm@xxx.yyy",""]]});
	//DataBase.addContact({"firstName":"Andrej","middleName":"","lastName":"","nick":"","phones":[],"emails":[["djidji@zx.xz",""]]});
	//DataBase.addContact({"firstName":"Marko","middleName":"","lastName":"Janosevic","nick":"","emails":[["madness@code",""]]});
	//console.log( angular.toJson(DataBase.getData()));
	//DataBase.save();
}
})();


function cbHeader() {

	return {
		replace: true,
		restrict: 'E',
		templateUrl:'app/Core/header.tpl.html'
	}
}

function cbSideMenu() {

	return {
		replace: true,
		restrict: 'E',
		templateUrl:'app/Core/sideMenu.tpl.html'
	}
}

function cbContent() {

	return {
		restrict: 'E'
	}
}