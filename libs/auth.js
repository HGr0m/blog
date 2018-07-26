const users = require('./users')

const check = function(login, pwd) {
    let foundUser;
    for(let i = 0; i < users.length; i++) {
        let u = users[i];
        if(u.login === login && u.password === pwd) {
            foundUser = u.login;
            break;
        } 
    }
    const response = {};
    if(foundUser !== undefined){
        response.status = `hello, ${foundUser}`;
    } else {
        response.status = 'invalid login or password';
    }
    return response;
}
module.exports.users = users;
module.exports.check = check;