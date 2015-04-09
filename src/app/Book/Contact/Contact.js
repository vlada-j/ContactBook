(function() {
'use strict';

angular
	.module('App.Book.Contact', [])
	.directive ('autoAdd', autoAdd)
	.directive ('typeField', typeField);


//**************************************************************************************************
function autoAdd() {

	//--------------------------------------------------------------------------------------------------
	function link(scope, ele, attrs) {
		var root = ele;
		var col = scope.collection;
		if(!(col instanceof Array)) { col = []; }
		if(col.length===0) { col.push(['','']); }

		scope.empty = function(it) {
			if(col.length>0 && it.length===2) {
				update(col, it);
			} else {
				console.log('Error:', col, it);
			}
		};

		update(col);
	}

	function update(c, i) {
		var l = c[c.length-1];
		if(l[0] !== undefined && l[0] !== '') {
			c.push(['', '']);
		}
		if(i && !i[0]) {
			c.splice(c.indexOf(i), 1);
		}
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
function typeField() {
	var root;

	//--------------------------------------------------------------------------------------------------
	function link(scope, ele, attrs) {
		root = ele;
		scope.data = scope.typeField;

		scope.$watch('data[0]', function(n, o) {
			if(n !== o) {
				scope.typeFieldCallback(scope.typeField);
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