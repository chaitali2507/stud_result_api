var mongoose = require('mongoose');

var firstschema = new mongoose.Schema({
    name:{
        type:String
    },
    standard:{
        type:String
    },
    division:{
        type:String
    },
    sub1:{
        type:Number
    },
    sub2:{
        type:Number
    },
    sub3:{
        type:Number
    },
    sub4:{
        type:Number
    },
    sub5:{
        type:Number
    },
    total:{
        type:Number
    },
    per:{
        type:Number
    },
    min:{
        type:Number
    },
    max:{
        type:Number
    },
    result:{
        type:String
    }
    
});
module.exports= mongoose.model("result",firstschema);