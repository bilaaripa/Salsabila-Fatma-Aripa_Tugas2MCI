const router = require('express').Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUser);
router.get('/:name', userController.getUserByName);
router.post('/', userController.createUser);
router.put('/:ktp', userController.updateUser);
router.delete('/:ktp', userController.deleteUser);

module.exports = router;