let score = "33"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)   //Datatype conversion
console.log(typeof valueInNumber);
console.log(valueInNumber);

// Even if score = "33abc" still you will get
// typeof valueInNumber as 'number' but after print you 
// will get 'NaN' , thus take a note of it

// for score = null 
// valueInNumber is 0
// Undefined => NaN
// true => 1; false=> 0
// "33" => 33

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1=>true ; 0=>false
// "" => false
// "India" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)
