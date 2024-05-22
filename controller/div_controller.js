var div= require('../model/div_model');
exports.insert = async (req,res) =>{
     var data= await div.create(req.body);
     res.status(200).json({
        status:"data insert",
        data
     })
}
exports.get_data = async (req,res) =>{
    var data= await div.find(req.body);
    res.status(200).json({
       status:"data select",
       data
    })
}



