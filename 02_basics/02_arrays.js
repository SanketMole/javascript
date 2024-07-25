const marvel_heros = ["thor","Ironman","spiderman"]
const dc = ["superman","flash","batman"]

// marvel_heros.push(dc)    //["thor","Ironman","spiderman",["superman","flash","batman"]]
//Here we don't get a merged array, infact we get array-
//-inside an array.

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
//This is not a good practice of element selection

const allHeros = marvel_heros.concat(dc)
console.log(allHeros);
//Unlike push, 'concat' merge two arrays 
//Also 'concat' doesn't alter original array a new variable is required

//Spread operator
const all_new_heros = [...marvel_heros, ...dc]
console.log(all_new_heros)
//Does similar job like concat
//Spread is prefered more because we can add more array unlike concat-
//-where we can only merge two arrays


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity) 
//it's suggested to assign a depth inside flat function but if not possible then simply write infinity.
console.log(real_another_array);    //[1,2,3....7,4,5]



//Conversion of DataType into Array
console.log(Array.isArray("Sanket"))    //False(it's a string)
console.log(Array.from("Sanket")) //Now it's an array
console.log(typeof Array)

//An 'Interesting' case
console.log(Array.from({name:"Sanket"}))    //Empty Array
//Because we have not mentioned exactly what to convert-
//-is it key or value which is to be converted

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))   //Returns a new array from set of elements 
//[100,200,300]