angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
		$scope.listings.push({
			code: $scope.newListing.newCode,
			name: $scope.newListing.newName,
			coordinates:{
				latitude: $scope.newListing.newLatitude,
				longitude: $scope.newListing.newLongitude
				},
			address: $scope.newListing.newAddress			
		});
		$scope.newListing.newCode ="";
		$scope.newListing.newName ="";
		$scope.newListing.newLatitude="";
		$scope.newListing.newLongitude="";
		$scope.newListing.newAddress="";
	};
    $scope.deleteListing = function(index) {
		var del = $scope.listings.indexOf(index);
		$scope.listings.splice(del,1);
		
	};
    $scope.showDetails = function(index) {
		var thisListing = $scope.listings.indexOf(index);
		/* $scope.detailedInfo = [code: thisListing.code,
								name: thisListing.name,
								latitude: thisListing.latitude,
								longitude: thisListing.longitude,
								address: thisListing.address
								]; */
		$scope.detailedInfo = $scope.listings[thisListing];
	};
  }
]);