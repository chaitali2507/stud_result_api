var mongoose = require('mongoose');

var firstschema = new mongoose.Schema({
    name:{
        type:String
    },
    
});
module.exports= mongoose.model("student",firstschema);