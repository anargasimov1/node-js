const Router = require('express').Router
const controller = require('../controller/UserController');


const router = new Router();


router.post("/auth/register", controller.registration);
router.get('/auth/all', controller.gelAllUsers);
router.put('/auth/update/:id', controller.UpDate);

module.exports = router;