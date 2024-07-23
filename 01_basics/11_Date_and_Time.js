let myDate = new Date()
console.log(myDate);
console.log(myDate.toString())   //Tue Jul 23 2024 13:24:06 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toISOString())   //2024-07-23T13:25:50.387Z
// console.log(myDate.toJSON())    //2024-07-23T13:26:48.107Z
// console.log(myDate.toLocaleDateString())    //7/23/20274
// console.log(myDate.toLocaleDateString('en-IN')) //23/7/2024
// console.log(myDate.toLocaleTimeString())    //1:29:44 PM
// console.log(myDate.toLocaleTimeString('en-IN')) //1:30:28 pm

console.log(typeof myDate); //object

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date("01-14-2023")
let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toDateString())   //Mon Jan 23 2023

let myCreatedDate1 = new Date(2023, 0, 23, 15,3,45)
// console.log(myCreatedDate1.toLocaleString())    //1/23/2023, 3:03:45 PM

let myTimeStamp = Date.now()
// console.log(myTimeStamp)    //Gives Miliseconds count from 1st Jan 1970
// console.log(myCreatedDate.getTime())    //Get Created date's count from 1st Jan 1970

//To convert Miliseconds into Seconds
console.log(Math.floor(Date.now()/1000));

// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDay())
// console.log(newDate.getMonth())\

newDate.toLocalString('default',{
    weekday:"long",
})
