
class Student {
    constructor(studentID, name, department, email, password){
        this.studentID = studentID;
        this.name = name;
        this.department = department;
        this.email = email;
        this.password = password;
    }
}

class Human {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

function compareInstances () {
    if (Student instanceof Human) {
        console.log("Yes, they are the same");
    } else {
        throw new Error ("No, they are not the same")
    }
}

try {
    compareInstances()
} catch (error) {
    console.log(error.message);
    console.log("(This is from the catch)");
} finally {
    console.log("I always run");
}



