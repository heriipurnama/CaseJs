` use strict `

// number 1

const first = ['Behind', 'every', 'great', 'man'];
const second = ['is', 'a', 'woman'];
const third = ['rolling', 'her', 'eyes'];

// expected : Behind every great man is a woman rolling her eyes;

let result = first.concat(second, third).join(" ");
console.log("result: ",result);

// =======================================================================================================================
// number 2

// genap dan berada diantara angka 5 hingga 10 maka cetaklah "Imperio".
function checkNumber(number){
	if(number%2){ // Ganjil --> imperio
     	 console.log("Imperio"); 
    }else{ //Genap
      if(number >=5 && number <=10 ){ // genap diantara 5 dan 10 Imperio
         console.log("Imperio"); 
      } else {
        console.log("Crucio"); // genap
      }
    }
}

checkNumber(3);

// =======================================================================================================================
// number 3

// expected 
/**
 * 
1. Ganjil
2. Genap
3. Ganjil
4. Genap
5. Ganjil Kelipatan Lima
6. Genap
7. Ganjil
8. Genap
9. Ganjil
10. Genap Kelipatan Lima
...
200. Kelipatan Seratus
 */
  
function checkNumber(){
    for(let i = 1; i <= 200; i++) {
      if (i%2){
        if (i%5 == 0){ 
          console.log(i,": Ganjil kelipatan 5");
        }else{
            console.log(i,": Ganjil");
       }
      }else {
        if (i%100 == 0){
        	console.log(i,": Genap kelipatan 100");
        } else {
           if (i%5 == 0){ 
            console.log(i,": Genap kelipatan 5");
           }else{
             console.log(i,": Genap");
           }
        }
       
     }
  }
}
  checkNumber();

// =======================================================================================================================
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

// =======================================================================================================================
// number 5 
const list_fruit_andi = ["grape","apple","orange","guava"];
const list_fruit_andin = ["watermelon","apple","orange","strawberry"];

// ["apple","orange","guava","grape","watermelon","strawberry"]

list_fruit_andi.push(list_fruit_andi.shift());
let restConcat = list_fruit_andi.concat(list_fruit_andin);
let removeDuplicate = [...new Set(restConcat)];

console.log(removeDuplicate);

// =======================================================================================================================
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

// =======================================================================================================================
// number 9 
// Masking
// expected *************ddd

const number = '23dn3ir30fd2eddd';
let result = number.replace(/.(?=.{3,}$)/g, '*');
console.log(result);


// =======================================================================================================================
// number 10
function fearNotLetter(str) {
  var i, j = 0, m = 122;
  if (str) {
      i = str.charCodeAt(0);
      while (i <= m && j < str.length) {
          if (String.fromCharCode(i) !== str.charAt(j)) {
              return String.fromCharCode(i);
          }
          i++; j++;
      }
  }
  return undefined;
}

// expected
// const list_letters_first = ["c","d","e","g","h"]
// const list_letters_second = ["X","Z"]
// list_letters_first = f
// list_letters_second = Y
console.log("list_letters_first:", fearNotLetter('cdegh'));
console.log("list_letters_second:", fearNotLetter('XZ'));

// =======================================================================================================================
// number 11 ( Sorting Odd Numbers )

// expected 
// [1, 4, 2, 4, 3, 5, 9, 0]

var array = [9,4,2,4,1,5,3,0]
    indices = [];

array
    .filter((v, i) => v % 2 && indices.push(i))
    .sort((a, b) => a - b)
    .forEach((v, i) => array[indices[i]] = v);

console.log(array);

// number 12
// triangle

// expected
/**
 * 1000000
   200000
   30000
   4000
   500
   60
   7
 * 
 */

  function generatePyramid(n) {
    let getPiramid = n.split('')
    for(let i=0; i < getPiramid.length; i++) {
        console.log(String(i+1).padEnd((getPiramid.length - i), '0'))
    }
}

generatePyramid('1234567');

// =======================================================================================================================
// number 15
const randomNumber = (number) => {
	let count = 0;
     let tebak
  do {
  	count +=1;
    tebak = Math.floor(Math.random() * 100);
  }while (number !== tebak)
    console.log("hasil:", count);
}

randomNumber(1)
