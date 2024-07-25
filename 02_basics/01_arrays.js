// array

const myArr = [0, 1, 2, 3, 4, 5]

const myHeros = ['jk','pk']

const myArr2 = new Array(1,2,3,4,5,6,7,8,9,0)

// console.log(myArr, myHeros, myArr2)


//Array methods

// myArr.push(6,7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()


// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//Slics and splice
console.log("A", myArr);
const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr)

// Splice alters original Array unlike slice
const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C",myArr);