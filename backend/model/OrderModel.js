const {model} = require("mongoose");
const {OrderModel} = require("../schemas/OrderSchema");
const OrderModel = model("order", OrderSchema);
module.exports = {OrderModel};