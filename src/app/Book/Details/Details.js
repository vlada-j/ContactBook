(function() {
'use strict';

angular
	.module('App.Book')
	.controller('detailsCtrl', detailsCtrl);


//**************************************************************************************************

detailsCtrl.$inject = ['DataBase', '$scope', '$stateParams'];

function detailsCtrl( DataBase, $scope, $stateParams ) {
	$scope.bookView.detailsOpen = true;
	$scope.bookView.activeId = $stateParams.id;
	$scope.contact = DataBase.getContact($stateParams.id);
}
})();