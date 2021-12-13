
const getUsers = (callback) => {
    let users_ = []
    console.log(callback);

    callback()

    setTimeout(() => {
        console.log("Getting 10 users_");
        users_=[1,2,3,4,5,6,7,8,9,10]
        callback(users_)

    },500)

    return users_

}

console.log("start");
const allUser = getUsers(function (newparam) {
    console.log("some code", newparam);

})
console.log(allUser);





    
