/* *************** *
 * DATA BASE MODEL *
 * *************** */
(function() {
'use strict';

angular
.module('App.DataBase', [])
.constant('KEY', 'contacts')
.service ('DataBase', DataBase)
;



/* ***************** *
 * DATA BASE SERVICE *
 * ***************** */
DataBase.$inject = ['KEY'];

function DataBase(KEY) {
	this.KEY = KEY;
	this.data = [];
	this.storage = !!(window.localStorage) ? window.localStorage : null;

	// Generate id as a random 10 characters
	this.getID = function() {
		var id = '';
		for(var i=0; i<10; i+=1) {
			id += String.fromCharCode(Math.random() * 25 + 97);
		}
		id = id.toUpperCase();
		return id;
	};

//--------------------------------------------------------------------------------------------------
// DATA METHODS
//--------------------------------------------------------------------------------------------------

	// Total number of contacts
	this.total = function() { return this.data.length; };

	// Get copy of data as array
	this.getData = function() { return angular.copy(this.data); };

	// Set data as array
	this.setData = function(d) { this.data = angular.copy(d); };

	// Delete all contacts
	this.clearData = function() {
		var self = this;
		while(self.data.length > 0) {
			if(self.storage) {
				self.storage.removeItem(self.KEY+'.'+self.data[0].id);
			}
			self.data[0] = null;
			self.data.shift();
		}
	};

	// Get all contacts from local storage
	this.load = function() {
		var self = this;
		if(!self.storage) { return false; }

		self.clearData();
		for(var k in self.storage) {
			if(self.storage.hasOwnProperty(k)) {
				if (k.indexOf(self.KEY)===0 && k!==self.KEY) {
					var item = angular.fromJson( self.storage.getItem(k) );
					item.id = k.split('.')[1];
					self.data.push(item);
				}
			}
		}
		return self.data;
	};

	// Save all contacts in local storage
	this.save = function() {
		var self = this;
		if(!self.storage) { return false; }
		angular.forEach(
			self.data,
			function(item) {
				var k = self.KEY + '.' + item.id,
					it = angular.copy(item);
				delete it.id;
				self.storage.setItem(k, angular.toJson(it));
			}
		);
	};


//--------------------------------------------------------------------------------------------------
// CONTACT METHODS
//--------------------------------------------------------------------------------------------------

	// Get copy of contact object by ID
	this.getContact = function(id) {
		if(typeof id === 'string' && id !== '') {
			var i = this.indexOfID(id);
			if(i >= 0) { return angular.copy(this.data[i]); }
		}
		return null;
	};

	// Set contact object by ID
	this.setContact = function(id, o) {
		var i = this.indexOfID(id),
			key = this.KEY + '.' + id;

		if(this.storage) {
			this.storage.setItem(key, angular.toJson(o));
		}
		o.id = id;
		if(i > 0) { this.data[i] = angular.copy(o); }
	};

	// Create and add new contact
	this.addContact = function(o) {
		var id = this.getID(),
			key = this.KEY + '.' + id;

		if(this.storage) {
			this.storage.setItem(key, angular.toJson(o));
		}
		o.id = id;
		this.data.push(angular.copy(o));
	};

	// Remove some contact by ID
	this.removeContact = function(o) {
		var id = typeof o === 'string' ? o : o.id,
			i = this.data.indexOfID(id);
		if(i > -1 && i < this.data.length) {
			this.data.splice(i, 1);
			if(this.storage) {
				this.storage.removeItem(this.KEY+'.'+id);
			}
		}
	};

	// Get contact by ID
	this.indexOfID = function(id) {
		var d = this.data,
			len = d.length,
			i = 0;
		for(i=0; i<len; i++) {
			if (d[i].id === id) { return i; }
		}
		return -1;
	};
}

})();