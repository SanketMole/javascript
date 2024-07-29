//if 


if( 3 !== 3){
    console.log("Will not print!")
}


//if-else

if(3 != 3){
    console.log("Not")
}else{
    console.log("Yes")
}


// const score = 200
// if(score > 100){
//     const power = 'fly'
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`)     //Error


// const balance = 1000
// // if(balance > 500) console.log("test");

// if(balance < 500){
//     console.log("less than")
// }else if(balance < 750){
//     console.log('less than 750')
// }else{
//     console.log("less than 1200")
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if(userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy course")
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in")
}