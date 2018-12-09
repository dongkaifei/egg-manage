'use strict';

const Controller = require('egg').Controller;

class userController extends Controller {
    async insertUser() {
        const ctx = this.ctx;
        const username = ctx.request.body.username;
        const password = ctx.request.body.password;
        const result = await ctx.service.users.createUser({ username, password });
        ctx.body = { errCode: 0, data: result };
    }
}

module.exports = userController;