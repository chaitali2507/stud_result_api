var student= require('../model/student_model');
exports.insert = async (req,res) =>{
     var data= await student.create(req.body);
     res.status(200).json({
        status:"data insert",
        data
     })
}
exports.get_data = async (req,res) =>{
    var data= await student.find(req.body);
    res.status(200).json({
       status:"data select",
       data
    })
}



