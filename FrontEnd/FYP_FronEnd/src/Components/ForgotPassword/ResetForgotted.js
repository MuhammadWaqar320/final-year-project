import React from 'react'
import { Paper } from '@material-ui/core';
import { Box } from '@mui/system'
import forgotPic from '../../Components/Images/lastPic.png'
import backgroundImage from '../Images/bgfor.jpg'
import { useEffect } from 'react';
import swal from 'sweetalert'
import { useState } from 'react';
import { useHistory } from "react-router";
import { useSelector,useDispatch } from "react-redux";
import axios from "axios";
const ResetForgotted = () => {
    const CustomerId=localStorage.getItem('resetId')
    const [newPassword,setNewPassword]=useState("")
    const [confirmPassword,setConfirmPassword]=useState("")
    const history=useHistory()
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const getCustomerById=async()=>
    {
        const {data}=await axios.get(`http://127.0.0.1:8000/api/customer/${CustomerId}/`) 
        setName(data.customer_name)
        setEmail(data.customer_email)
        setPhone(data.customer_phone)
    }
    const NewPassword=(e)=>
    {
        let newpassword=e.target.value
        setNewPassword(newpassword)
    }
    const ConfirmPassword=(e)=>
    {
        let confirmpassword=e.target.value
        setConfirmPassword(confirmpassword)
    }
    const RESETPASSWORD=async(e)=>
    {
        
        let Dont_RefreshPage=e.preventDefault()
        let formField=new FormData()
        if(newPassword===confirmPassword)
        {
            formField.append('customer_password',newPassword)
            formField.append('customer_name',name)
            formField.append('customer_email',email)
            formField.append('customer_phone',phone)
         
            await axios({
                method:'put',
                url:`http://127.0.0.1:8000/api/customer/${CustomerId}/`,
                data: formField,
                headers: {"content-type": "application/json"}
              }).then((res)=>
              {
               
                swal({
                    title: "Congratulation!",
                    text: "Your password has been changed successfully",
                    icon: "success",
                    button: "OK",
                  });
                
               
        
              })
        }
        else
        {
          swal({
            title: "Sorry!",
            text: "New password and confirm password is not matched",
            icon: "error",
            button: "OK",
          });
        }
       
    }
    useEffect(()=>
    {
        getCustomerById();
    })
    return (
        <>
       
           <div className="row" style={{paddingTop:'6.8%',paddingBottom:'6.8%',alignItems:'center',display:'flex',justifyContent:'center',backgroundImage: `url(${backgroundImage})`, backgroundPosition: 'center',
        backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>
               <div className="col-sm-4"> </div>
               <div className="col-sm-4"> 
               <Paper elevation={24} style={{padding:'5%',borderRadius:'10px',border:'2px solid silver'}}>
               <form  onSubmit={RESETPASSWORD}>
                   <div align="center ">
                            <img height="130px" src={forgotPic}></img>
                       <Box style={{marginBottom:'6%'}}><h2>Reset Password</h2></Box>
                   </div>
                        <div className="col-md-12 mb-2">
                            <label  align="left" style={{fontSize:'18px'}}>New Password</label>
                            <div className="input-group">
        
                                <input type="password" value={newPassword} onChange={NewPassword} minLength='6' maxLength="15" className="form-control" id="validationTooltipUsername" placeholder="Enter new password" aria-describedby="validationTooltipUsernamePrepend" required></input>
                               
                            </div>
                        </div>
                        <div className="col-md-12 mb-4">
                            <label  align="left" style={{fontSize:'18px'}}>Confirm Password</label>
                            <div className="input-group">
        
                                <input type="password" value={confirmPassword} onChange={ConfirmPassword} minLength='6' maxLength="15" className="form-control" id="validationTooltipUsername" placeholder="Enter confirm password" aria-describedby="validationTooltipUsernamePrepend" required></input>
                               
                            </div>
                        </div>
                            <button className="btn btn-primary" type="submit" style={{background:'#186494',width:'100%'}}>Reset Password</button> 
                </form>
                </Paper>
               </div>
               <div className="col-sm-4"> </div>
           </div>
        </>
    )
}

export default ResetForgotted
