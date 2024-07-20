// Stack (Primitive)
// Heap (Non-Primitive)

let name1 = "SSM"
let name2 = name1
name2 = "Sanket"

console.log(name1)
console.log(name2)
//original name remains same

//Heap
let userOne = {
    email: "user@google.com",
    upi : "user@ybl"
}
let usertwo = userOne
usertwo.email = "ssm@google.com"

console.log(userOne.email)
console.log(usertwo.email)