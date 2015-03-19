(function() {
'use strict';

angular
	.module('App.Book')
	.controller('detailsCtrl', detailsCtrl);


//**************************************************************************************************

detailsCtrl.$inject = ['DataBase', '$scope', '$routeParams'];

function detailsCtrl( DataBase, $scope, $routeParams ) {
	$scope.bookView.detailsOpen = true;
	$scope.bookView.activeId = $routeParams.id;
	$scope.contact = {
		firstName:'First',
		lastName:'Last'
	};
}
})();