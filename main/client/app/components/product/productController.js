app.controller('ProductController', ['$scope', 'contactFormService', 'storeService', '$routeParams', function($scope, contactFormService, storeService, $routeParams) {
	$scope.product = storeService.getProducts()[$routeParams.id];
	
	$scope.contact = contactFormService.getContactForm();
	$scope.send = contactFormService.send($scope.contact);
}]);