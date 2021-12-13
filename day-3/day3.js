
function fiveSec () {
    setTimeout(() => {
        console.log("Five Seconds");
    }, 5000);
}

function threeSec () {
    setTimeout(() => {
        console.log("Three Seconds");
    }, 3000);
}

function oneSec () {
    setTimeout(() => {
        console.log("One Second");
    }, 1000);
}

fiveSec()
threeSec()
oneSec()