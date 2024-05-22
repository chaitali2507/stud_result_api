var login= require('../model/admin_model');
var jwt=require('jsonwebtoken');

var login_status=0;

exports.insert = async (req,res) =>{
     var data= await login.create(req.body);
     res.status(200).json({
        status:"data insert",
        data
     })
}
exports.get_data = async (req,res) =>{
    var data= await login.find(req.body);
    res.status(200).json({
       status:"data select",
       data
    })
}

exports.login = async (req,res) => {

    var data = await login.find({"email":req.body.email});

    console.log(data);

    if(login_status==0)
    {
        if(data.length==1)
        {
            if(data[0].password==req.body.password)
            {
                login_status=1;
                var token =jwt.sign({id: data[0].id},"admin");
                res.status(200).json({
                    status:"login success",
                    token
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
