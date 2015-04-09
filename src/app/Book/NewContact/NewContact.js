(function() {
'use strict';

angular
	.module('App.Book')
	.controller('newContactCtrl', newContactCtrl);


//**************************************************************************************************

newContactCtrl.$inject = ['DataBase', '$scope'];

function newContactCtrl( DataBase, $scope ) {
	$scope.$parent.bookView.openDetails();
	var vm = this;
	vm.contact = {
		firstName:'',
		middleName:'',
		lastName:'',
		nick:'',
		address:'',
		birthday:'',
		phones:[["123","mob"],["456","fix"],["789",""]],
		emails:[],
		links:[],
		ims:[]
	};
}

})();