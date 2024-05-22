var std= require('../model/std_model');
exports.insert = async (req,res) =>{
     var data= await std.create(req.body);
     res.status(200).json({
        status:"data insert",
        data
     })
}
exports.get_data = async (req,res) =>{
    var data= await std.find(req.body);
    res.status(200).json({
       status:"data select",
       data
    })
}



