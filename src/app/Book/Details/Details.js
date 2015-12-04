(function() {
'use strict';

angular
.module('App.Book')
.controller('detailsCtrl', detailsCtrl);


//**************************************************************************************************

detailsCtrl.$inject = ['DataBase', '$scope', '$stateParams', '$rootScope'];

function detailsCtrl( DataBase, $scope, $stateParams, $rootScope ) {
	$rootScope.detailsOpen = true;
	$scope.bookView = $scope.bookView || {};
	$scope.bookView.activeId = $stateParams.id;
	$scope.contact = DataBase.getContact($stateParams.id);
}
})();