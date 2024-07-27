function one() {
    const username = "Sanket"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);   //error
    two()
}
// one()


//Guess the Error from below code

if(true) {
    const username = "SSM"
    if(username == "SSM"){
        const web = "yt"
        // console.log(username + web)

    }
    // console.log(web);   //Error
}
// console.log(uername)    //Error


//********************************************* */

function addone(num){
    return num + 1
}
addone(5)   //Here value is returned not printed
//Thus nothing on terminal

const addTwo = function(num){
    return num + 2
}
addTwo(5)
