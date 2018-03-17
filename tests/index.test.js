var starwars = require('../src/index.js');
var expect = require('chai').expect;

describe('starwars-names', function(){
	describe('all', function(){
		it('Should be an array of strings', function(){
			expect(starwars.all).to.satisfy(isArrayOfStrings);
			function isArrayOfStrings(array){
				return array.every(function(item){
					return typeof item === 'string';
				});
			}
		});

		it('Should include `Luke Skywalker`', function(){
			expect(starwars.all).to.include('Luke Skywalker');
		});

	describe('random', function(){
		it('Should return an random', function(){
			var randomItem = starwars.random();
			expect(starwars.all).to.include(randomItem);
		});

		it('Should return an array of random items if passed a number', function(){
           var randomItems = starwars.random(3);
           expect(randomItems).to.have.length(3);
           randomItems.forEach(function(item){
             expect(starwars.all).to.include(item);
           });
		});
	});
	});
});