'use strict';

var Item = require('../models/item');


var addItem = function(title, callbk) {
	var currentdate = new Date;
	var newItem = new Item();
	
	newItem.title = title;
	
    
	newItem.save(function(err) {
		callbk(err, newItem);
	});

}


var getItems = function(callbk) {
	Item.find(function(err, items) {
		callbk(err, items);
	});
}


exports.addItem = addItem;
exports.getItems = getItems;
