import {Dialog, DialogContent,makeStyles,Box} from '@material-ui/core';
import {useState} from 'react';
import {Typography,TextField,Button} from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router';

const makestyle=makeStyles({
    component:{
         height:'94vh',
         width:'90vh',
    },
    image:{
       backgroundColor:'#2874f0',
       height:'68vh',
       width:'35%', 
       padding:'45px 35px',
       '& > *':{
           color:'#FFFFFF',
           fontweight:600,
       }
    },
    login:{
       padding:'25px 35px',
       display:'flex',
       flex:1,
       flexDirection:'column',
       '& > *':{
           marginTop:20
       }
    },
    text:{
        color:'#878787',
        fontSize:12,
    },
    loginbtn:{
       background:'#fD641D',
       color:'#FFFFFF',
       height:48,
    },
    requestbtn:{
        background:'#FFFFFF',
        color:'#2874f0',
        height:48,
    },
    createtext:{
        textAlign:'center',
        marginTop:'auto',
        fontSize:14,
        color:'#2874f0',
        fontweight:600,
        cursor:'pointer',
    },
    
})


//Object that are used to change the data 
const initialvalve={
    Login:{
        view:'Login',
        heading:'Login',
        subheading:'Get access to your orders,Wishlist and recommendation'
    },
    signup:{
        view:'signup',
        heading:'Looks like you`re new here',
        subheading:'SignUp with your mobile number'
    },
}

const signupInitialvalues={
    firstname:'',
    lastname:'',
    address:'',
    mail:'',
    password:'',
    phnNumber:'',
};
// To open dialog box
const Login = ({open, setOpen}) => {
    const classes= makestyle();
    const handleClose = () => {
       setOpen(false);
     setAccoount(initialvalve.Login);
    }
    
//To swtich on signup dialogbox
const [ Account,setAccoount ] = useState(initialvalve.Login);
const [ signup,setSignUp ]= useState(signupInitialvalues);
 const signupFun=()=>{
     setAccoount(initialvalve.signup);
 }

 

//send data to database
    //const history=useHistory()

const onInputChange=(e)=>{
  setSignUp({ ...signup,[e.target.name]: e.target.value});
}
//to close the sigup page after successfully signup
const signupuser=async()=>{
    await axios(
        {
            method:'post',
            url:'http://localhost:8000/api/Login/',
            data:signup,
            headers:{"content-type":"application/json"}
        }
    ).then((response)=>{
        console.log(response.data)
//        history.push('/')
    });
    handleClose();
}


































    return(

        <Dialog open={open} onClose={handleClose} >
            <DialogContent className={classes.component}>
                <Box style={{display:'flex'}}>
                    <Box className={classes.image}>
                       <Typography variant="h5">{Account.heading}</Typography>
                       <Typography style={{marginTop:20}}> {Account.subheading} </Typography>
                    </Box>
                    {
                        Account.view === 'Login' ?
                    <Box className={classes.login}>
                        <TextField name='username' label='Enter Email/Mobile Number' />
                        <TextField name='password' label='Enter Your Password'/>
                        <Typography className={classes.text}>By Continuing,you agree to Pak Electronics Term of use and Privacy Policy.</Typography>
                        <Button variant="contained" className={classes.loginbtn}>Login</Button>
                        <Typography className={classes.text} style={{textAlign:'center'}}>OR</Typography>
                        <Button variant="contained" className={classes.requestbtn}>Request OTP</Button>
                        <Typography onClick={()=>signupFun()} className={classes.createtext}>New to Here?Create an account</Typography>
                    </Box>:
                    <Box className={classes.login}>
                        <TextField onChange={(e)=>onInputChange(e)}  name='firstname' label='Enter Your First Name'/>
                        <TextField onChange={(e)=>onInputChange(e)}  name='lastname' label='Enter Your Last Name'/>
                        <TextField onChange={(e)=>onInputChange(e)}  name='address' label='Enter Your Address'/>
                        <TextField onChange={(e)=>onInputChange(e)}  name='mail' label='Enter Your Email Address'/>
                        <TextField onChange={(e)=>onInputChange(e)}  name='password' label='Enter Your Password'/>
                        <TextField onChange={(e)=>onInputChange(e)}  name='phnNumber' label='Enter Your Phone Number'/>
                        <Button onClick={()=>signupuser()} variant="contained" className={classes.loginbtn}>SignUp</Button>
                    </Box>
                    }
                </Box>
            </DialogContent>
        </Dialog>
    )
}
export default Login;