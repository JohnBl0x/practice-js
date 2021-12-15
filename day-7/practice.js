
// let students = [
//     {name: "John", id: 12345, department: "Languages"},
//     {name: "Dave", id: 67890, department: "History"},
//     {name: "Lucy", id: 22222, department: "Science"},  
// ]

// let remove = students.filter(function (elem) {
//     if (elem.id === 12345) {
//         return false
//     } else {
//         return true
//     }
// })

// console.log(remove);

// class of students, instances of the class, push to array

// class Student {
//     constructor(name, id, department){
//         this.name = name;
//         this.id = id;
//         this.department = department
//     }
// }

// let john = new Student("John", 123, "History")
// let bob = new Student("Bob", 2, "Science" )
// let lucy = new Student("Lucy", 34, "Art")

// let myArr = []

// myArr.push(john, bob, lucy)

// console.log(myArr);

let storage = []

let input1 = {name: "", id: 1, age: 30}
let input2 = {name: "Corrina", id: null, age: undefined}
let input3 = {name: "Theo", id: 3, age: -1}

storage.push(input1, input2, input3)

function validate (x) {

    let isValidName = false
    let isValidId = false
    let isValidAge = false

    if (x.name === "" || x.name === null || x.name === -1 || x.name === undefined) {
        isValidName = false
    } else {
        isValidName = true
    }

    if (x.id === "" || x.id === null || x.id === -1 || x.id === undefined) {
        isValidId = false
    } else {
        isValidId = true
    }

    if (x.age === "" || x.age === null || x.age === -1 || x.age === undefined) {
        isValidAge = false
    } else {
        isValidAge = true
    }

    return {isValidName, isValidId, isValidAge}

}

for (let i = 1; i <= 3; i++){
    let result = {}
    if (i === 1) {
        result = validate(input1)
    } else if (i === 2) {
        result = validate(input2)
    } else {
        result = validate(input3)
    }
    console.log(result);
}












