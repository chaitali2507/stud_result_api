var staff_login= require('../model/staff_login_model');

var login_status=0;

exports.insert = async (req,res) =>{
     var data= await staff_login.create(req.body);
     res.status(200).json({
        status:"data insert",
        data
     })
}
exports.get_data = async (req,res) =>{
    var data= await staff_login.find(req.body);
    res.status(200).json({
       status:"data select",
       data
    })
}
exports.delete_data = async (req,res) =>{
    var id=req.params.id;

    var data= await staff_login.findByIdAndDelete(id);
    res.status(200).json({
       status:"data deleted"
    })
}
exports.update_data = async (req,res) =>{
    var id=req.params.id;

    var data= await staff_login.findByIdAndUpdate(id,req.body);
    res.status(200).json({
       status:"data updated"
    })
}
exports.login = async (req,res) => {

    var data = await staff_login.find({"email":req.body.email});

    console.log(data);

    if(login_status==0)
    {
        if(data.length==1)
        {
            if(data[0].password==req.body.password)
            {
                login_status=1;
                res.status(200).json({
                    status:"login success"
                })
            }else{
                res.status(200).json({
                    status:"check your email and password"
                })
            }
        }else{
            res.status(200).json({
                status:"check your email and password"
            })
        }
    }else{
        res.status(200).json({
            status:"user is already login"
        })
    }
}
exports.logout = async(req,res)=>{
    login_status=0;
    res.status(200).json({
        status:"user logout",
     })
}
