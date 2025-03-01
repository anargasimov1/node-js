const blogController = require('../controller/BlogController');
const Router = require('express').Router

const blogRouter = new Router();


blogRouter.post('/blogs/create', blogController.createBlog);


module.exports = blogRouter;
