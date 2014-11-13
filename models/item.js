'use strict';

var mongoose = require('mongoose');

var itemModel = function () {

    //Schema for collection item.
    var itemSchema = mongoose.Schema({
        
        title: String
    });
    
	return mongoose.model('Item', itemSchema);

};




module.exports = new itemModel();