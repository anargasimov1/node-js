const Router = require('express').Router
const controller = require('../controller/UserController');
const { authMiddleware } = require('../middlewares/AuthMiddleware');
const chekRole = require('../middlewares/chekRole')


const router = new Router();


router.post("/auth/register", controller.registration);
router.get('/auth/all', authMiddleware, chekRole(["admin"]), controller.getAllUsers);
router.put('/auth/update/:id', controller.UpDate);

module.exports = router;