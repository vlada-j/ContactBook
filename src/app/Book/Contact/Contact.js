(function() {
'use strict';

angular
	.module('App.Book.Contact', [])
	.directive ('autoAdd', autoAdd)
	.directive ('typeField', typeField)
	.directive ('autoRemove', autoRemove);


//**************************************************************************************************
function autoAdd() {

	//--------------------------------------------------------------------------------------------------
	function link(scope, ele, attrs) {
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
		transclude:true,
		scope:{
	//		obj:'=',
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
		scope.item = scope.typeField;

		scope.$watch('item[0]', function(nv, ov) {
			if(nv !== ov) {
				scope.typeFieldCallback(scope.typeField);
			}
		});
	}
	/*
	 function getValidation() {
	 var c=this.contact,
	 n=this.contactForm;
	 if(c.firstName==='' && c.middleName==='' && c.lastName==='' && c.nick==='') {return true;}
	 if(n.firstName.$invalid || n.middleName.$invalid || n.lastName.$invalid || n.nick.$invalid) {return true;}
	 return this.contactForm.$invalid;
	 }*/


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



//**************************************************************************************************
function autoRemove() {

	//--------------------------------------------------------------------------------------------------
	function link(scope, ele, attrs) {
		var root = ele;
		var it = scope.autoRemove;

//		console.log('autoRemove', scope, scope.autoRemove);
		scope.$watch('autoRemove.value.$modelValue', function(nv, ov) {
			console.log('watch', nv, ov);
		});

	}


	return {
		scope:{
	//		collection:'=',
			autoRemove:'=',
			data:'='
		},
		restrict:'A',
//		transclude:true,
//		templateUrl:'xxx.tpl.html',
		link:link
	}
}

})();