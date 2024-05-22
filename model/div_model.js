var mongoose = require('mongoose');

var firstschema = new mongoose.Schema({
    division:{
        type:Number
    },
    
});
module.exports= mongoose.model("div",firstschema);