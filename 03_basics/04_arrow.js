// const user = {
//     username : "sanket",
//     price : 999,
//     welcomeMessage : function(){
//         console.log(`${this.username}, welcome to website`)
//         console.log(this)
//     }

// }

// user.welcomeMessage()
// user.username = 'Sam'
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = "sanket"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username = 'sanket'
//     console.log(this.username)
// }
// chai()

// const chai = () => {
//     let username = "Sanket"
//     console.log(this.username)

// }
// chai()

//Thus we can't use 'this' function in either of 3 type of functions

//Arrow function syntax
// () => {}

//Explicit return 
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4))

// //Implicit return 
// const addTwo = (num1, num2) =>  (num1 + num2)
// console.log(addTwo(3,4));
// //To return objects implicitly
// const add = (num1,num2) => ({username: "Sk"})


//Immediately Invoke Function Expression (IIFE)
//() ()
(function chai(){
    console.log(`DB Connected`)
}) ();

(function chai1(){
    console.log(`DB two Connected`)
})();

//While using arrow function
((name) => {
    console.log(`${name}`)
}) ("Sanket");