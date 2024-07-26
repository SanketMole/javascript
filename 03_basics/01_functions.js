function fname() {
    console.log("H");
    console.log("I");
    console.log("N");
    console.log("D");
    console.log("I");
}
// fname()

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }
// // addTwoNumber(3,4)
// function addTwoNumber(number1, number2){
//     let result = number1 + number2
//     return result
// }

// const result = addTwoNumber(3,5) //This will run but console.log will not
// console.log(result)     //Undefined

// function loginUserMessage(username){
//     // if(username === undefined){
//     //     console.log("Please enter a username!");
//     //     return 
//     // }
//     if(!username){
//         console.log("Please enter a username!")
//         return 
//     }
//     return `${username} has just logged in!`
// }
// console.log(loginUserMessage());


function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500))

//object 

// const user = {
//     username : "Sanket",
//     price : 199
// }
// function handleObject(anyObject){
//     console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
// }
// handleObject(user)

//Array 
const newArray = [40,56,85,90]
function returnSecondValue(any){
    return any[1]
}
console.log(returnSecondValue(newArray));