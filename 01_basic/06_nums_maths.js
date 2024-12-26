let score = 400
// console.log(score); // type Number

let balance = new Number(100)  // Object
// console.log(balance);

// console.log(balance.toString().length);  // Number to String
// console.log(balance.toFixed(2));  // decimal ke baad 2 number print honge

const otherNumber = 1123.8966

// console.log(otherNumber.toPrecision(3)); 
// agar precision ke andar jo number hoga uthne hi numberr of digits decimal se pahele ho tho wo point ke just baad wale no se round off karega point se pahele ko here---> 24

// note : try diff no and see in precison and otherNumber 

// agar number 3 diya ho ya no of digits point se pahele se zyada hua tho decimal ke baad wale number main hi round off hogi ---->23.9 


const million = 1000000
// console.log(million.toLocaleString());  // 1,000,000  usa style main number bich comma dalega
//  for indian syle of repressentation
// console.log(million.toLocaleString('en-IN'));  // 10,00,000

// ***************     MATHS -->library already included in js*******************

console.log(Math);

console.log(Math.abs(-4));  // |-4| ->absolute or modulus jaisa

console.log('roundoffed to :', Math.round(4.3));  // round off karna
console.log('ceil : ',Math.ceil(4.2)); // ek point bhi value zyada hui tho next integer lega 
console.log('floor value : ',Math.floor(9.9));  // ye bus  integer  lega
console.log('min value : ',Math.min(4,5,6,2,1));
console.log('max value : ',Math.max(4,5,6,2,1));
console.log(Math.random());  // generate numbers b/w 0 t0 1

console.log((Math.random()*10) + 1);  // 1 point shift kiya aur 1 add kiya jisse ye 1 se 10 tak values generate karega aur floor se integer ayega
console.log(Math.floor((Math.random()*10) + 1));

const min = 10
const max = 20
// formula to generate number b/w min and max range
console.log(Math.floor( Math.random()*( max - min + 1 ) ) + min );





