const marvel_heroes = ["Thor", "Ironman", "spiderman"]
const dc_heroes = ["superman", "batman", "flash"]

//marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes); 
// console.log(marvel_heroes[3][1]);

// const allHero = marvel_heroes.concat(dc_heroes)
// console.log(allHero);


// spread
const allNewHeroes = [...marvel_heroes, ...dc_heroes] // we can as many we want
// this will convert all elements to single and make a new array 
console.log(allNewHeroes);

const newArray = [1,2,3,[4,5,6],7 ,8,[4, [ 5,6,7]]]

console.log(newArray.flat(Infinity));  // we can give depth here we have gave infinity(all)
//flat->it will split all arrays and make a new array single level array
// newArray = [ 1,2,3,4,5,6,7,8,4,5,6,7 ]

// we can ask questions to array

console.log(Array.isArray("Aftab")); // check wether given argument is an array gives true/false

console.log(Array.from("SyedAftab")); // converts given string to array with each char as array element

console.log(Array.from({name : "aftab"})); 
// ****imp*****will give [] -->cant convert directly we need specify whether we need to convert key or values to array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); // will make an array using diff types variables
