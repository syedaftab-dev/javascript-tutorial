const accountId = 144553 // const ->a value can't be changed
let accountEmail = "syedaftab@gmail.com"  // can be changed
var accountPassword= "12345"  // can be changed
accountCity = "Gulbarga"
let accountState;


// accountId = 2  not allowed->arises error
accountEmail = "new@gamil.com"
accountPassword = "6785"
accountCity = "kurnool"
console.log(accountId);  // prints


/*
prefer not u use var 
bcoz of issue in block scope and functional scope, use const and let,and dont use without as we did for accountCity (not preferable)
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])