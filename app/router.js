'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  
  router.get('/', controller.home.index);
  router.get('/homeworks/:id', controller.homeworks.info);
  router.post('/users/addUser', controller.users.insertUser);
};
