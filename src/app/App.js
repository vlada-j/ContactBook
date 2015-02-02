/* ******************************* *
 * CONTACT BOOK                    *
 * =============================== *
 * Just bound all modules together *
 * ******************************* */

(function() {
'use strict';

angular
	.module('App', [
		'ui.router',

		'App.DataBase',
		'App.Core',
		'App.Book'
	]);

})();