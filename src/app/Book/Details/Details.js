(function() {
'use strict';

angular
	.module('App.Book')
	.controller('detailsCtrl', detailsCtrl);


//**************************************************************************************************

detailsCtrl.$inject = ['DataBase', '$scope', '$stateParams', 'Stage'];

function detailsCtrl( DataBase, $scope, $stateParams, Stage ) {
	Stage.detailsOpen = true;
	$scope.bookView.activeId = $stateParams.id;
	$scope.contact = DataBase.getContact($stateParams.id);
}
})();