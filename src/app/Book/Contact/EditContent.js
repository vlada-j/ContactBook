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
//	vm.contactForm = {};
//	console.log($scope.contactForm, contactForm);

	vm.test = function(n, er) {
		console.log('TEST', n, er);
		if(er.required) {
			console.log('REMOVE', vm.contact.test.indexOf(n));
			vm.contact.test.splice(vm.contact.test.indexOf(n), 1);
		}
	};

	vm.contact.test = [
		[123,''],
		[456,''],
		[789,'']
	];
	vm.obj = { zxc: 'asd' };
}

})();