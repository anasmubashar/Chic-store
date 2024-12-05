const {
  createOrder,
  getUserOrders,
  getOrderById,
} = require("../controllers/orderController.js");

const router = require("express").Router();
router.post("/", createOrder);
router.get("/", getUserOrders);
router.get("/:id", getOrderById);

module.exports = router;
