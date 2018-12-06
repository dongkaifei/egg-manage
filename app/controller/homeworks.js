'use strict';

const Controller = require('egg').Controller;

// app/controller/homeworkInfo.js
class HomeworkController extends Controller {
    async info() {
        const ctx = this.ctx;
        const homeworkId = ctx.params.id;
        const homeworkInfo = await ctx.service.homeworks.find(homeworkId);
        if (homeworkInfo) {
            ctx.body = { errCode: 0, ...homeworkInfo };
        } else {
            ctx.body = { errCode: 100, data: "can't find id" };
        }

    }
}

module.exports = HomeworkController;