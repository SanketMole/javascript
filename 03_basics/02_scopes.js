// if(true) {
//     let a = 10
//     const b = 20
//     var c = 30
// }

// // console.log(a)  //Error (That's expected)
// // console.log(b)  //Error (That's expected)
// console.log(c)  //Unexpectedly we can use var outside scope

let a = 300
if(true){
    let a =10
    const b = 20
    console.log("INNER: ",a);
}
console.log(a)

