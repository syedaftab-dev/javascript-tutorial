const firstname = 'syed'
const secondname = 'Aftab'
let age = 21
console.log(`Hello My name is ${firstname} ${secondname} and my age is ${age}`);
// another way of declaring string

const gameName = new String("Pubg Mobile")
console.log(gameName);
//  here string is a object(key : value) | eg: 0 : "P", 1 : "u" | not a character array
// for more detail --> inspect->console->make a string and print it
console.log(gameName[0]);
// String Functions
console.log(gameName.length);
console.log(gameName.toUpperCase());   // here again its just a copy,original value is not changed
console.log(gameName.charAt(2));  // gives char at index
console.log(gameName.indexOf('M'));

const newString = gameName.substring(0,4);
console.log(newString);

// another method of substring

const anotherString = gameName.slice(-11, 8)  // -11+8 = 3 (last 3 char print nahi honge)
console.log(anotherString);

const space = "  Aftab   "
console.log(space.trim()); // aagge piche se space ko nikal dega
// we also have trimstart and trimend   -->start(removes starting spaces) and end similary form end
const myName = "SyedcodeAftab"
console.log(myName.replace("code"," Md ")); // replace anything u want with

console.log(myName.includes('code')); // find any thing-->result true/false

const convertArray = "Syed_Md_Aftab_IIITK"
console.log(convertArray.split("_")); // array baneyga _ is wale ko hisab se thod ke
// ['Syed' , 'Md' , 'Aftab' , 'IIITK' ]


