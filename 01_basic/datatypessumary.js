// Primitive Datatypes
// 7 types -->Number,string,symbol,bigint,undefined,null,boolean

let bigNumber = 2143736491830280129n // put n at last for bigInt
console.log(typeof bigNumber);

const id = Symbol("123")
const anotherid = Symbol("123")
console.log(id===anotherid);  // fasle dono alag alaga hai

// Non Primitive Datatypes/Reference
// array,Object,functions

let array = ["apple","ball","cat"];

console.log(array);


let myObject = {
    name : "Aftab",
    age : 20,
    City : "Glb",
}

console.log(myObject);

let Myfunction = function(){
    console.log("This is a Function");
}
Myfunction();


// Primitive datatypes r stored in <Stack> 
// /Non-Primitive datatypes r stored in <Heap>

// 1.Stack
let myYoutubeName = "Aftab"
let anotherName = myYoutubeName
anotherName = "Apna college"
// yaha par myYoutubeName ki jo value thi wo change nhi kui ki memory bas iski copy ko anotherName main copy kare -----> Stack main aisa hotha hai

console.log(myYoutubeName);
console.log(anotherName);

 // 2.Heap

 let userOne = {
    email : "user@gmail.com",
    upi : "username@ybl"
}

let userTwo = userOne

console.log(userOne);
console.log(userTwo); // same value as userOne
// yaha value heap main ek hi bar store hothi,bas userOne->ussepoint kartha ,fir userTwo bhi same data ko point kartha,
//  note : agar data userTwoo se change karinge tho userOne main bhi change hotha

userTwo.email = "newemail@gmail.com"

console.log(userOne);
