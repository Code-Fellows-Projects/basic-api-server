'use strict';

const express = require('express');
const Food = require('../models/food');
const food = new Food();

const router = express.Router();


router.get('/food', getFood);
router.get('/food/:id', getOneFood);
router.post('/food', createFood);
router.put('/food/:id', updateFood);
router.delete('/food/:id', deleteFood);

//REST handlers
function getFood(req, res) {
  const allFood = food.get();
  res.status(200).json(allFood);
}

function getOneFood(req, res) {
  const id = parseInt(req.params.id);
  const oneFood = food.get(id);
  res.status(200).json(oneFood);
}

function createFood(req, res) {
  const obj = req.body;
  const newFood = food.create(obj);
  res.status(200).json(newFood);
}

function updateFood(req, res) {
  const obj = req.body;
  const otherFood = food.update(req.params.id, obj);
  res.status(200).json(otherFood);

}

function deleteFood(req, res) {
  const grossFood = food.delete(req.params.id);
  res.status(200).send(grossFood);
}

module.exports = router;