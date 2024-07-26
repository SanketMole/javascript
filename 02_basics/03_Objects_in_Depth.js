// Literal and constructor 

//singleton (when we make object by construtor)

//Object literals

const mySyb = Symbol("key1")

const JsUser = {
    name : "SSM",
    location : "Pune",
    [mySyb] : "mykey1",
    "full name" : "Sanket Mole",
    email : "ssm@google.com",
    isLoggedIn : false,
    LastLoginDays : ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser[email])  //Error
// console.log(JsUser['email'])       //Note
// console.log(JsUser["full name"]);

// console.log(JsUser[mySyb])      //Note

//Value update
JsUser.email = "sanket@google.com"
JsUser["full name"] = 'SSM Mole'

//Freeze Object
// Object.freeze(JsUser)
//After freeze nothing will get updated
JsUser.email = 'mole@google.com'
// console.log(JsUser)

//Functions in Object
JsUser.greeting = function(){
    console.log("Hello From JsUser")
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`)
}

console.log(JsUser.greeting)    //[Function (anonymous)]
console.log(JsUser.greeting())  //"Hello From JsUser"

console.log(JsUser.greetingTwo())

