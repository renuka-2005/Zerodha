const {model}=require("mongoose");
const {UserSchema}= require("../schema");

const User=new model("UserModel",UserSchema);

module.exports=User;