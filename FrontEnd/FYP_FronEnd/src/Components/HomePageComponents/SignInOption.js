import React from "react";
import Button from '@material-ui/core/Button';
import { Paper } from "@material-ui/core";
import LoginIcon from '@mui/icons-material/Login';
import { NavLink } from "react-router-dom";
const SignInOption=()=>
{
    return (<>
      {
        (localStorage.getItem('login_user'))?
        <span></span>
        :
        <Paper>
        <div style={{textAlign:'center',paddingTop:'2%',paddingBottom:'2%'}}>
        <div style={{borderTop:'1px solid silver',paddingTop:'1%',borderBottom:'1px solid silver',paddingBottom:'1%'}}>
            <span style={{fontSize:'15px'}}>See personalized recommendations</span><br></br>
       <NavLink to="#" style={{textDecoration:'none'}}>     <Button startIcon={<LoginIcon/>} variant="contained" className="SignInClass" style={{background:'#186494',color:'white',width:'250px',textTransform:'capitalize',fontSize:'14px'}}>Sign In</Button></NavLink><br></br>
       <NavLink to="#" style={{textDecoration:'none'}}>      <span style={{fontSize:'15px',color:'black'}}>New customer? Start here.</span></NavLink>
            </div>
        </div>
        </Paper>
      }
   
  
    </>)
}
export default SignInOption