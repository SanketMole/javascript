const promiseOne = new Promise(function(resolve, reject) {
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Asyn task is completed');
        resolve()
    }, 1000)
}) 

promiseOne.then(function(){
    console.log("Promise consumed")
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 3")
        resolve({username: "SSM", email: "ssm@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        // let error = false 
        if(!error){
            resolve({username: "Sanket", password: "123"})
        } else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    // return user.username
// })
}).then((username) => {
    console.log(username)
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "javascript", password: "123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    const response = await promiseFive
    console.log(response)
}

// //Handling error gracefully

async function consumePromiseFive(){
    try {
        const response = await promiseFive 
        console.log(response); 
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

//fetch using async wait and try-catch

async function getAllUsers() {
    try {
        const response = await fetch('https://api.github.com/users/sanketmole')
        const data = await response.json()               //Bcz, response takes time, we have to use await
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

// fetch using .then and .catch

// fetch('https://api.github.com/users/sanketmole')
// .then((data) => {
//     return response.json()
// }).then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.log(error)
// })

getAllUsers()

//Remeber fetch() runs ahead of promise
// You get fetch() results before promise
// fetch() is a promise, but it runs ahead of promise
