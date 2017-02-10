(function () {
	'use strict';

	// ng-app on html is an angular module in JS



	var apple = angular.module('apple', []); // creates a module
	// angular.module('apple'); // gets a reference to an existing module

	apple.controller('MacController', function (
		$scope,
		productsService
	) {
		$scope.title = 'The Awesome Apple App';

		// $scope.featureProduct = {
		// 	name: 'Macbook Pro',
		// 	price: 3000,
		// 	featured: true
		// };

		$scope.makeFeatured = function (name, price) {
			$scope.featureProduct = {
				name: name,
				price: price
			};
		};

//when the checkbox is clicked it will run makeFeatured
		$scope.featureIt = function (product) {
			product.featured = true;
			console.log(product);
			$scope.makeFeatured(product.name, product.price);
		};



		$scope.products = productsService.getProducts();

		$scope.doSubmit = function () {
			productsService.addProduct(
				$scope.myInputName, $scope.myInputPrice
			);
		};
	});

	apple.service('productsService', function () {

		var products = [
			{
				name: 'Macbook Pro 15 inch',
				price: 3000,
				featured: false
			},
			{
				name: 'Macbook Pro 13 inch',
				price: 1699.99,
				featured: false
			},
			{
				name: 'iPad Pro',
				price: 999.99,
				featured: false
			},
			{
				name: 'iPad',
				price: 799.99,
				featured: false
			},
			{
				name: 'iPhone',
				price: 679.99,
				featured: false
			}
		];

		this.getProducts = function () {
			// check authentication
			return products;
		};

		this.addProduct = function (name, price) {
			console.log('this defective service function fired!');
			products.push({
				name: name,
				price: price
			});
		};
	});

	var ms = angular.module('microsoft', []);
})();


// there is an angular object
// we register a module with angular


/*

*/
// the angular object has functions lime module
//
