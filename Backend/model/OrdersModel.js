const {model}=require("mongoose");
const {OrderSchema}= require("../schema");

const OrdersModel=new model("OrdersModel",OrderSchema);

module.exports=OrdersModel;