import React,{useState,useEffect} from "react";
import { Dialog,DialogContent, Grid, Hidden} from '@mui/material';
import { makeStyles,Box } from "@material-ui/core";
import emailjs from 'emailjs-com';
import axios from "axios";
import { useHistory } from "react-router";

import useMediaQuery from '@mui/material/useMediaQuery';
import swal from 'sweetalert';
import Button from '@material-ui/core/Button';
import LoginIcon from '@mui/icons-material/Login';

import { useTheme } from '@mui/material/styles';
const options = {
    title: 'Title',
    message: 'Message',
    buttons: [
      {
        label: 'Yes',
        onClick: () => alert('Click Yes')
      },
      {
        label: 'No',
        onClick: () => alert('Click No')
      }
    ],
    childrenElement: () => <div />,
    customUI: ({ onClose }) => <div>Custom UI</div>,
    closeOnEscape: true,
    closeOnClickOutside: true,
    willUnmount: () => {},
    afterClose: () => {}
   
  
 
  };
const useStyle=makeStyles(
    {
        RegisterCss:
        {
            height:'auto',
            width:'auto'
        }
    }
)
const EditProfile=({open,close})=>
{   
    const [Name,setName]=useState("")
    const [Email,setEmail]=useState("")
    const [PhoneNo,setPhoneNo]=useState("")
    const [Password,setPassword]=useState("")
    const history=useHistory()
    const LoginCustomerId=localStorage.getItem('user_id')
    const [LoginCustomerData,setLoginCustomerData]=useState([])
    const TextFieldHandler=(e)=>
    {
        let Cus_Name=e.target.value

        setName(Cus_Name)
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
    const PasswordHandler=(e)=>
    {
        let Cus_Phone=e.target.value
        setPassword(Cus_Phone)
    }
    const CloseHandle=()=>
    {
        
        close(false)
    
    }
    
    const getCustomerByID=async()=>
    {
       const {data}=await axios.get(`http://127.0.0.1:8000/api/customer/${LoginCustomerId}/`) 
       setName(data.customer_name)
       setEmail(data.customer_email)
       setPhoneNo(data.customer_phone)
       setPassword(data.customer_password)
    }
  
    const EditCustomerIntoDB=async(e)=>
    {
        let Dont_RefreshPage=e.preventDefault()
        let formField=new FormData()
        formField.append('customer_phone',PhoneNo)
        formField.append('customer_name',Name)
        formField.append('customer_email',Email)
        formField.append('customer_password',Password)
        await axios({
            method:'put',
            url:`http://127.0.0.1:8000/api/customer/${LoginCustomerId}/`,
            data: formField,
            headers: {"content-type": "application/json"}
          }).then((res)=>
          {
            CloseHandle()
            emailjs.sendForm('service_5mni0b8', 'template_0jmf6fv', e.target, 'user_qhdXozcGdCJSABA5OKAwU')
            .then((result) => 
            {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            swal({
              title: "Congratulation!",
              text: "Your Profile has been updated successfully",
              icon: "success",
              button: "OK",
            });
            window.location.replace("/")
            localStorage.setItem("login_user",Name)
           return (<>
            
           </>)
          })
       
    }
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
   
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    const classes=useStyle()
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'))
    useEffect(()=>
    {
      getCustomerByID()
    })
  
    return (<>
     <Dialog open={open} onClose={CloseHandle}  >
         <DialogContent className={classes.RegisterCss}>
            <Grid direction="row" container>
                <Grid item md={3.4} style={{display:'flex',flexDirection:'column',justifyContent:'center'}}> 
                    <Box>
                        <h2>Hi,{localStorage.getItem("login_user")}</h2>
                        <p style={{textAlign:'justify'}}>Please update your profile if you want to get acccess our services.</p>
                    </Box>
                    <img width="100%" height="50%" src="https://ecomchef.com/wp-content/uploads/2019/07/login.png"></img>
                </Grid>
                <Grid item md={8.6}  style={{padding:'1.5%'}} justify="center" align="center">
             <Box  justify="center" align="center">
             <img src="data:image/jpeg;base64,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" height="80px" style={{marginBottom:'1%'}}></img>
                            <h2 style={{marginBottom:'5%'}}>Update Your Profile</h2>

             </Box>
             <Box direction="row" container  >
                        
                            <form onSubmit={EditCustomerIntoDB}>
                            <div className="form-group row" style={{marginBottom:'10px'}}>
                                <label for="inputEmail3" className="col-sm-2 col-form-label">Name:</label>
                                <div className="col-sm-10">
                                <input value={Name} onChange={TextFieldHandler} required type="text" className="form-control" id="inputEmail3" placeholder="Enter your name"></input>
                               
                                </div>
                            </div>
                            <div className="form-group row" style={{marginBottom:'10px'}}>
                                <label for="inputEmail3" className="col-sm-2 col-form-label">Email:</label>
                                <div className="col-sm-10">
                                <input value={Email} onChange={EmailHandler}  required type="email" className="form-control" id="inputEmail3" placeholder="Enter your  email"></input>
                                </div>
                            </div>
                            <div className="form-group row" style={{marginBottom:'10px'}}>
                                <label for="inputPassword3" className="col-sm-2 col-form-label">PhoneNo:</label>
                                <div className="col-sm-10">
                                <input value={PhoneNo} required type="tel"  onChange={PhoneHandler} className="form-control" id="inputPassword3" placeholder="Enter your phone no"></input>
                                </div>
                            </div>
                          
                              <Box align="center" style={{marginTop:'6%'}}>
                              <span to="#" style={{textDecoration:'none'}}>     <Button type="submit"  startIcon={<LoginIcon/>}  variant="contained" className="SignInClass" style={{background:'#186494',width:'80%',borderRadius:'5px',textTransform:'capitalize',fontSize:'14px',color:'white'}}>Update Now</Button></span><br></br>
                                       
                              </Box>
                            
                            </form>            
                                                    
                     
                    </Box> </Grid>
            </Grid>


           

                     
         
         </DialogContent>
         <Hidden mdDown={true}>
            <Box style={{textAlign:'right',marginRight:'2%',marginBottom:'1.2%'}}>
                <button type="button" className="btn-close" aria-label="Close" onClick={CloseHandle}></button>
            </Box>     
         </Hidden>
     </Dialog>
    </>)
}
export default EditProfile