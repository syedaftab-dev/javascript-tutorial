// Date 

let myDate = new Date();
// this is an object datatype
console.log(myDate);
console.log(myDate.toString());   
console.log(myDate.toLocaleString());  // date format changed
console.log(myDate.toLocaleDateString());  // gives only date modified of above one

//                      yr   month   date  hour   min
// let newDate = new Date(2023,  0   ,24    , 5    , 30)
let newDate = new Date("12-27-2024")
console.log(newDate.toLocaleString());

console.log(newDate.toLocaleString('default',{
    weekday:"long",
}));

// above lines give result as a day ie here friday

