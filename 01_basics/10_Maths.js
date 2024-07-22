console.log(Math)

// console.log(Math.abs(-4));      //4
// console.log(Math.round(4.6))    //5    
// console.log(Math.round(4.5))    //5
// console.log(Math.ceil(4.2))     //5
// console.log(Math.floor(4.8))    //4
// console.log(Math.min(4,5,9,3,10,8)); //3
// console.log(Math.max(8,2,9,5,6,7)); //9

console.log(Math.random());     //Between (0-1)
console.log(Math.random() *10);  //(0-10)
console.log((Math.random()*10) + 1);    //(1-10)
console.log(Math.floor(Math.random()*10) + 1);  //Neglecting Decimal 

const min = 10
const max = 20
//To get Random Values between (min and max)
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

