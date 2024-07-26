// const tinderUser = new Object()  //Singleton object 
const tinderUser = {}       //Non-Singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

//Objects inside objects
const regularUser = {
    email : "some@gamil.com",
    fullname: {
        userfullname:{              //Nested objects
            firstname : "Sanket",
            lastname : "mole"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}

//Syntax: Object.assign(target, source)
//That's why we should use empty object as target
//If not then first source will be target by default

// const obj3 = Object.assign({},obj1,obj2)    //Will use rarely

//Spread Operator
const obj3 = {...obj1, ...obj2}
// console.log(obj3)


//When you recieve values from DATABASE
const users = [
    {
        id: 1,
        email: 'ssm@google.com'
    },
    {
        id: 1,
        email: 'ssm@google.com'
    },
    {
        id: 1,
        email: 'ssm@google.com'
    },
]

// console.log(users[1].email)
// console.log(tinderUser);

console.log(Object.keys(tinderUser));