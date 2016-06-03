(function() {
'use strict';

angular.module('app.core').run( coreRun );

coreRun.$inject = ['$ionicPlatform'];
function coreRun($ionicPlatform) {

	$ionicPlatform.ready( ionicPlatformReady );
	function ionicPlatformReady() {
		if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);
		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
//			StatusBar.styleDefault();
			StatusBar.hide();
		}
	}
}

})();