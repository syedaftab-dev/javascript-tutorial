// console.log(2>=1)
// console.log(2<3)
// console.log(2!=1);
// console.log(2==2);

console.log("2" > 1);  // js converts "2"--> 2 and we get result
console.log(1 < "2");

console.log(null > 0);  // false
console.log(null == 0);  // false
console.log(null>=0);  // true
console.log(undefined == 0);  //false  same case as null

// explaination : equality (==) checking and >,<,<=,>= works differntly.
// comparisions convert null to a number ,treating as 0.thats why we get true in 3rd one, false in 1st 

//  ===    -->  strict check,also check datatypes while checking
console.log(2 === 3);  // false as datatypes are different

// note : dont use unncessray comparision as we have seen above it is just for knowledge or questions prefer not to use them not a good practice for developers



