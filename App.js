` use strict `

// number 1

const first = ['Behind', 'every', 'great', 'man'];
const second = ['is', 'a', 'woman'];
const third = ['rolling', 'her', 'eyes'];

// expected : Behind every great man is a woman rolling her eyes;

let result = first.concat(second, third).join(" ");
console.log("result: ",result);


// number 2
function checkNumber(number){
	if(number%2){ // Ganjil
    	console.log("Imperio"); 
    }else{ //Genap
    	console.log("Crucio");
    }
}
checkNumber(1);


// number 4

/** 
    given string : ilmiah
    output : 6
    given string: lari pagi
    output: 9
**/

function countWord(word){
	let result = [...word].reduce(a => a+1, 0);
  return result;
}
const rest = countWord("lari pagi");
console.log(rest);

// number 5 
const list_fruit_andi = ["grape","apple","orange","guava"];
const list_fruit_andin = ["watermelon","apple","orange","strawberry"];

// ["apple","orange","guava","grape","watermelon","strawberry"]

list_fruit_andi.push(list_fruit_andi.shift());
let restConcat = list_fruit_andi.concat(list_fruit_andin);
let removeDuplicate = [...new Set(restConcat)];

console.log(removeDuplicate);


// number 6

// expected
// {"beef burger" : 10, "steakhouse" : 12, "chicken strip" : 15, "mushroom swiss" : 20, "whopper" : 30}

const prices = [15, 10, 12, 20, 30];
const menus = ["chicken strip", "beef burger", "steakhouse", "mushroom swiss", "whopper"];

// moving value on array
let valueIndex1 = menus[0];
menus.splice(3, 0, valueIndex1);
menus.shift();

// sorting
const pricesSort = prices.sort();

// merge array to object

var result =  pricesSort.reduce(function(result, field, index) {
  result[menus[index]] = field;
  return result;
}, {})

console.log(result);