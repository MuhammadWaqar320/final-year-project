import React,{useEffect,useState,useRef} from "react";
import Carousel from "react-multi-carousel";
import axios from "axios";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from "react-router-dom";
import { Box, Button, Paper,Grid, Typography } from "@material-ui/core";
import GridViewIcon from '@mui/icons-material/GridView';
import { makeStyles } from "@material-ui/core";
import { Hidden } from "@mui/material";

import Countdown from 'react-countdown';
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };
const useStyle=makeStyles({
   image :{
    height:122,

   
    },
    BoxStyle:
    {
        marginTop:10,
        backgroundColor:'white'
        
    },
    Deal:
    {
        display:'flex'
    }
    ,
   
 
})
const Recommendations=()=>
{
    const classes=useStyle()
    const [products,setProducts]=useState([])
    const getProducts=async()=>
    {
        const response=await axios.get('http://127.0.0.1:8000/api/products/')
       //  const response=await axios.get('https://pakelectronicsapi.herokuapp.com/productapi/')
        setProducts(response.data)
    }
    useEffect(()=>
    {
         getProducts();
    },[])
  
      
    return (<>
    <Hidden mdDown="true">
    <Paper className={classes.BoxStyle} style={{marginTop:'0.6%',borderRadius:'0px'}}>
       
          <Grid  style={{paddingRight:'20px',paddingLeft:'20px',paddingTop:'20px'}}>
          <Box style={{display:'flex'}}>
          <Typography><h3 style={{fontFamily:'initial',color:'#081333'}}>Recommended For You</h3></Typography>
          <NavLink to="#" style={{textDecoration:'none',marginLeft:'auto'}}>     <Button startIcon={<GridViewIcon />} className="SignInClass" variant="contained" style={{background:'#186494',color:'white',textTransform:'capitalize',fontSize:'14px'}}>View All</Button></NavLink>
        </Box>
        <hr style={{color:'grey',marginBottom:'1.3%'}}></hr>
        <Carousel responsive={responsive} infinite={true}  autoPlay={true} keyBoardControl={true}  swipeable={false}
          draggable={false} ssr={true}  container Class="carousel-container"  >
          {
            products.map((item,index) =>
            (
                <NavLink to={`/${item.product_id}/`} style={{textDecoration:'none'}}>
                  <Box textAlign="center" className={classes.Card} style={{marginRight:'10px',borderRadius:'2px',paddingBottom:'15px',marginRight:'0px'}}>
                    <img className={classes.image} src={item.product_image}   alt="..."></img>
                    <Typography className={classes.Text} style={{color:'black',fontWeight:'bold',fontSize:'14px'}}>
                    {item.product_name}
                    </Typography >
                    <Typography className={classes.Text} style={{color:'green',opacity:'.6',fontSize:'14px'}}>
                    {item.product_brand}
                    </Typography >
                    <Typography className={classes.Text} style={{color:'#081333',fontSize:'14px',opacity:'.6'}}>
                      Price:{item.product_price}$
                    </Typography>
                  </Box>
                </NavLink>
            ))
          }
        </Carousel>
          </Grid>
      
       
      </Paper>
    </Hidden>
      
   
    </>)
}
export default Recommendations