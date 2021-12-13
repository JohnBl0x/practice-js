

let languages = ["English", "Spanish", "Russian"]

let delay = () => {
    setTimeout(() => {
        languages.forEach(function (i) {
            console.log("I can speak " + i);
        })
    }, 1000)
}

console.log("start");
delay()
console.log("done");

let computerLanguages = ["HTML", "CSS", "JavaScript"]

let delay2 = (callback) => {
    let computer = []
    setTimeout(() => {
        computerLanguages.forEach(function (i) {
            computer += i + " / "
        })
        callback(computer)
    }, 500)
}


console.log(1);

delay2 (function (newLang){
    console.log("I know", newLang);
    console.log("Computer languages done");
})

console.log(2);







