
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
    const stu  = new Student()
    const hu = new Human()

    if (stu instanceof Student && hu instanceof Student) {
        console.log("both are from Student");
    } else {
        throw new Error ("they are not from Student")
    }

    if (stu instanceof Human && hu instanceof Human) {
        console.log("both are from Human");
    } else {
        throw new Error ("they are not from Human")
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



