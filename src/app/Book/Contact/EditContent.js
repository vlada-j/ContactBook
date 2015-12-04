(function() {
'use strict';

angular
.module('App.Book')
.controller('editContactCtrl', editContactCtrl);


//**************************************************************************************************

editContactCtrl.$inject = ['DataBase', '$scope', '$stateParams', '$state'];

function editContactCtrl( DataBase, $scope, $stateParams, $state ) {
	var vm = this,
		id = $stateParams.id,
		bv = $scope.$parent.bookView;
	bv.openDetails();
	bv.activeId = id;
	vm.contact = DataBase.getContact(id);
	vm.title = 'Edit contact';
	vm.submit = 'Edit';
	vm.close = function() {
		$state.go('search.details', {id:id});
	};
}

})();