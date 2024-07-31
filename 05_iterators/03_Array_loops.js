// for of

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

// for (const iterator of object) {
    
// }

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"
for(const greet of greetings){
    // console.log(`Each char is ${greet}`);
}

const map1 = new Map();
map1.set('IN','India')
map1.set('AU','Australia')
map1.set('USA','United States of America')
// console.log(map1);

// for(const map of map1){
//     console.log(map);
// }

for (const [key,value] of map1) {
    // console.log(key,':-',value);
}

//When used objects

// const myObj = {
//     'game1': 'NFS',
//     'game2': 'Spiderman',
// }
// for (const [key,value] of myObj) {
//     // console.log(key, ":- ",value)       //Error: object not iterable 
// }       //There is different way to iterate objects


const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

//for array
const programming = ['py','js','cpp']
for(const key in programming){
    // console.log('key , ',',programming[key]');    //Runs
}

