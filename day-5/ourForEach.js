
// let arr2 = ["dog", "cat", "mouse"]

// let newArr = arr2.map(function (item) {
//     if (item === "dog"){
//         return "rabbit"
//     }
//     return item
// })

// console.log(newArr);

// // function myFunction (arr, myCb){
// //     for (let i of arr) {
// //         myCb(i)
// //     }
// // }

// // myFunction(arr2, function (item) {
// //     console.log("Animal: " + item);
// // })


let food = ["burger", "chips", "chocolate"]

function doMap (arr, myCb) {
    let newArr = []
    for (let i of arr){
        let el = myCb(i) 
        if (el === true) {
            newArr.push(i)
        }
    }
    return newArr  
}

let myVar = doMap(food, function (item) {
    if (item === "burger"){
        return false
    }
    return true
})

console.log(myVar);

