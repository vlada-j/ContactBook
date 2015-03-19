(function() {
'use strict';

angular
	.module('App.Core')
	.controller('SettingsController', SettingsController);


//**************************************************************************************************

SettingsController.$inject = ['DataBase'];

function SettingsController( DataBase ) {
	var vm = this;
	console.log('Settings-CTRL', typeof DataBase);
	vm.db = angular.toJson( DataBase.getData() );
	vm.newdb = '';
	vm.save = function() {
		console.log('SAVE', typeof angular.fromJson(vm.newdb));
		DataBase.clearData();
		DataBase.setData( angular.fromJson(vm.newdb) );
		DataBase.save();
		vm.db = angular.toJson( DataBase.getData() );
	};
}
})();