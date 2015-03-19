/* ******************************* *
 * CONTACT BOOK                    *
 * =============================== *
 * Just bound all modules together *
 * ******************************* */

(function() {
'use strict';

angular
	.module('App', [
		'ngAnimate',
		'ngNewRouter',

		'App.DataBase',
		'App.Core',
		'App.Book'
	]);

})();