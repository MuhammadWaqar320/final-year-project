import React,{useState,useEffect} from "react";
import { Dialog,DialogContent, Grid, Hidden} from '@mui/material';
import { makeStyles,Box } from "@material-ui/core";
import TextField from '@mui/material/TextField';
import man from '../Images/man.png'
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { setCustomer } from "../../Redux/Action/actions";
import useMediaQuery from '@mui/material/useMediaQuery';
import IconButton from '@mui/material/IconButton';
import swal from 'sweetalert';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@material-ui/core/Button';
import LoginIcon from '@mui/icons-material/Login';
import { NavLink } from "react-router-dom";

import { useTheme } from '@mui/material/styles';
import emailjs from 'emailjs-com';
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
const Register=({open,close})=>
{
    const initializeValue={
        login:
        {
            view:'login'
        },
        regis:
        {
            view: 'regis'

        }
    }
    const [account,setAccount]=useState(initializeValue.login)
    const [Name,setName]=useState("")
    const [Email,setEmail]=useState("")
    const [PhoneNo,setPhoneNo]=useState("")
    const [Password,setPassword]=useState("")
    const [address,SetAddress]=useState("")
    const [zipCode,setZipCode]=useState()
    const [city,setCity]=useState("")
    const [province,setProvince]=useState("")

    const [loginEmail,setloginEmail]=useState("")
    const [loginPassword,setloginPassword]=useState("")
    const history=useHistory()
    const CustomerData=useSelector((state)=>state.allCustomer.customer)
    const dispatch=useDispatch();


   
 
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
    const AddressHandler=(e)=>
    {
        let address=e.target.value
        SetAddress(address) 
    }
    const ZipCodeHandler=(e)=>
    {
        let zip=e.target.value
        setZipCode(zip) 
    }
    const CityHandler=(e)=>
    {
        let city=e.target.value
        setCity(city) 
    }
    const ProvinceHandler=(e)=>
    {
        let Province=e.target.value
        setProvince(Province) 
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
        setAccount(initializeValue.login)
    }
    
    const getCustomer=async()=>
    {
       const response=await axios.get('http://127.0.0.1:8000/api/customer/')
       dispatch(setCustomer(response.data))    
    }
    const LoginHandler=(e)=>
    { 
        let Dont_RefreshPage=e.preventDefault()
        console.log(loginEmail,loginPassword)
        const FilteredData=CustomerData.filter(SingleCustomer=>(SingleCustomer.customer_email===loginEmail)&&(SingleCustomer.customer_password===loginPassword))
        const isThisCustomerExist=FilteredData.length
        if(isThisCustomerExist>0)
        {
            CustomerData.map((SingleCustomer,index)=>
            {   
                if((SingleCustomer.customer_email===loginEmail)&&(SingleCustomer.customer_password===loginPassword))
                {
                    localStorage.setItem("login_user",SingleCustomer.customer_name)
                    localStorage.setItem("user_id",SingleCustomer.customer_id)
                    localStorage.setItem("user_address",SingleCustomer.customer_address)
                    localStorage.setItem("user_zipcode",SingleCustomer.customer_zipCode)
                    localStorage.setItem("user_city",SingleCustomer.customer_city)
                    localStorage.setItem("user_province",SingleCustomer.customer_province)
                    localStorage.setItem("user_email",SingleCustomer.customer_email)
                    CloseHandle()
                    history.push('/')
                    window.location.reload(false) 
                }
            })
        }
        else
        {
            swal({
                title: "Sorry!",
                text: "Email or password is incorrect",
                icon: "error",
                button: "OK",
              });  
        }
     
    }
    const RegisterCustomerIntoDB=async(e)=>
    {
        let Dont_RefreshPage=e.preventDefault()
        
        let formField=new FormData()
        formField.append('customer_phone',PhoneNo)
        formField.append('customer_password',Password)
        formField.append('customer_name',Name)
        formField.append('customer_email',Email)
        formField.append('customer_address',address)
        formField.append('customer_city',city)
        formField.append('customer_zipCode',zipCode)
        formField.append('customer_province',province)
        const isCustomerExistResponse=CustomerData.filter(isAlreadyExist=>(Email===isAlreadyExist.customer_email))
        console.log(CustomerData.customer_email)
        const isCustomerExist=isCustomerExistResponse.length
        if(isCustomerExist===0)
        {
            await axios({
                method:'post',
                url:'http://127.0.0.1:8000/api/customer/',
               
                data: formField,
                headers: {"content-type": "application/json"}
              }).then((res)=>
              {
                CloseHandle()
                emailjs.sendForm('service_jpnlcxa', 'template_0jmf6fv', e.target, 'user_qhdXozcGdCJSABA5OKAwU')
                .then((result) => 
                {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
                swal({
                    title: "Congratulation!",
                    text: "You have successfully registered",
                    icon: "success",
                    button: "OK",
                  });
                  window.location.reload(false) 
              })
              getCustomer()
        }
        else
        {
            swal({
                title: "Sorry!",
                text: "This user already exist",
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
   
    const AgainChangeAccountState=()=>
    {
        setAccount(initializeValue.login)
    }
    const ChangeAccountState=()=>
    {
        setAccount(initializeValue.regis)
    }
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
       getCustomer()
      

   },[])
    return (<>
    <Hidden smDown="true">
    <Dialog open={open} onClose={CloseHandle} fullScreen={fullScreen}  fullWidth
  maxWidth="sm">
         <DialogContent className={classes.RegisterCss}>
         
                {

                  account.view==='login'?
                    
                    <Grid direction="row" container >
                        
                        <Hidden mdDown={true}>
                        <Grid item md={4} style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
                            <Box>
                                <h2>Login Here</h2>
                                <p style={{textAlign:'justify'}}>  Get access to your Orders, Profile, View Prodcuts and Recommendations.
                                </p>
                            </Box>
                                <img width="100%" height="50%" src="https://media.istockphoto.com/vectors/password-login-verification-code-push-message-or-sms-for-2fa-notice-vector-id1226932404?k=20&m=1226932404&s=170667a&w=0&h=n1kB5ALJOqPJIdKWxscESOLysLaa6WglauzaZSsS3_E="></img>
                        </Grid>
                        </Hidden>
                        
                        <Grid item md={8} justify="center" align="center"> 
                            <img src={man} height="80px" style={{marginBottom:'1%'}}></img>
                            <h2 style={{marginBottom:'5%'}}>Well Come</h2>
                            <form onSubmit={LoginHandler}  sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                <div>
                                    <FormControl sx={{ width: '90%',marginBottom:'3%' }} variant="outlined">
                                        <TextField
                                        required
                                        id="outlined-textarea"
                                        label="Email"
                                        type="email"
                                        
                                        placeholder="Enter your email"
                                        onChange={(e)=>setloginEmail(e.target.value)}
                                        value={loginEmail}
                                        multiline />
                                    </FormControl>
                                    <FormControl sx={{ width: '90%',marginBottom:'0%'  }} variant="outlined">
                                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                        <OutlinedInput  required type="password"  onChange={(e)=>setloginPassword(e.target.value)} value={loginPassword} id="outlined-adornment-password" type={values.showPassword ? 'text' : 'password'} placeholder="Enter your password"
                                            // onChange={handleChange('password')}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end">
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                                </InputAdornment>
                                                    }
                                                label="Password"/>
                                        </FormControl>
                                        <Box align="left" style={{marginLeft:'5.5%',marginBottom:'8%'}}>
                                            <NavLink to="/forgotpassword" onClick={CloseHandle} style={{textDecoration:'none'}}>      <span style={{fontSize:'15px',color:'#186494'}}>Forgot password?</span></NavLink>
                  
                                        </Box>
                                            <span to="#" style={{textDecoration:'none'}}>     <Button type="submit"  startIcon={<LoginIcon/>} variant="contained" className="SignInClass" style={{background:'#186494',width:'90%',borderRadius:'5px',color:'white',textTransform:'capitalize',fontSize:'14px'}}>Login Now</Button></span><br></br>
                                            <NavLink to="#" style={{textDecoration:'none'}} onClick={()=>ChangeAccountState()}>      <span style={{fontSize:'15px',color:'black'}}>New Customer? Create an account.</span></NavLink>
                                </div>
                            </form>
                          

                           
                        </Grid>
                    </Grid>:

                     <Box direction="row" container style={{border:'1px solid silver',borderRadius:'8px',padding:'1.5%'}} >
                         <Box align="center" style={{marginBottom:'8%'}}>
                             <h1>Registration Form</h1>
                              </Box>
                            <form onSubmit={RegisterCustomerIntoDB}>
                            <div className="form-group row" style={{marginBottom:'10px'}}>
                                <label for="inputEmail3" className="col-sm-2 col-form-label">Name:</label>
                                <div className="col-sm-10">
                                <input value={Name} minLength="3" name="name" maxLength="20" pattern="[A-Z a-z]+" title="Only alphabets are allowed"  onChange={TextFieldHandler}  required type="text" className="form-control" id="inputEmail3" placeholder="Enter your name"></input>
                                </div>
                            </div>
                            <div className="form-group row" style={{marginBottom:'10px'}}>
                                <label for="inputEmail3" className="col-sm-2 col-form-label">Email:</label>
                                <div className="col-sm-10">
                                <input value={Email} onChange={EmailHandler} name="email"  required type="email" className="form-control" id="inputEmail3" placeholder="Enter your  email"></input>
                                </div>
                            </div>
                            <div className="form-group row" style={{marginBottom:'10px'}}>
                                <label for="inputPassword7" className="col-sm-2 col-form-label">PhoneNo:</label>
                                <div className="col-sm-10">
                                <input  required type="tel" minLength="10" maxLength="12"  pattern="[0-9-]+" title="Only numbers are allowed(0-9) " value={PhoneNo} onChange={PhoneHandler} className="form-control"  placeholder="051-XXXXXXX or 03-XXXXXXXX"></input>
                                </div>
                            </div>
                             <div className="form-group row" style={{marginBottom:'10px'}}>
                                <label for="inputPassword3" className="col-sm-2 col-form-label">Address:</label>
                                <div className="col-sm-10">
                                <input  required type="text" value={address} onChange={AddressHandler} minLength="5" maxLength="30"    className="form-control" placeholder="Enter your full address"></input>
                                </div>
                            </div>
                           <div className="row" style={{marginBottom:'10px'}}>
                                <div class="col-md-4">
                                    <div className="row">
                                     
                                        <label for="inputPassword3" className="col-md-6 col-form-label">Zip Code:</label>
                                     
                                        <div className="col-md-6">  
                                            <input type="tel" pattern="[0-9-]+" class="form-control" value={zipCode} onChange={ZipCodeHandler}  id="inputZip" minLength="3" maxLength="20" title="Only numbers are allowed" required></input>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div className="row">
                                    <label for="inputPassword3" className="col-md-4 col-form-label">Province:</label>
                                        <div className="col-md-8">  
                                            <input type="text" class="form-control" value={province} onChange={ProvinceHandler}  id="inputZip" minLength="3" maxLength="20" pattern="[A-Z a-z]+" title="Only alphabets are allowed" required></input>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div className="row">
                                    <label for="inputPassword3" className="col-md-3 col-form-label">City:</label>
                                        <div className="col-md-9">  
                                            <input type="text" class="form-control" value={city} onChange={CityHandler} id="inputZip" minLength="3" maxLength="20" pattern="[A-Z a-z]+" title="Only alphabets are allowed" required></input>
                                        </div>
                                    </div>
                                </div>
                               
                           </div>
                          
                            <div className="form-group row" style={{marginBottom:'10px'}}>
                                <label for="inputPassword3" className="col-sm-2 col-form-label">Password:</label>
                                <div className="col-sm-10">
                                <input minLength='6' maxLength="15" value={Password} required type="password" onChange={PasswordHandler} className="form-control" id="inputPassword3" placeholder="Enter your password"></input>
                                </div>
                            </div>
                            <div className="form-check form-check-inline" style={{marginBottom:'30px'}}>
                                <input value="" required className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                                <label className="form-check-label" for="inlineCheckbox1">I agree with terms and conditions</label>
                            </div>
                              <Box align="center">
                              <span to="#" style={{textDecoration:'none'}}>     <Button type="submit"  startIcon={<LoginIcon/>}  variant="contained" className="SignInClass" style={{background:'#186494',color:'white',width:'300px',borderRadius:'5px',textTransform:'capitalize',fontSize:'14px'}}>Register Now</Button></span><br></br>
                                            <NavLink to="#" style={{textDecoration:'none'}} onClick={()=>AgainChangeAccountState()} >      <span style={{fontSize:'15px',color:'black'}}>Have already an account? login here.</span></NavLink>
                              </Box>
                            
                            </form>            
                                                    
                     
                    </Box>
                }
         
         </DialogContent>
         <Hidden mdDown={true}>
            <Box style={{textAlign:'right',marginRight:'2%',marginBottom:'1.2%'}}>
                <button type="button" className="btn-close" aria-label="Close" onClick={CloseHandle}></button>
            </Box>     
         </Hidden>
        
     </Dialog>
    </Hidden>
    <Hidden smUp="true">
    <Dialog open={open} onClose={CloseHandle} fullScreen={fullScreen}  fullWidth
  maxWidth="sm" style={{width:'360px'}}>
         <DialogContent className={classes.RegisterCss}>
         
                {

                  account.view==='login'?
                    
                    <Grid direction="row" container >
                        
                        <Hidden mdDown={true}>
                        <Grid item md={4} style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
                            <Box>
                                <h2>Login Here</h2>
                                <p style={{textAlign:'justify'}}>  Get access to your Orders, Profile, View Prodcuts and Recommendations.
                                </p>
                            </Box>
                                <img width="100%" height="50%" src="https://media.istockphoto.com/vectors/password-login-verification-code-push-message-or-sms-for-2fa-notice-vector-id1226932404?k=20&m=1226932404&s=170667a&w=0&h=n1kB5ALJOqPJIdKWxscESOLysLaa6WglauzaZSsS3_E="></img>
                        </Grid>
                        </Hidden>
                        
                        <Grid item md={8} justify="center" align="center"> 
                            <img src={man} height="80px" style={{marginBottom:'1%'}}></img>
                            <h2 style={{marginBottom:'5%'}}>Well Come</h2>
                            <form onSubmit={LoginHandler}  sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                <div>
                                    <FormControl sx={{ width: '90%',marginBottom:'3%' }} variant="outlined">
                                        <TextField
                                        required
                                        id="outlined-textarea"
                                        label="Email"
                                        type="email"
                                        
                                        placeholder="Enter your email"
                                        onChange={(e)=>setloginEmail(e.target.value)}
                                        value={loginEmail}
                                        multiline />
                                    </FormControl>
                                    <FormControl sx={{ width: '90%',marginBottom:'0%'  }} variant="outlined">
                                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                        <OutlinedInput  required type="password"  onChange={(e)=>setloginPassword(e.target.value)} value={loginPassword} id="outlined-adornment-password" type={values.showPassword ? 'text' : 'password'} placeholder="Enter your password"
                                            // onChange={handleChange('password')}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end">
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                                </InputAdornment>
                                                    }
                                                label="Password"/>
                                        </FormControl>
                                        <Box align="left" style={{marginLeft:'5.5%',marginBottom:'8%'}}>
                                            <NavLink to="/forgotpassword" onClick={CloseHandle} style={{textDecoration:'none'}}>      <span style={{fontSize:'15px',color:'#186494'}}>Forgot password?</span></NavLink>
                  
                                        </Box>
                                            <span to="#" style={{textDecoration:'none'}}>     <Button type="submit"  startIcon={<LoginIcon/>} variant="contained" className="SignInClass" style={{background:'#186494',width:'90%',borderRadius:'5px',color:'white',textTransform:'capitalize',fontSize:'14px'}}>Login Now</Button></span><br></br>
                                            <NavLink to="#" style={{textDecoration:'none'}} onClick={()=>ChangeAccountState()}>      <span style={{fontSize:'15px',color:'black'}}>New Customer? Create an account.</span></NavLink>
                                </div>
                            </form>
                          

                           
                        </Grid>
                    </Grid>:

                     <Box direction="row" container style={{border:'1px solid silver',borderRadius:'8px',padding:'1.5%'}} >
                         <Box align="center" style={{marginBottom:'8%'}}>
                             <h1>Registration Form</h1>
                              </Box>
                            <form onSubmit={RegisterCustomerIntoDB}>
                            <div className="form-group row" style={{marginBottom:'10px'}}>
                                <label for="inputEmail3" className="col-sm-2 col-form-label">Name:</label>
                                <div className="col-sm-10">
                                <input value={Name} minLength="3" name="name" maxLength="20" pattern="[A-Z a-z]+" title="Only alphabets are allowed"  onChange={TextFieldHandler}  required type="text" className="form-control" id="inputEmail3" placeholder="Enter your name"></input>
                                </div>
                            </div>
                            <div className="form-group row" style={{marginBottom:'10px'}}>
                                <label for="inputEmail3" className="col-sm-2 col-form-label">Email:</label>
                                <div className="col-sm-10">
                                <input value={Email} onChange={EmailHandler} name="email"  required type="email" className="form-control" id="inputEmail3" placeholder="Enter your  email"></input>
                                </div>
                            </div>
                            <div className="form-group row" style={{marginBottom:'10px'}}>
                                <label for="inputPassword7" className="col-sm-2 col-form-label">PhoneNo:</label>
                                <div className="col-sm-10">
                                <input  required type="tel" minLength="10" maxLength="12"  pattern="[0-9-]+" title="Only numbers are allowed(0-9) " value={PhoneNo} onChange={PhoneHandler} className="form-control"  placeholder="051-XXXXXXX or 03-XXXXXXXX"></input>
                                </div>
                            </div>
                             <div className="form-group row" style={{marginBottom:'10px'}}>
                                <label for="inputPassword3" className="col-sm-2 col-form-label">Address:</label>
                                <div className="col-sm-10">
                                <input  required type="text" value={address} onChange={AddressHandler} minLength="5" maxLength="30"    className="form-control" placeholder="Enter your full address"></input>
                                </div>
                            </div>
                           <div className="row" style={{marginBottom:'10px'}}>
                                <div class="col-md-4">
                                    <div className="row">
                                     
                                        <label for="inputPassword3" className="col-md-6 col-form-label">Zip Code:</label>
                                     
                                        <div className="col-md-6">  
                                            <input type="tel" pattern="[0-9-]+" class="form-control" value={zipCode} onChange={ZipCodeHandler}  id="inputZip" minLength="3" maxLength="20" title="Only numbers are allowed" required></input>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div className="row">
                                    <label for="inputPassword3" className="col-md-4 col-form-label">Province:</label>
                                        <div className="col-md-8">  
                                            <input type="text" class="form-control" value={province} onChange={ProvinceHandler}  id="inputZip" minLength="3" maxLength="20" pattern="[A-Z a-z]+" title="Only alphabets are allowed" required></input>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div className="row">
                                    <label for="inputPassword3" className="col-md-3 col-form-label">City:</label>
                                        <div className="col-md-9">  
                                            <input type="text" class="form-control" value={city} onChange={CityHandler} id="inputZip" minLength="3" maxLength="20" pattern="[A-Z a-z]+" title="Only alphabets are allowed" required></input>
                                        </div>
                                    </div>
                                </div>
                               
                           </div>
                          
                            <div className="form-group row" style={{marginBottom:'10px'}}>
                                <label for="inputPassword3" className="col-sm-2 col-form-label">Password:</label>
                                <div className="col-sm-10">
                                <input minLength='6' maxLength="15" value={Password} required type="password" onChange={PasswordHandler} className="form-control" id="inputPassword3" placeholder="Enter your password"></input>
                                </div>
                            </div>
                            <div className="form-check form-check-inline" style={{marginBottom:'30px'}}>
                                <input value="" required className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                                <label className="form-check-label" for="inlineCheckbox1">I agree with terms and conditions</label>
                            </div>
                              <Box align="center">
                              <span to="#" style={{textDecoration:'none'}}>     <Button type="submit"  startIcon={<LoginIcon/>}  variant="contained" className="SignInClass" style={{background:'#186494',color:'white',width:'300px',borderRadius:'5px',textTransform:'capitalize',fontSize:'14px'}}>Register Now</Button></span><br></br>
                                            <NavLink to="#" style={{textDecoration:'none'}} onClick={()=>AgainChangeAccountState()} >      <span style={{fontSize:'15px',color:'black'}}>Have already an account? login here.</span></NavLink>
                              </Box>
                            
                            </form>            
                                                    
                     
                    </Box>
                }
         
         </DialogContent>
         <Hidden mdDown={true}>
            <Box style={{textAlign:'right',marginRight:'2%',marginBottom:'1.2%'}}>
                <button type="button" className="btn-close" aria-label="Close" onClick={CloseHandle}></button>
            </Box>     
         </Hidden>
        
     </Dialog>
</Hidden>
    
    </>)
}
export default Register