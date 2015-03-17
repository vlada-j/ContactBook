/* ******************************* *
 * CONTACT BOOK                    *
 * =============================== *
 * Just bound all modules together *
 * ******************************* */

(function() {
'use strict';

angular
	.module('App', [
		'ngNewRouter',
		'ngAnimate',

		'App.DataBase',
		'App.Core',
		'App.Book'
	]);

})();