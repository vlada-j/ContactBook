(function() {
	'use strict';


angular.module('App.common', [])
.directive('cbHeader', cbHeader)
.directive('cbSideMenu', cbSideMenu)
.directive('cbContent', cbContent);



//**************************************************************************************************
// Header
//**************************************************************************************************
function cbHeader() {

	return {
		replace: true,
		restrict: 'E',
		templateUrl:'app/common/header.tpl.html'
	}
}



//**************************************************************************************************
// Side menu
//**************************************************************************************************
function cbSideMenu() {

	return {
		replace: true,
		restrict: 'E',
		templateUrl:'app/common/sideMenu.tpl.html'
	}
}



//**************************************************************************************************
// Content container
//**************************************************************************************************
function cbContent() {

	return {
		restrict: 'E'
	}
}

})();