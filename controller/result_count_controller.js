var count_result= require('../model/result_model');




exports.data_count = async (req,res) =>{
    
   
     var pass_data=await count_result.find({"result":"Pass"}).count();
     var fail_data=await count_result.find({"result":"Fail"}).count();
     var atkt_data=await count_result.find({"result":"ATKT"}).count();
    
     res.status(200).json({
        status:"counting pass data",
        pass_data,
        fail_data,
        atkt_data
     })
}


