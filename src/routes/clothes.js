'use strict';

const express = require('express');
const Clothes = require('../models/clothes');
const clothes = new Clothes();


const router = express.Router();


//REST routes
router.get('/clothes', getClothes);
router.get('/clothes/:id', getOnePieceOfClothes);
router.post('/clothes', createClothes);
router.put('/clothes/:id', updateClothes);
router.delete('/clothes/:id', deleteClothes);


//REST handlers
function getClothes(req, res) {
  const allClothes = clothes.get();
  res.status(200).json(allClothes);

}

function getOnePieceOfClothes(req, res) {
  const id = parseInt(req.prams.id);
  const oneItem = clothes.get(id);
  res.status(200).json(oneItem);
}

function createClothes(req, res) {
  const obj = req.body;
  const newClothes = clothes.create(obj);
  res.status(200).json(newClothes);
}

function updateClothes(req, res) {
  const obj = req.body;
  const moreClothes = clothes.update(req.params.id, obj);
  res.status(200).json(moreClothes);
}

function deleteClothes(req, res) {
  const badClothes = clothes.delete(req.params.id);
  res.status(200).send(badClothes);
}

module.exports = router;