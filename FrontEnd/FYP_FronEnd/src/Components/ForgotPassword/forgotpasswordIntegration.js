import React from 'react';
import { Paper } from '@material-ui/core';
import { Box } from '@mui/system';
import forgotPic from '../../Components/Images/forgot.png';
import { NavLink } from 'react-router-dom';
import backgroundImage from '../Images/bgfor.jpg';
import { useSelector,useDispatch } from "react-redux";
import { useState } from 'react';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';

const ForgotpasswordIntegration =() => {
    const CustomerData=useSelector((state)=>state.allCustomer.customer)
    const dispatch=useDispatch();
    const [ResetEmail,setResetEmail]=useState("")
    const ResetEmailHandler=(e)=>
    {
        let email=e.target.value
        setResetEmail(email)
    }
    const SendEmailLink=(e)=>
    {
        let Dont_RefreshPage=e.preventDefault()
    
        const FilteredData=CustomerData.filter(SingleCustomer=>(SingleCustomer.customer_email===ResetEmail))
        const isThisCustomerExist=FilteredData.length
        if(isThisCustomerExist==1)
        {
            emailjs.sendForm('service_8xhpd4g', 'template_jkrlbwc', e.target, 'user_AqXC5ArU0aelh3Vn3MdG0')
            
            FilteredData.map((item,index)=>
            {
                localStorage.setItem('resetId',item.customer_id)
            })
            swal({
                title: "To Reset Password",
                text: "Please check your email account and open link to reset your password",
                icon: "success",
                button: "OK",
              }); 
        }
        else
        {
            swal({
                title: "Sorry!",
                text: "Your email is incorrect.Please try again",
                icon: "error",
                button: "OK",
              });  
        }
    }
   
    return (
        <>
        
           <div className="row" style={{paddingTop:'10.2%',paddingBottom:'10.2%',backgroundImage: `url(${backgroundImage})`, backgroundPosition: 'center',
        backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>
               <div className="col-sm-4"> </div>
               <div className="col-sm-4"> 
               <Paper elevation={24} style={{padding:'4%',borderRadius:'10px',border:'1px solid silver'}}>
               <form  onSubmit={SendEmailLink}>
                   <div align="center ">
                            <img height="110px" src={ forgotPic}></img>
                       <Box style={{marginBottom:'6%'}}><h2>Forgot Password</h2></Box>
                   </div>
                   
                       <div className="col-md-12 mb-4">
                            <label  align="left" style={{fontSize:'18px'}}>Email</label>
                            <div className="input-group">
        
                                <input type="text" value={ResetEmail} className="form-control" name="email" onChange={ResetEmailHandler} id="validationTooltipUsername" placeholder="Enter your email" aria-describedby="validationTooltipUsernamePrepend" required></input>
                               
                            </div>
                            </div>
                       
                           
               <button className="btn btn-primary"  type="submit" style={{background:'#186494',width:'100%'}}>Send Email</button>           
                          
                       
                       
                </form>
                </Paper>
               </div>
               <div className="col-sm-4"> </div>
           </div>
        </>
    )
}

export default ForgotpasswordIntegration
