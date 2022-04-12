import { Grid, Hidden } from "@material-ui/core";
import React from "react";
import { Paper } from "@material-ui/core";
import { NavLink } from "react-router-dom";
const AccessoriesComponent=()=>
{
   const ComputerFun=()=>
   {
      localStorage.setItem("computerKey","Computer")
      localStorage.removeItem("laptopKey")
      localStorage.removeItem("CameraKey")
      localStorage.removeItem("smKey")
      localStorage.removeItem("TabletKey")
      localStorage.removeItem("mobileKey")
      localStorage.removeItem("allpro")

   }
   const LaptopFun=()=>
   {
      localStorage.setItem("laptopKey","Laptop")
      localStorage.removeItem("computerKey")
      localStorage.removeItem("CameraKey")
      localStorage.removeItem("smKey")
      localStorage.removeItem("TabletKey")
      localStorage.removeItem("mobileKey")
      localStorage.removeItem("allpro")

   }
   const CameraFun=()=>
   {
      localStorage.setItem("CameraKey","Camera")
      localStorage.removeItem("laptopKey")
      localStorage.removeItem("computerKey")
      localStorage.removeItem("smKey")
      localStorage.removeItem("TabletKey")
      localStorage.removeItem("mobileKey")
      localStorage.removeItem("allpro")

   }
   const SmartWatchFun=()=>
   {
      localStorage.setItem("smKey","SmartWatch")
      localStorage.removeItem("laptopKey")
      localStorage.removeItem("CameraKey")
      localStorage.removeItem("computerKey")
      localStorage.removeItem("TabletKey")
      localStorage.removeItem("mobileKey")
      localStorage.removeItem("allpro")
      

   }
   const TabletFun=()=>
   {
      localStorage.setItem("TabletKey","Tablet")
      localStorage.removeItem("laptopKey")
      localStorage.removeItem("CameraKey")
      localStorage.removeItem("smKey")
      localStorage.removeItem("computerKey")
      localStorage.removeItem("mobileKey")
      localStorage.removeItem("allpro")

   }
   const  MobileFun=()=>
   {
      localStorage.setItem("mobileKey","Mobile")
      localStorage.removeItem("laptopKey")
      localStorage.removeItem("CameraKey")
      localStorage.removeItem("smKey")
      localStorage.removeItem("TabletKey")
      localStorage.removeItem("computerKey")
      localStorage.removeItem("allpro")

   }
    return (<>
    <Hidden smDown="true">
       <Paper elevation={10}>
       <Grid container   justify="center" align="center" style={{color:'#081333',overflowX:'auto'}}>
        <Grid item md={2} className="AccessoriesClass">
           <div style={{margin:'5%'}}>
      <NavLink to="/FilterProducts" onClick={ComputerFun} style={{textDecoration:'none',color:'black'}}>     <i className="fa fa-desktop" aria-hidden="true"></i>  <p>Computer</p></NavLink>
           </div>
        </Grid>
        <Grid item md={2} >
        <div style={{margin:'5%'}} className="AccessoriesClass">
        <NavLink to="/FilterProducts" onClick={LaptopFun} style={{textDecoration:'none',color:'black'}}>        <i className="fas fa-laptop-code"></i>  <p>Laptop</p>  </NavLink>  
           </div>
        </Grid>
        <Grid item md={2} >
        <div style={{margin:'5%'}} className="AccessoriesClass">
        <NavLink to="/FilterProducts" onClick={MobileFun} style={{textDecoration:'none',color:'black'}}>        <i className="fas fa-mobile-alt"></i>  <p>Mobile</p>  </NavLink>  
           </div>
        </Grid>
        <Grid item md={2} >
        <div style={{margin:'5%'}} className="AccessoriesClass">
        <NavLink to="/FilterProducts" onClick={TabletFun} style={{textDecoration:'none',color:'black'}}>          <i className="fas fa-tv"></i>  <p>Tablet</p>  </NavLink>  
           </div>
        </Grid>
        <Grid item md={2} className="AccessoriesClass">
        <div style={{margin:'5%'}}>
        <NavLink to="/FilterProducts" onClick={CameraFun} style={{textDecoration:'none',color:'black'}}>         <i className="fa fa-camera-retro" aria-hidden="true"></i>  <p>Camera</p>  </NavLink>  
           </div>
        </Grid>
        <Grid item md={2} >
        <div style={{margin:'5%'}} className="AccessoriesClass">
        <NavLink to="/FilterProducts" onClick={SmartWatchFun} style={{textDecoration:'none',color:'black'}}>        <i className="fa fa-list-alt" aria-hidden="true"></i>  <p>Smart Watch</p>     </NavLink>  
           </div>
        </Grid>
    </Grid>
       </Paper>
  
    </Hidden>
   
    
    </>)
}
export default AccessoriesComponent