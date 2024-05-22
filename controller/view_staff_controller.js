var view_staff= require('../model/staff_reg_model');

exports.insert = async (req,res) =>{
     var data= await view_staff.create(req.body);
     res.status(200).json({
        status:"data insert",
        data
     })
}
exports.get_data = async (req,res) =>{
    var data= await view_staff.find(req.body);
    res.status(200).json({
       status:"data select",
       data
    })
}