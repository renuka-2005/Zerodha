const {model}=require("mongoose");
const {HoldingSchema}= require("../schema");

const HoldingsModel=new model("HoldingsModel",HoldingSchema);

module.exports=HoldingsModel;