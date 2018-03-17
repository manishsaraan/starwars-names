import uniqueRandomArray from 'unique-random-array';
import starWarsName from './starwars-names.json';
const getRandomItem = uniqueRandomArray(starWarsName);

function random(number){
  if(number === undefined){
    return getRandomItem();
  }
  else{
    var randomItems = [];
    for(var i = 0; i< number; i++){
    	randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}
module.exports = {
	all : starWarsName,
	random : random
};