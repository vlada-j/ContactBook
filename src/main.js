/* *********************************************************************************************** *
 * APPLICATION
 * =============================================================================================== *
 * Just bound all modules together
 * *********************************************************************************************** */

(function() {
'use strict';


angular.module('app', [
	'ionic',
	'app.core',
	'app.controllers',
	'app.services',
	'app.directives'
]);

})();