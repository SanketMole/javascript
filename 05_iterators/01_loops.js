//for 

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for(let i =0; i<10; i++){
//     const element = i;
//     if(element == 5){
//         console.log("5 is best")
//     }
//     console.log(element);
// }

// for(let i=0; i<=10; i++){
//     console.log(`Outer loop value: ${i}`)
//     for(let j=0; j<=10; j++){
//         console.log(`Inner loop ${j} and inner loop ${i}`)
//     }
// }
// i loop  -> 1
// j loop  -> 10
// i loop  -> 2
// j loop  -> 10
// .....
// ......

let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length)
for(let i=0; i<myArray.length; i++){
    const element = myArray[i]
    // console.log(element)
}

// break and continue

for (let index = 1; index <=20; index++){
    if (index == 5){
        // console.log(`Detected 5`);
        break
    }
    // console.log(`Value of i is ${index}`);
 
}
for (let index = 1; index <=20; index++){
    if (index == 5){
        // console.log(`Detected 5`);
        continue
    }
    // console.log(`Value of i is ${index}`);

}

const a = 3
if(a==3)
    console.log(a);

for(let i=0; i<a; i++)
    console.log(i)
