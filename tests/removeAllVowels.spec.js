describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($filter) {
        removeAllVowels = $filter('removeAllVowels');
    }));


	it('should remove all vowels from the string', function () {
	        expect(removeAllVowels('test')).toEqual('tst');
	    });
});
