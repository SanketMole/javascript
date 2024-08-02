const myArr = [1,2,3]

// const myTotal = myArr.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)
// console.log(myTotal);

// const total = myArr.reduce( (acc, curr) => acc+curr, 0 )

// console.log(total);

const shoppingCart = [
    {
        itemName: "js course",
        price: 299,
    }, 
    {
        itemName: 'py course',
        price: 99,
    },
    {
        itemName: 'mobile course',
        price: 2999,
    },
    {
        itemName: 'data science course',
        price: 12999,
    },
]

const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price,0 )

console.log(priceToPay);


