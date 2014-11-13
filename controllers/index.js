'use strict';


var itemsDao = require('../dao/items');


module.exports = function (router) {

    router.get('/getItems', function (req, res) {
        
        itemsDao.getItems(function(err, itemList) {
			if(!err){
				res.json(itemList);
			} else{
				res.json(err);
			}
			
		});
        
    });
	
	router.get('/addItem', function (req, res) {
		
		var title = req.query.title;
		
        
        itemsDao.addItem(title,function(err, itemList) {
			if(!err){
				res.json({message:'success'});
			} else{
				res.json(err);
			}
			
		});
        
    });

};
