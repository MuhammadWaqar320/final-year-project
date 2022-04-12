import React from "react";
import { Paper } from "@material-ui/core";
import { Grid } from "@mui/material";
import pic from '../../Components/Images/camera.png'
import lap from '../../Components/Images/lap.png'
import lpImage from '../Images/laptop1.webp';
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import CountUp from 'react-countup';

import { NavLink } from "react-router-dom";
import '../../App.css';
const DecrementCounter=()=>
{
    return (<>
     <Paper style={{marginTop:'0.6%',background:'#e3e3e3',borderRadius:'0px'}} >
           <Grid container direction="row" >
           <Grid item md={3} justify="right" align="right" style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
          <img height="180px" src={lap}></img>
            </Grid >
               
               
            <Grid item md={6} className="incrementClass" style={{display:'flex',flexDirection:'column',justifyContent:'center'}} justify="center" align="center">
                  <Box style={{fontSize:'30px',textTransform: 'capitalize'}}>TOTAL REGISTRATION</Box>
                  <Box style={{paddingBottom:'10px'}}>Total registered number of customers, products, shippers and suppliers are</Box>
                  <Box style={{display:'flex',justifyContent:'center'}}>
                        <div style={{border:'1px solid gray',backgroundColor: '#f3ce73',color:'#081333',marginRight:'10px',height:'110px',width:'110px',borderRadius:'50%',display:'flex',flexDirection:'column',justifyContent:'center'}}><span style={{fontSize:'25px'}}><span style={{fontWeight:'bold'}}>+</span><CountUp end={1000} duration={130} ></CountUp></span><span>Customers</span></div>
                        <div style={{border:'1px solid gray',backgroundColor: '#f3ce73',color:'#081333',marginRight:'10px',height:'110px',width:'110px',borderRadius:'50%',display:'flex',flexDirection:'column',justifyContent:'center'}}><span style={{fontSize:'25px'}}><span style={{fontWeight:'bold'}}>+</span><CountUp end={1000} duration={130} ></CountUp></span><span>Products</span></div>
                        <div style={{border:'1px solid gray',backgroundColor: '#f3ce73',color:'#081333',marginRight:'10px',height:'110px',width:'110px',borderRadius:'50%',display:'flex',flexDirection:'column',justifyContent:'center'}}><span style={{fontSize:'25px'}}><span style={{fontWeight:'bold'}}>+</span><CountUp end={1000} duration={130} ></CountUp></span><span>Shippers</span></div>
                        <div style={{ border:'1px solid gray',backgroundColor: '#f3ce73',color:'#081333',height:'110px',width:'110px',borderRadius:'50%',display:'flex',flexDirection:'column',justifyContent:'center'}}><span style={{fontSize:'25px'}}><span style={{fontWeight:'bold'}}>+</span><CountUp end={1000} duration={130} ></CountUp></span><span>Suppliers</span></div>
                   </Box>
                
            </Grid>
               
              
            <Grid item md={3}  >
     
               <img src={pic} style={{height:'260px'}}></img>
            </Grid>
                  
           </Grid>
    </Paper>
    </>)
}
export default DecrementCounter