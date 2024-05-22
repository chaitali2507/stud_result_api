var view_result= require('../model/result_model');
exports.insert = async (req,res) =>{
   
   var name=req.body.name
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

 
   req.body.name=name;
  req.body.total=total;
  req.body.per=per;
  req.body.min=min;
  req.body.max=max;
  req.body.result=result;
  
  var data= await view_result.create(req.body);
  
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
    //pagination
    try {
        var limit=3;

        var page_no=req.query.page_no;
        if(page_no==undefined)
        {
            page_no=1;
        }
        var start=(page_no-1)*limit;

        var data=await view_result.find().limit(limit).skip(start);
        var total_record=await view_result.find().count();

        var total_page=Math.ceil(total_record/limit);

        res.status(200).json({
            data,
            total_record,
            total_page
         })
    } catch (error) {
        res.status(200).json({
            error
         })
    }
}
exports.view_data = async (req,res) =>{
    var id=req.params.id;
    var data= await view_result.findById(id,req.body);
    res.status(200).json({
       status:"data view",
       data
    })
}
