import React,{useState,useEffect} from "react";
import { Dialog,DialogContent, Grid, Hidden} from '@mui/material';
import { makeStyles,Box } from "@material-ui/core";
import axios from "axios";
import '../../App.css'
import emailjs from 'emailjs-com';
import { useHistory } from "react-router";
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@material-ui/core/Button';
import LoginIcon from '@mui/icons-material/Login';
import { useTheme } from '@mui/material/styles';
import swal from 'sweetalert';
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
const ResetPassword=({open,close})=>
{   
    const [newPassword,setNewPassword]=useState("")
    const [confirmPassword,setConfirmPassword]=useState("")
    const history=useHistory()
    const LoginCustomerId=localStorage.getItem('user_id')
    const [LoginCustomerData,setLoginCustomerData]=useState([])
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const getCustomerById=async()=>
    {
        const {data}=await axios.get(`http://127.0.0.1:8000/api/customer/${LoginCustomerId}/`) 
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
    const CloseHandle=()=>
    {
        
        close(false)
    
    }  
    const ResetPasswordIntoDB=async(e)=>
    {
        let Dont_RefreshPage=e.preventDefault()
        let formField=new FormData()
        if(newPassword===confirmPassword)
        {
            formField.append('customer_password',newPassword)
            formField.append('customer_name',name)
            formField.append('customer_email',email)
            formField.append('customer_phone',phone)
            console.log(email,name)
            await axios({
                method:'put',
                url:`http://127.0.0.1:8000/api/customer/${LoginCustomerId}/`,
                data: formField,
                headers: {"content-type": "application/json"}
              }).then((res)=>
              {
                CloseHandle()
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
        getCustomerById()
    },[])
    return (<>
     <Dialog open={open} onClose={CloseHandle}  >
    
         <DialogContent className={classes.RegisterCss}>
    
            <Grid direction="row" container style={{border:'1px solid silver',padding:'1.5%',borderRadius:'8px'}}>
                <Box style={{padding:'1.5%'}} >
             <Box  justify="center" align="center">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpD7Df97cifS8fejSslGKIN11koreIKzPj2L73CbZmT9obgTCNCjPz_DZE2mzMS5vcTuU&usqp=CAU" height="120px" style={{marginBottom:'1%'}}></img>
                            <h2 style={{marginBottom:'5%'}}>Reset Your Password</h2>

             </Box>
             <Box direction="row" container  >
                            <form onSubmit={ResetPasswordIntoDB}>
                            <div className="form-group row" style={{marginBottom:'10px'}}>
                            <label for="inputPassword3" className=" col-form-label">New Password</label>
                                <div >
                                <input minLength='6' maxLength="15" value={newPassword} onChange={NewPassword}  required type="password" className="form-control" id="inputEmail3" placeholder="Enter your old password"></input>
                                </div>
                            </div>
                            <div className="form-group row" style={{marginBottom:'10px'}}>
                            <label for="inputAddress" className="form-label">Confirm Password</label>
                                <div >
                                <input minLength='6' maxLength="15" value={confirmPassword} onChange={ConfirmPassword}  required type="password" className="form-control" id="inputEmail3" placeholder="Enter your  new password"></input>
                                </div>
                            </div>
                              <Box align="center" style={{marginTop:'6%'}}>
                              <span to="#" style={{textDecoration:'none'}}>     <Button type="submit"  startIcon={<LoginIcon/>}  variant="contained" className="SignInClass" style={{background:'#186494',width:'100%',borderRadius:'5px',textTransform:'capitalize',fontSize:'14px',color:'white'}}>Reset Now</Button></span><br></br>
                                       
                              </Box>
                            
                            </form>            
                                                    
                     
                    </Box> </Box>
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
export default ResetPassword