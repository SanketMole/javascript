const user = {
    username: "Sanket",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from Database.");
        // console.log(`Username ${this.username}`);               //this is used to convey current context
        console.log(this);          // We got object details bcz of local context 
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);              //Unlike before now its a global context, thus, {} empty object and window object in browser





// Constructor function 

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }
}

// const userOne = User("Sanket", 12, true)
// console.log(userOne);
// we got arguments of userOne as we expected

// But if we create another object with different name 
// but use same fucntion 
// const userTwo = User("SSM", 11, false)
// console.log(userOne);       //Note: we are still printing 'userOne'
// Ideally we should get same results however, we don't
// Op - {"SSM", 11, false}

// Thus, contructor function plays a major role
// Constructor funciton always gives a new instance or new copy 

// Code Modification 
const userOne = new User("Sanket", 8, true)  // Just Add "new" for new instance
const userTwo = new User("Sam", 4, false)
console.log(userOne);
console.log(userTwo);
// About 'new' keyword: Whenever we write new keyword an empty object is created
// Then function content transfers into object 
// Object detail is called by 'this' which printed as output 



