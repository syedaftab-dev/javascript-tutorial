/*let score = "33abc"
console.log(typeof score);
console.log(typeof(score));
let valueInNumber = Number(score);
console.log(typeof valueInNumber);  //number but we can see 33abc is not a number
// score = null  -> this will be converted to 0
// score = undefined -> we get NaN
// score = true/false  -->1/0
// score = string  -- >NaN(not convertable(its type is number))
console.log(valueInNumber) // NaN

*/
let isloggedIn = "Aftab"
// isLoggedIn = 1 -- >true
// isLoggedIn = 0 -->false
// isloggedIn = "" --->false
// isloggedIn = "aftab" --->true
let booleanIsLoggedIn = Boolean(isloggedIn)
console.log(booleanIsLoggedIn);

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber)