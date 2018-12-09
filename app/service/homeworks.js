const Service = require('egg').Service;

// app/service/homeworks.js
class HomeworkService extends Service {
    async find(homeworkId) {
        const homeworkInfo = await this.app.mysql.get('homework', { id: homeworkId });
        return { data: homeworkInfo };
    }
}

module.exports = HomeworkService;