const { Router } = require('express');

const UserController = require('./controllers/UserController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.post('/users', UserController.create);
routes.get('/users', UserController.list);

routes.get('/search', SearchController.list);

module.exports = routes;
