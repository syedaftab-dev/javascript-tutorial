// Arrays

const myArray = [ 0, 1, 2, 3, 4, 5 ]   // object datatypes

// console.log(myArray[1]); // to access elements

//Array functions
myArray.push(6)  // add 6 to last position in array
// console.log(myArray);

myArray.pop()  // removes last element from arrray
// console.log(myArray);

console.log(myArray.includes(3));  // search the givenn number in array (true/false)

console.log(myArray.indexOf(3));  // gives at given index (index/-1)

myArray.unshift(9)// array ki starting mai 9 ko inser karega
myArray.shift()  // deletes 1st element of array

const newArray = myArray.slice(1, 3) // 1 se 2 tak index ko copy karke newArray main dale

console.log('original array : ',myArray);
console.log('sliced array : ',newArray);
console.log('original array : ',myArray);

const arrayTwo = myArray.splice(1, 3) // 1 se 3 tak index ko copy karke arrayTwo main dale aur ****imp**** aur wo spliced part ko original array se delete kardega 

console.log('spliced array : ',arrayTwo);
console.log('original array after splice : ',myArray);

