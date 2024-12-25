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

