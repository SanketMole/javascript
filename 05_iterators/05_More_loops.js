const coding = ['js','ruby','java','cpp','python']

//ForEach(callbackFn)
//ForEach(callbackFn, this)

// coding.forEach( function (i) {

// } )

// coding.forEach( function (val){
//     // console.log(val);
// })

//Using Arrow function

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

coding.forEach((item,index,arr) => {
    // console.log(index, item, arr);
})

//Objects inside array

const myCoding = [
    {
        languageName: 'javascript',
        languageFileName: 'js'
    },
    {
        languageName: 'java',
        languageFileName: 'java'
    },
    {
        languageName: 'python',
        languageFileName: 'py'
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )


