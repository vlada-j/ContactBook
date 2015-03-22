(function(){
'use strict';

angular
	.module('App.Book', [])
	.config(bookConfig)
	.service('BookList', BookList)
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
			templateUrl:	'app/Book/NewContact/newcontact.tpl.html',
			controller:		'newContactCtrl',
			controllerAs:	'vm'
		})
		.state('search.details', {
			url:			'{id:[A-Z]{10,}}',
			templateUrl:	'app/Book/Details/details.tpl.html',
			controller:		'detailsCtrl'
		});
}

//**************************************************************************************************

BookList.$inject = ['DataBase'];

function BookList (DataBase) {
	this.db = DataBase.getData();
}

BookList.prototype.markItem = function(n) {
	// Add "active" only on this item
};

BookList.prototype.demarkAllItems = function() {
	// Clear "active" from all items
};

//**************************************************************************************************

bookCtrl.$inject = [ 'DataBase', '$scope', '$state', 'BookList' ];

function bookCtrl ( DataBase, $scope, $state, BookList ) {
	var bookView = this;
	bookView.db = DataBase.getData();
	bookView.detailsOpen = false;
	bookView.activeId = '';
	bookView.open = function(nn){
		BookList.demarkAllItems();
		BookList.markItem(nn.id);
		$state.go('search.details', {id:nn.id});
	};

	$scope.$on('$stateChangeSuccess', function() {
		bookView.activeId = '';
		bookView.detailsOpen = false;
		BookList.demarkAllItems();
	});
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
		link:function(scope, element, attr) {
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