import React,{useState} from "react";
import { Box,Grid ,Paper} from "@material-ui/core";
import axios from "axios";
import { useHistory } from "react-router";
import swal from 'sweetalert';
import backgroundImage from '../Images/bg13.jpg'
import emailjs from 'emailjs-com';
const ContactUS=()=>
{
   
  
    const [fname,setfname]=useState("")
    const [lname,setlname]=useState("")
    const [Email,setEmail]=useState("")
    const [PhoneNo,setPhoneNo]=useState("")
    const [message,setMessage]=useState("")
    const history=useHistory()

    const FirstNameHandler=(e)=>
    {
        let Cus_fName=e.target.value
        setfname(Cus_fName)
    }
    const LastNameHandler=(e)=>
    {
        let Cus_lName=e.target.value
        setlname(Cus_lName)
    }
    const PhoneHandler=(e)=>
    {
        let Cus_PhoneNo=e.target.value
        setPhoneNo(Cus_PhoneNo) 
    }
    const EmailHandler=(e)=>
    {
        let Cus_Email=e.target.value
        setEmail(Cus_Email)
    }
    const MessageHandler=(e)=>
    {
        let Cus_Message=e.target.value
        setMessage(Cus_Message)
    }
    const ContactUsIntoDB=async(e)=>
    {
        let Dont_RefreshPage=e.preventDefault()
       
        let formField=new FormData()
        formField.append('phone_no',PhoneNo)
        formField.append('message',message)
        formField.append('first_name',fname)
        formField.append('last_name',lname)
        formField.append('email',Email)
     
       
        await axios({
            method:'post',
            url:'http://127.0.0.1:8000/api/contactus/',
           
            data: formField,
            headers: {"content-type": "application/json"}
          }).then((res)=>
          {
            emailjs.sendForm('service_gn8fs55', 'template_psapjb8', e.target, 'user_qhdXozcGdCJSABA5OKAwU')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            swal({
              title: "Thank You!",
              text: "Thanks for contact with us",
              icon: "success",
              button: "OK",
            });
          })
    }
   
    return (<>
    <Box style={{ backgroundImage: `url(${backgroundImage})`, backgroundPosition: 'center',
        backgroundSize: 'cover',backgroundRepeat: 'no-repeat',paddingTop:'4%',paddingBottom:'4%'}}>
    <Grid direction="row" container>
             <Grid item md={3}>
            </Grid>
             <Grid item md={6}>
                 <Paper elevation={24}>
                 <Grid direction="row" container>
                   <Grid item md={4} style={{display:'flex',flexDirection:'column',justifyContent:'center'}}> 
                   <img  src="data:image/jpeg;base64,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"></img>
                   </Grid> 
                   <Grid item md={8}> 
                   <Box direction="row" container style={{padding:'5%'}} >
                         <h1 style={{fontWeight:'bold'}}>Contact Us</h1>
                         <form className="row g-3" onSubmit={ContactUsIntoDB}>
                              <div className="col-md-6">
                                <label for="inputEmail4" className="form-label">First Name</label>
                                <input type="text" className="form-control" name="name" onChange={FirstNameHandler} id="inputEmail4" placeholder="Enter your first name"></input>
                              </div>
                              <div className="col-md-6">
                                <label for="inputPassword4" className="form-label">Last Name</label>
                                <input type="text" className="form-control" name="lname" onChange={LastNameHandler} id="inputPassword4" placeholder="Enter your last name"></input>
                              </div>
                              <div className="col-12">
                                <label for="inputAddress" className="form-label">Email</label>
                                <input type="text" className="form-control" name="email" onChange={EmailHandler} id="inputAddress" placeholder="Enter your email"></input>
                              </div>
                              <div className="col-12">
                                <label for="inputAddress2" className="form-label">Phone No</label>
                                <input type="tel" className="form-control" onChange={PhoneHandler} id="inputAddress2" placeholder="Enter your phone number"></input>
                              </div>
                              <div className="col-12">
                                <label for="inputAddress2" className="form-label">Message</label>
                                <textarea className="form-control" name="message" onChange={MessageHandler} placeholder="Type your message here"></textarea>
                              </div>
                              
                              <div className="col-12">
                                <button type="submit" className="btn btn-primary" style={{width:'100%',background:'#186494',color:'white',border:'1px solid silver'}}>Submit Now</button>
                              </div>
                </form>
                                                    
                     
                    </Box>
                   </Grid> 
                 </Grid> 
                 </Paper>  
             </Grid>
             <Grid item md={3}> </Grid>
         </Grid>
    </Box>
        
                    
              
         
       
    </>)
}
export default ContactUS