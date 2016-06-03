angular.module('app.core').config(coreRouter);

coreRouter.$inject = ['$stateProvider', '$urlRouterProvider'];
function coreRouter($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('contactBook.search', {
			url: '/',
			views: {
				'side-menu21': {
					templateUrl: 'templates/search.html',
					controller: 'searchCtrl'
				}
			}
		})

		.state('contactBook.editCreate', {
			url: '/edit',
			views: {
				'side-menu21': {
					templateUrl: 'templates/editCreate.html',
					controller: 'editCreateCtrl'
				}
			}
		})

		.state('contactBook.settings', {
			url: '/settings',
			views: {
				'side-menu21': {
					templateUrl: 'templates/settings.html',
					controller: 'settingsCtrl as vm'
				}
			}
		})

		.state('contactBook', {
			url: '/menu',
			templateUrl: 'templates/contactBook.html',
			abstract: true
		});

	$urlRouterProvider.otherwise('/menu/');
}