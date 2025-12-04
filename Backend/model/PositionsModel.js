const {model}=require("mongoose");
const {PositionSchema}= require("../schema");

const PositionsModel=new model("PositionsModel",PositionSchema);

module.exports=PositionsModel;