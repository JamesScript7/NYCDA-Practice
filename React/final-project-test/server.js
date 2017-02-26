'use strict'
/* 
	Fallback server for supporting browserHistory
	in your React application. 
*/


//instatiate path and express
const express = require('express')
const path = require('path')
const app = express()
const model = require('./models');
const bodyParser = require('body-parser');
// Routers
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//use the public folder as the static directory. 
app.use( express.static(path.join(__dirname, 'public')));

app.post('/api/products', function(req, res){
  model.Products.create({
    name: req.body.name,
    image: req.body.image,
    info:  req.body.info,
    price: req.body.price
  }).then(function(respond){
    res.json(respond)
  })
})

//send any route to index.html where the react app is mounted
app.get('*', (req,res)=>{
	res.sendFile(path.join(__dirname,'public/index.html'))
})

app.listen(3000,()=>console.log('running on localhost:3000'))