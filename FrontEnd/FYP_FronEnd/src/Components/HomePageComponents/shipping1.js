import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DateRangeIcon from '@mui/icons-material/DateRange';
const FreeShopping1 = () => {
    return (
        <>
            <Paper  style={{marginTop:'0.6%',borderRadius:'0px',padding:'5%'}}>
         <center> <h1 style={{color:'#186494',fontFamily:'Brush Script MT',fontWeight:'bold',marginBottom:'5%'}}>Benefits You Will Get Using Our Services</h1></center>  
                <Grid container direction="row" align="center" justify="center"> 
                
                        <Grid item md={3} style={{padding:'20px'}}>
                          <div><StarPurple500Icon style={{ transform: 'scale(1.8)',color:'#88bd80',marginBottom:'7%'}}  /></div>
                          <span style={{fontSize:'22px',fontWeight:'bold',color:'black'}}> Best Quality</span> 
                            <p style={{textAlign:'center'}}>We Provide best quality of products.</p>
                        </Grid>
                        <Grid item md={3} style={{padding:'20px'}}>
                          <div><DateRangeIcon style={{ transform: 'scale(1.8)',color:'#c28174',marginBottom:'7%'}}  /></div>
                          <span style={{fontSize:'22px',fontWeight:'bold',color:'black'}}> Warranty</span> 
                            <p style={{textAlign:'center'}}>We Provide warranty of products.</p>
                        </Grid>
                        <Grid item md={3} style={{padding:'20px'}}>
                          <div><LoyaltyIcon style={{ transform: 'scale(1.8)',color:'#e6c187',marginBottom:'7%'}}  /></div>
                          <span style={{fontSize:'22px',fontWeight:'bold',color:'black'}}> Original</span> 
                            <p style={{textAlign:'center'}}>Our products are original</p>
                        </Grid>
                        <Grid item md={3} style={{padding:'20px'}}>
                          <div><LocalShippingIcon style={{ transform: 'scale(1.8)',color:'#96928a',marginBottom:'7%'}} /></div>
                          <span style={{fontSize:'22px',fontWeight:'bold',color:'black'}}> Free Shipping</span> 
                            <p style={{textAlign:'center'}}>We provide free shipping service.</p>
                        </Grid>
                </Grid>
            </Paper>  
        </>
    )
}

export default FreeShopping1
