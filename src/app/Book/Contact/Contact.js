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
		var col = scope.collection;
		if(!(col instanceof Array)) { col = []; }
		if(col.length===0) { col.push(['','']); }

		scope.empty = function(it) {
			if(col.length>0 && it.length===2) { update(col, it); }
			else { console.log('Error:', col, it); }
		};

		update(col);
	}

	function update(c, i) {
		var l = c[c.length-1];
		if (i && !i[0] && i!==l)				{ c.splice(c.indexOf(i), 1); }
		if (l[0] !== undefined && l[0] !== '')	{ c.push(['', '']); }
	}

	return {
		transclude:true,
		scope:{collection:'='},
		templateUrl:'autoAdd.tpl.html',
		restrict:'A',
		link:link
	}
}


//**************************************************************************************************
function typeField() {
	var root, parent;

	//--------------------------------------------------------------------------------------------------
	function link(scope, ele, attrs) {
		root = ele;
		parent = scope.$parent;
		scope.item = scope.typeField;

		scope.$watch('item[0]', function() {
			if(scope.formX.value.$valid) {
				scope.typeFieldCallback(scope.typeField);
			}
		});
	}


	return {
		transclude:true,
		scope:{
			typeField:'=',
			typeFieldCallback:'='
		},
		templateUrl:'typeField.tpl.html',
		restrict:'A',
		link:link
	}
}

})();