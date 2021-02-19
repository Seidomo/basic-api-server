'use strict';

const express = require('express');
const router = express.Router();
const FoodInterface = require('../models/food.js');
const food = new FoodInterface();
const validator = require('../middleware/validator.js');

router.get('/food', getFood);
router.get('/food/:id', validator, getFoodById);
router.post('/food', createFood);
router.put('/food/:id', validator, updateFood);
router.delete('/food/:id', validator, deleteFood);

function getFood(request, response, next){
  
  let foodObj = food.read();
  response.json(foodObj);
}

function getFoodById(request, response, next){
  
  const id = parseInt(request.params.id);
  let foodObj = food.read(id);
  //   response.json(foodObj);
  response.status(200).send(foodObj);
}

function createFood(request, response, next) {
  
  const foodObj = request.body;
  let resObject = food.create(foodObj);
  response.json(resObject);
}

function updateFood(request, response, next){
  const id = parseInt(request.params.id);
  const foodBody = request.body;
  let foodObj = food.update(id, foodBody);
  console.log(foodObj);
  response.json(foodObj);

}

function deleteFood(request, response, next){
  const id = parseInt(request.params.id);
  let foodObj = food.delete(id);
  response.status(204).json(foodObj);

}

module.exports = router;