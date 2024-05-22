var express = require('express');
var router = express.Router();
var login = require('../controller/admin_controller');
var staff_reg=require('../controller/staff_reg_controller');
var staff_login =require('../controller/staff_login_controller');
var std=require('../controller/std_controller');
var div=require('../controller/div_controller');
var student=require('../controller/student_controller');
var add_result=require('../controller/result_controller');
var view_result=require('../controller/view_result_controller');
var view_staff=require('../controller/view_staff_controller');
var view_student=require('../controller/view_student_div_std_controller');
var mag_result=require('../controller/manage_result_controller');
var count_result=require('../controller/result_count_controller');
var auth= require('../middleware/auth')


/* GET home page. */
//admin
router.post('/insert',login.insert);
router.get('/admin',login.get_data);
router.post('/login',auth.check_token,login.login);
router.get('/logout',login.logout);
// staff reg
router.post('/staffinsert',staff_reg.insert);
router.get('/staff',staff_reg.get_data);
router.get('/staffdelete/:id',staff_reg.delete_data);
router.post('/staffupdate/:id',staff_reg.update_data);


// staff login
router.post('/staff_login_insert',staff_login.insert);
router.get('/staff_login',staff_login.get_data);
router.get('/staff_login_delete/:id',staff_login.delete_data);
router.post('/staff_login_update/:id',staff_login.update_data);
router.post('/staff_login',staff_login.login);
router.get('/staff_logout',staff_login.logout);
//std add
router.post('/std_insert',std.insert);
router.get('/std',std.get_data);

//div add
router.post('/div_insert',div.insert);
router.get('/div',div.get_data);

//student add
router.post('/student_insert',student.insert);
router.get('/student',student.get_data);

//result add
router.post('/result_insert',add_result.insert);
router.get('/',add_result.get_data);

//view result student wise with s.id 
router.post('/viewresult_insert',view_result.insert);
router.get('/viewresult',view_result.get_data);
router.get('/view_result/:id',view_result.view_data);


//view staff
router.post('/viewstaff_insert',view_staff.insert);
router.get('/viewstaff',view_staff.get_data);

//view student std div wise
router.post('/viewstudent_insert',view_student.insert);
router.get('/viewstudent',view_student.get_data);

//manage result

router.get('/manage_result_delete/:id',mag_result.delete_data);
router.post('/manage_result_update/:id',mag_result.update_data);

//result count
router.get('/count',count_result.data_count);



module.exports = router;

