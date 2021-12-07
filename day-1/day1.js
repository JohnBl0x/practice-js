
const students = [
    {name: "Quincy", grade: 96},
    {name: "Jason", grade: 84},
    {name: "Alexis", grade: 100},
    {name: "Sam", grade: 65},
    {name: "Katie", grade: 90}
]

console.log("------------Q1------------");

students.forEach(function (item) {
    console.log(item.name + ": " + item.grade);
})

console.log("------------Q2------------");

let q2 = students.map(function (item) {
    if (item.name === "Jason") {
        item.grade += 15
    }
    return item
})

console.log(q2);

console.log("------------Q3------------");

let q3 = students.filter(function (item) {
    if (item.name === "Sam") {
        return false
    } else {
        return true
    }
})

console.log(q3);


