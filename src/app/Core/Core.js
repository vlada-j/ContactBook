/* *********************************************************************************************** *
 * CORE MODULE
 * =============================================================================================== *
 * Main stuff - layout, route, functions
 * *********************************************************************************************** */

(function() {
'use strict';


angular
.module('app.core', [])
//.run( run )
.constant('APP_INFO', {
	appTitle: 'ContactBook',
	version: '1.0.0'
});

//--------------------------------------------------------------------------------------------------
run.$inject = [ '$rootScope', 'layout', 'updateNotification' ];
function run( $rootScope, layout, updateNotification) {
	$rootScope.isLoaded = true;
	$rootScope.openPopover = layout.openPopover;
	$rootScope.closePopover = layout.closePopover;
	$rootScope.toggleLeft = layout.toggleLeft;
	$rootScope.logout = layout.logout;
	$rootScope.goBack = layout.goBack;

	updateNotification.getDueReminders();
	updateNotification.getMessage();

	ionic.Platform.ready(function() {
		if(window.StatusBar) {
			StatusBar.hide();
		}
	});
}

})();