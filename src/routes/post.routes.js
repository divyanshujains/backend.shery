const express =  require('express')
const router = express.Router();
const postcontroller = require('../controllers/post.controller')





router.post('/create-post',postcontroller.createPost)






module.exports =  router;