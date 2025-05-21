const express = require('express')
const app = express();

const postroute =  require('./routes/post.routes')


app.use(express.json())



app.use('/', postroute)





module.exports = app;