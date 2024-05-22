var add_result= require('../model/result_model');

exports.insert = async (req,res) =>{
     var sub1=req.body.sub1;
     var sub2=req.body.sub2;
     var sub3=req.body.sub3;
     var sub4=req.body.sub4;
     var sub5=req.body.sub5;
     var total=req.body.total;
     var per=req.body.per;
     var min=req.body.min;
     var max=req.body.max;
     var result=req.body.result;


     total=parseInt(sub1)+parseInt(sub2)+parseInt(sub3)+parseInt(sub4)+parseInt(sub5);
     per=total/5;
     min=(Math.min(sub1,sub2,sub3,sub4,sub5));
     max=(Math.max(sub1,sub2,sub3,sub4,sub5));
     var cnt=0;
    if(sub1<35)
    {
        cnt++;
    }
    if(sub2<35)
    {
        cnt++;
    }
    if(sub3<35)
    {
        cnt++;
    }
    if(sub4<35)
    {
        cnt++;
    }
    if(sub5<35)
    {
        cnt++;
    }
    if(cnt==3)
    {
        result="Fail";
    }
    else if(cnt>0 && cnt<=2)
    {
        result="ATKT";
    }
    else if(cnt==0)
    {
        result="Pass";
    }

   

    req.body.total=total;
    req.body.per=per;
    req.body.min=min;
    req.body.max=max;
    req.body.result=result;
    
    var data= await add_result.create(req.body);
    
     data['total']=total;
     data['per']=per;
     data['min']=min;
     data['max']=max;
     data['result']=result;
    
     res.status(200).json({
        status:"data insert",
        data
     })
}
exports.get_data = async (req,res) =>{
    var data= await add_result.find();
    res.status(200).json({
       status:"data select",
       data
    })
}




