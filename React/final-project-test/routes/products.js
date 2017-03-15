const models =require("../models");
const express = require("express");
const router = express.Router();

models.sequelize.sync();

router.post('/api', function(req, res){
  models.Products.create({
    name: req.body.name,
    image: req.body.image,
    info: req.body.info,
    price: req.body.price
  }).then(function(data){
    res.json(data)
  })
})



module.exports = router;
