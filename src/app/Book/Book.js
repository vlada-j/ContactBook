(function(){
'use strict';

angular
.module('App.Book', [
	'App.Book.Contact'
])
.config(bookConfig)
.service('BookList', BookList)
.run(function(){ console.log('BOOK RUN'); })
.controller('bookCtrl', bookCtrl)
.directive('bookItem', bookItem);

//**************************************************************************************************

bookConfig.$inject = [ '$stateProvider', '$urlRouterProvider' ];

function bookConfig ( $stateProvider, $urlRouterProvider ) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('search', {
			url:			'/',
			templateUrl:	'app/Book/book.tpl.html',
			controller:		'bookCtrl',
			controllerAs:	'bookView'
		})
		.state('search.new', {
			url:			'new',
			templateUrl:	'app/Book/Contact/contact.tpl.html',
			controller:		'newContactCtrl',
			controllerAs:	'vm'
		})
		.state('search.details', {
			url:			'{id:[A-Z]{10,}}',
			templateUrl:	'app/Book/Details/details.tpl.html',
			controller:		'detailsCtrl'
		})
		.state('search.edit', {
			url:			'{id:[A-Z]{10,}}/edit',
			templateUrl:	'app/Book/Contact/contact.tpl.html',
			controller:		'editContactCtrl',
			controllerAs:	'vm'
		});
	console.log('BOOK CONFIG');
}

//**************************************************************************************************

BookList.$inject = ['DataBase'];

function BookList (DataBase) {
	this.db = DataBase.getData();

	this.markItem = function(n) {
		// Add "active" only on this item
	};

	this.demarkAllItems = function() {
		// Clear "active" from all items
	};
}

//**************************************************************************************************

bookCtrl.$inject = [ 'DataBase', '$scope', '$state', 'BookList', '$rootScope' ];

function bookCtrl ( DataBase, $scope, $state, BookList, $rootScope ) {
	var bookView = this;
	bookView.db = DataBase.getData();
	bookView.openDetails = function() { $rootScope.detailsOpen = true; };
	bookView.isDetailsOpen = function() { return !!$rootScope.detailsOpen; };
	bookView.activeId = '';
	bookView.open = function(nn){
		BookList.demarkAllItems();
		BookList.markItem(nn.id);
		$state.go('search.details', {id:nn.id});
	};

	$scope.$on('$stateChangeSuccess', function() {
		var id = $state.params.id;
		if(id) {
			bookView.activeId = id;
			BookList.markItem(id);
		} else {
			bookView.activeId = '';
			BookList.demarkAllItems();
		}
		$rootScope.detailsOpen = !$state.is('search');
	});
	console.log('BOOK CTRL');
}

//**************************************************************************************************

bookItem.$inject = [ ];

function bookItem () {
	return {
		scope:{
			itemData:'=',
			toOpen:'='
		},
		replace:true,
		restrict:'C',
		templateUrl:'bookItem.tpl.html',
		link:function(scope) {
			var d = scope.itemData,
				names = [],
				contacts = [];

			d.firstName ? names.push(d.firstName) : 0;
			d.middleName ? names.push(d.middleName) : 0;
			d.lastName ? names.push(d.lastName) : 0;
			d.nick ? names.push(d.nick) : 0;
			d.phones ? contacts.push(d.phones.join(' ')) : 0;
			d.emails ? contacts.push(d.emails.join(' ')) : 0;

			scope.names = names.join(' ');
			scope.contacts = contacts.join(' ');
			// TODO: This is need to optimised! Put this logic intro Book module and create alternative db list as {id, names, contacts}
		}
	}
}

})();