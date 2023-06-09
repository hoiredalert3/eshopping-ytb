"use strict";
const express = require("express");
const router = express.Router();

const controller = require("../controllers/productsController");
const cartController = require("../controllers/cartController");

//Show list of products
router.get("/", controller.getData, controller.showProducts);

//Show cart details
router.get("/cart", cartController.showCart);

//Show product details
router.get("/:id", controller.getData, controller.showDetails);

//Post route to add product
router.post("/cart", cartController.add);

//Put route to update product
router.put("/cart", cartController.update);

//Delete route to remove product
router.delete("/cart", cartController.delete);

module.exports = router;
