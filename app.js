
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var todoController = require('./controlers/todocontrollers');
	var app = express();

  app.use(express.static(path.join(__dirname, 'public')))
 
  app.set('view engine', 'ejs')
 todoController(app);

  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
