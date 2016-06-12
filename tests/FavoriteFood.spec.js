describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($filter) {
        favoriteFood = $filter('favoriteFood');
    }));

	it('should return favorite foods from list', function () {
		var mockFoodList = [{
			name: 'Desserts',
			favoriteFood: 'Apples'
		}, {
			name: 'Fruits',
			favoriteFood: 'Apples'
		}, {
			name: 'Vegetables',
			favoriteFood: 'Carrots'
		}];

		var results = favoriteFood(mockFoodList, 'Apples');

			expect(results.length).toBe(2);
			expect(results[0].name).toBe('Desserts');
    });

});
