const Service = require('egg').Service;

class userService extends Service {
    async createUser({ username, password, role = '', phone = '', email = '', adress = '' }) {
        const nowTime = new Date();
        const result = await this.app.mysql.insert('users', {
            username,
            password,
            role,
            phone,
            email,
            adress,
            ctime: nowTime,
            utime: nowTime
        });
        console.log(result);
    }
}

module.exports = userService;