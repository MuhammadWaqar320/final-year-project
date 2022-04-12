import { Paper } from "@material-ui/core";
import { Grid } from "@mui/material";
import React from "react";
import lpImage from '../Images/laptop1.webp';
import { Button } from "@mui/material";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import { NavLink } from "react-router-dom";
import '../../App.css';
const BeautifullLaptop=()=>
{
    const AllProductFun=()=>
  {
     localStorage.setItem("allpro","All Product")


  }
    return (<>
    <Paper style={{marginTop:'0.6%',borderRadius:'0px'}} >
           <Grid container direction="row" justify="center" align="center">
           <Grid item md={4} align="left"  style={{padding:'2%'}}>
                <h2 style={{fontWeight:'bold',color:'#186494',fontFamily:'Luminari'}}>Every Purchase Will Be Made With Pleasure<span style={{borderTopLeftRadius:'20px',borderBottomRightRadius:'20px',padding:'5px',marginLeft:'10px',background:' #f3ce73',color:'black'}}>20% OFF</span></h2>
                <p>
                    Buying of goods using internet.The PakElectronics is one of the fast-growing App. After the growth of online shopping, PakElectronics sales are reaching new heights.
                </p>
                <NavLink to="/FilterProducts"  onClick={AllProductFun} style={{textDecoration:'none'}}>     <Button startIcon={<ShoppingBagIcon />}   variant="contained" style={{borderRadius:'40px',background:'#186494',color:'white',textTransform:'capitalize',fontSize:'14px'}}>Purchase Now</Button></NavLink>
            </Grid>
               <Grid item md={6}>
                   <Grid container direction="row" justify="center" align="center">
                       <Grid item md={7}> <img src={lpImage} height="250px"></img></Grid>
                       <Grid item md={5} style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
                            <span style={{fontSize:'30px',fontWeight:'bold'}}> Beautiful Laptops</span>
                            <span style={{color:'#035efc',fontWeight:'bold',fontSize:'18px'}}>RETINA DISPLAY 18 READY!</span><br></br>
                            <NavLink to="/FilterProducts"  onClick={AllProductFun} style={{textDecoration:'none'}}>     <Button startIcon={<ShoppingBagIcon />} className="SignInClass" variant="contained" style={{borderRadius:'40px',background:'#186494',color:'white',textTransform:'capitalize',fontSize:'14px'}}>Shop Now</Button></NavLink><br></br>
                        </Grid>
                   </Grid>
               
                </Grid>
              
               <Grid item md={2} style={{marginLeft:'auto',display:'flex',flexDirection:'column',justifyContent:'center'}}>
     
 <NavLink to="#">         <img src="https://m.media-amazon.com/images/I/61E6SCbVCqL.jpg" width="100%" height="252px"></img></NavLink>
               </Grid>
                  
           </Grid>
    </Paper>
    </>)
}
export default BeautifullLaptop;