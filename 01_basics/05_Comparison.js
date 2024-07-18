console.log(2>1)
console.log(2 != 1)

console.log("2" > 1);   //true  //JS converts String into number 
console.log("02" > 1);  //true  //Don't get expected o/p frequently
// Better to compare similar DataTypes

console.log(null > 0);  //false
console.log(null == 0); //false
console.log(null >= 0); //true
//Reason: Equality check '==' and comparison '><>=<=' works differently
//Comparison converts null into a number, treating it as 0
//Whereas equality check considers as 'null'

console.log(undefined == 0);    //false
console.log(undefined >= 0);    //false
//Will always give false in case of 'undefined'

console.log("2" == 2);  //true
console.log("2" === 2); //false
//'===' is called strict check 
// Will not just compare two numbers but will also check their dataTypes

