(function() {
'use strict';

angular
	.module('App.Book')
	.controller('newContactCtrl', newContactCtrl)
	.directive ('autoAdd', autoAdd)
	.directive ('typeField', typeField);


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
		phones:[["999666","mob"],["666999","fix"]],
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

		scope.empty = function(it) { console.log('empty', it); };
	}



	return {
		scope:{
			collection:'='
		},
		templateUrl:'autoAdd.tpl.html',
		restrict:'A',
		link:link
	}
}


//**************************************************************************************************

//typeField.$inject = ['$timeout'];

function typeField() {
	var root;

	//--------------------------------------------------------------------------------------------------
	function link(scope, ele, attrs) {
		root = ele;
		scope.data = {
			value: scope.typeField[0],
			type: scope.typeField[1]
		};

		scope.$watch('data.value', function(n, o) {
			if(n !== o) {
				if(n === '' || n === undefined) {
					scope.typeFieldCallback(scope.typeField);
				}
			}
		});
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
			typeField:'=',
			typeFieldCallback:'='
		},
		templateUrl:'typeField.tpl.html',
		replace:true,
		restrict:'A',
		link:link
	}
}

})();