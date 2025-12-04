 require('dotenv').config()

const express=require("express");
const app=express();
const port=8080
const mongoose=require("mongoose");
const cors=require("cors");
const bodyParser=require("body-parser");
const dbUrl=process.env.MONGO_URL;
const HoldingsModel =require("./model/HoldingsModel");
const PositionsModel = require('./model/PositionsModel');
const OrdersModel=require("./model/OrdersModel");
const User=require("./model/UserModel")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { MongoClient } = require("mongodb");



var ObjectId=require("mongodb").ObjectId;

let client;

async function connectClient() {
  if (!client) {
    client = new MongoClient(dbUrl);
    await client.connect();
  }
}

app.use(cors());
app.use(bodyParser.json());


main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dbUrl);
}




// app.get("/addHoldings",async(req,res)=>{
// let tempHoldings=[
//   {
//     name: "BHARTIARTL",
//     qty: 2,
//     avg: 538.05,
//     price: 541.15,
//     net: "+0.58%",
//     day: "+2.99%",
//   },
//   {
//     name: "HDFCBANK",
//     qty: 2,
//     avg: 1383.4,
//     price: 1522.35,
//     net: "+10.04%",
//     day: "+0.11%",
//   },
//   {
//     name: "HINDUNILVR",
//     qty: 1,
//     avg: 2335.85,
//     price: 2417.4,
//     net: "+3.49%",
//     day: "+0.21%",
//   },
//   {
//     name: "INFY",
//     qty: 1,
//     avg: 1350.5,
//     price: 1555.45,
//     net: "+15.18%",
//     day: "-1.60%",
//     isLoss: true,
//   },
//   {
//     name: "ITC",
//     qty: 5,
//     avg: 202.0,
//     price: 207.9,
//     net: "+2.92%",
//     day: "+0.80%",
//   },
//   {
//     name: "KPITTECH",
//     qty: 5,
//     avg: 250.3,
//     price: 266.45,
//     net: "+6.45%",
//     day: "+3.54%",
//   },
//   {
//     name: "M&M",
//     qty: 2,
//     avg: 809.9,
//     price: 779.8,
//     net: "-3.72%",
//     day: "-0.01%",
//     isLoss: true,
//   },
//   {
//     name: "RELIANCE",
//     qty: 1,
//     avg: 2193.7,
//     price: 2112.4,
//     net: "-3.71%",
//     day: "+1.44%",
//   },
//   {
//     name: "SBIN",
//     qty: 4,
//     avg: 324.35,
//     price: 430.2,
//     net: "+32.63%",
//     day: "-0.34%",
//     isLoss: true,
//   },
//   {
//     name: "SGBMAY29",
//     qty: 2,
//     avg: 4727.0,
//     price: 4719.0,
//     net: "-0.17%",
//     day: "+0.15%",
//   },
//   {
//     name: "TATAPOWER",
//     qty: 5,
//     avg: 104.2,
//     price: 124.15,
//     net: "+19.15%",
//     day: "-0.24%",
//     isLoss: true,
//   },
//   {
//     name: "TCS",
//     qty: 1,
//     avg: 3041.7,
//     price: 3194.8,
//     net: "+5.03%",
//     day: "-0.25%",
//     isLoss: true,
//   },
//   {
//     name: "WIPRO",
//     qty: 4,
//     avg: 489.3,
//     price: 577.75,
//     net: "+18.08%",
//     day: "+0.32%",
//   },
// ];
// tempHoldings.forEach((item)=>{
//   let newHolding=new HoldingsModel({
//      name: item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price: item.price,
//     net: item.net,
//     day: item.day,
//     });
//      newHolding.save();
// });
// res.send("Done");
// });

// app.get("/addPositions",async(req,res)=>{
// let tempPositions=[
// {
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
// tempPositions.forEach((item)=>{
//   let newPosition=new PositionsModel({
//      name: item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price: item.price,
//     net: item.net,
//     day: item.day,
//     });
//      newPosition.save();
// });
// res.send("Done");
// });

app.get("/allHoldings",async(req,res)=>{
   const allHoldings=await HoldingsModel.find({});
   res.json(allHoldings);
});

app.get("/allPositions",async(req,res)=>{
  const allPositions=await PositionsModel.find({});
  res.json(allPositions);
})

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Order saved!");
});

app.post("/signup", async (req, res) => {
  const { username, password, email } = req.body;

  try {
    await connectClient();
    const db = client.db("Zerodha"); // choose ONE database only
    const usersCollection = db.collection("users");

    // Check user exists
    const existing = await usersCollection.findOne({ username });
    if (existing) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = {
      username,
      email,
      password: hashedPassword,
    };

    const result = await usersCollection.insertOne(newUser);

    // Correct result field
    const token = jwt.sign(
      { id: result.insertedId },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "7d" }
    );

    res.json({ token, userId: result.insertedId });
  } catch (err) {
    console.error("Error during signup:", err);
    res.status(500).send("Server error");
  }
});

app.post("/login",async (req, res) =>{
  const { password, email } = req.body;
  try {
    await connectClient();
    const db = client.db("Zerodha");
    const usersCollection = db.collection("users");

    const user = await usersCollection.findOne({ email });
    if (!user) {
      return res.status(400, { message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });
    res.json({ token, userId: user._id });
  } catch (err) {
    console.error("Error during login: ", err.message);
    res.status(500).send("Server error");
  }
});

app.listen(port,()=>{
    console.log(`listening at ${port}`);
})