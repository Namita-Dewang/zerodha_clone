require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const {PositionModel}=require('./model/PositionModel');
const {HoldingModel}=require('./model/HoldingModel');
const {OrderModel}=require('./model/OrderModel');

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

// app.get('/addPositions', async(req, res)=>{
//     let tempPositions=[
//   {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
// ];
//       tempPositions.forEach((item) => {
//         let newHolding = new PositionModel({
//             product: item.product,
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//             isLoss: item.isLoss,
//         });

//         newHolding.save();
//       });
//       res.send("Done");
// });

app.get('/allHoldings', async(req,res)=>{
    let allHoldings = await HoldingModel.find({});
    res.json(allHoldings);
});
app.get('/allPosition', async(req,res)=>{
    let allHoldings = await PositionModel.find({});
    res.json(allPosition);
});
app.post("/newOrder", async(req, res) =>{
    let newOrder = new OrderModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
 });
    newOrder.save();
    res.send("Order Saved!")
});
app.listen(PORT, () => {
    console.log("App started");
    mongoose.connect(uri);
    console.log("App started");
});