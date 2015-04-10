(function() {
'use strict';

angular
	.module('App.Book')
	.controller('editContactCtrl', editContactCtrl);


//**************************************************************************************************

editContactCtrl.$inject = ['DataBase', '$scope', '$stateParams', 'Stage'];

function editContactCtrl( DataBase, $scope, $stateParams, Stage ) {
	var vm = this,
		id = $stateParams.id,
		bv = $scope.$parent.bookView;
	bv.openDetails();
	bv.activeId = id;
	vm.contact = DataBase.getContact(id);
	vm.title = 'Edit contact';
	vm.submit = 'Edit';
}

})();