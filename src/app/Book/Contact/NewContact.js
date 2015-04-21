(function() {
'use strict';

angular
	.module('App.Book')
	.controller('newContactCtrl', newContactCtrl);


//**************************************************************************************************

newContactCtrl.$inject = ['DataBase', '$scope', '$state'];

function newContactCtrl( DataBase, $scope, $state ) {
	$scope.$parent.bookView.openDetails();
	var vm = this;
	vm.contact = {
		firstName:'',
		middleName:'',
		lastName:'',
		nick:'',
		address:'',
		birthday:'',
		phones:[],
		emails:[],
		links:[],
		ims:[]
	};
	vm.title = 'Create new contact';
	vm.submit = 'Create';
	vm.close = function() {
		$state.go('search');
	};
}

})();