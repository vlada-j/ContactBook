(function() {
'use strict';

angular
	.module('App.Book')
	.controller('newContactCtrl', newContactCtrl)
	.directive ('autoAdd', autoAdd);


//**************************************************************************************************

newContactCtrl.$inject = ['DataBase', '$scope'];

function newContactCtrl( DataBase, $scope ) {
	$scope.bookView.detailsOpen = true;
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
}


//**************************************************************************************************

//autoAdd.$inject = ['$timeout'];

function autoAdd() {
	var root;

	//--------------------------------------------------------------------------------------------------
	function link(scope, ele, attrs) {
		root = ele;
		if(!(scope.collection instanceof Array)) { scope.collection = []; }
		if(scope.collection.length===0) { scope.collection.push(['','']); }
		console.log('autoAdd', scope.collection);
	}
/*
	function getValidation() {
		var c=this.contact,
			n=this.newContactForm;
		if(c.firstName==='' && c.middleName==='' && c.lastName==='' && c.nick==='') {return true;}
		if(n.firstName.$invalid || n.middleName.$invalid || n.lastName.$invalid || n.nick.$invalid) {return true;}
		return this.newContactForm.$invalid;
	}*/


	return {
		scope:{
			collection:'='
		},
		templateUrl:'autoAdd.tpl.html',
		replace:true,
		restrict:'A',
		link:link
	}
}

})();