(function() {
'use strict';

angular
	.module('App.Book')
	.controller('newContactCtrl', newContactCtrl);


//**************************************************************************************************

newContactCtrl.$inject = ['DataBase', '$scope'];

function newContactCtrl( DataBase, $scope ) {
	console.log('newContactCtrl');
}
})();