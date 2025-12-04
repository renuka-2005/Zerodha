
const mongoose = require("mongoose");


const HoldingSchema=new mongoose.Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
});

const OrderSchema=new mongoose.Schema({
    name :String,
    qty:Number,
    price:Number,
    mode:String,
});

const PositionSchema=new mongoose.Schema({
     product: String,
    name: String,
    qty:Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean,
})

const UserSchema=new mongoose.Schema({
  username:String,
  email:String,
  password:Number
});






module.exports={HoldingSchema,PositionSchema,OrderSchema,UserSchema};