'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config'),
	showTheLists = require('./listings')

/* Connect to your database */
mongoose.connect(config.db.uri);
/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */
for(var i = 0; i < showTheLists.entries.length; i++){
	var newListing = Listing({
		code: showTheLists.entries[i].code,
		name: showTheLists.entries[i].name,
		coordinates: showTheLists.entries[i].coordinates,
		address: showTheLists.entries[i].address
	});
	
	newListing.save(function(err){
		if(err) throw err;
	});
}

/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */