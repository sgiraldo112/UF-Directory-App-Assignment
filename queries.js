/* Fill out these functions using Mongoose queries*/
var mongoose = require('mongoose'), 
    Listing = require('./ListingSchema.js'),
    config = require('./config');

mongoose.connect(config.db.uri);


var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
   Listing.findOne({name:'Library West'}, function(err,list){
	   if(err){
		   throw err;
	   }else{
			console.log(list);
	   }
   });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
   Listing.findOne({code:'CABL'}, function(err,list0){
	   if(err)
		   throw err;
	   
	   list0.remove(function(err){
		   if(err){
				throw err;
		   }else{
			   console.log(list0);
			}
	   });
	   
   });
};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
   Listing.findOne({name:'Phelps Laboratory'}, function(err, list1){
	   if(err)
		   throw err;
	   list1.address = "1275 Center Drive Gainesville, FL 32611";
	   list1.save(function(err){
		   if(err)
			   throw err;
		   console.log(list1);
	   });
   });
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
   Listing.find({}, function(err, list2){
	   if(err)
		   throw err;
	   console.log(list2);
   });
};

findLibraryWest();
removeCable(); 
updatePhelpsLab();
retrieveAllListings();
