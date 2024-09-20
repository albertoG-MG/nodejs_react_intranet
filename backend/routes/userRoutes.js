const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.post("/login", userController.login);
router.get("/getusers", authMiddleware, userController.getUsers);

module.exports = router;