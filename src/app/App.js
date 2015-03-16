/* ******************************* *
 * CONTACT BOOK                    *
 * =============================== *
 * Just bound all modules together *
 * ******************************* */

(function() {
'use strict';

angular
	.module('App', [
		'ngRoute',
		'ngAnimate',

		'App.DataBase',
		'App.Core',
		'App.Book'
	]);

})();