const express = require("express");
const router = express.Router();
const foodModel = require("../models/foodModel");
var http = require('http')
var url = require('url')
var qs = require('querystring')
var MongoClient = require('mongodb').MongoClient
//GET ALL PIZZA || @GET REQUEST
router.get("/getAllFood", async (req, res) => {
  var myurl = url.parse(req.url);
  var query = myurl.query;
  var qobj = qs.parse(query);
  var url1 = "mongodb+srv://thejas:$ABCD1234@cluster0.dxtbt60.mongodb.net/food-app?retryWrites=true&w=majority";
  MongoClient.connect(url1, function (err, client) {
    if (err) throw err;
    const db = client.db('food-app');
    db.collection('pizzas').find(qobj, {}).toArray(
      function (err, docs) {
        if (err) throw err;
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.write(JSON.stringify(docs));
        client.close();
        res.end();
      }
    )
  })
 
});
router.post("/addfood", async (req, res) => {
  const food = req.body.food;
  try {
    const newFood = new foodModel({
      name: food.name,
      image: food.image,
      varients: ["small", "medium", "larg"],
      description: food.description,
      category: food.category,
      prices: [food.prices],
    });
    await newFood.save();
    res.status(201).send("New Pizza Added");
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/getfoodbyid", async (req, res) => {
  const foodId = req.body.foodId;

  // console.log("foodId : " , foodId);
  try {
    const food = await foodModel.findOne({ _id: foodId });
    res.send(food);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/updatefood", async (req, res) => {
  const updatedFood = req.body.updatedFood;
  try {
    const food = await foodModel.findOne({ _id: updatedFood._id });
    (food.name = updatedFood.name),
      (food.description = updatedFood.description),
      (food.image = updatedFood.image),
      (food.category = updatedFood.category),
      (food.prices = [updatedFood.prices]);
    await food.save();
    res.status(200).send("Pizza Update Success");
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.post("/deletefood", async (req, res) => {
  const foodId = req.body.foodId;
  try {
    await foodModel.findOneAndDelete({ _id: foodId });
    res.status(200).send("Pizza Deleted");
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

module.exports = router;
