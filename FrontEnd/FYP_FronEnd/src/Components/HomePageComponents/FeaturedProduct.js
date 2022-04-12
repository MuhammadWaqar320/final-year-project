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
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
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
    height:120,

   
    },
    BoxStyle:
    {
   
        backgroundColor:'white'
        
    },
    Deal:
    {
        display:'flex'
    }
    ,
   
 
})
const MultiSlider=()=>
{
    const classes=useStyle()
    const [products,setProducts]=useState([])
    const [day,setDay]=useState([])
    const [hour,setHour]=useState([])
    const [minute,setMinute]=useState([])
    const [second,setSecond]=useState([])
    const [event,setEvent]=useState([])
    let interval=useRef();


  
    const getProducts=async()=>
    {
        const response=await axios.get('http://127.0.0.1:8000/api/products/')
       //  const response=await axios.get('https://pakelectronicsapi.herokuapp.com/productapi/')
        setProducts(response.data)
    }
    const getEvent=async()=>
    {
        const {data}=await axios.get(`http://localhost:8000/api/events/7/`)
      //  //  const response=await axios.get('https://pakelectronicsapi.herokuapp.com/productapi/')
      const count_down_date=new Date(data.event_Finish_Time).getTime()
      // console.log(new Date(event[0].event_Finish_Time).getDate())
     
      interval=setInterval(()=>
      {
        const Now_Date=new Date().getTime();
        const distance= count_down_date - Now_Date
        const days=Math.floor(distance/ (1000*60*60*24));
        const hours=Math.floor((distance % (1000*60*60*24))/(1000*60*60));
        const minutes=Math.floor((distance % (1000*60*60))/(1000*60));
        const seconds=Math.floor((distance % (1000*60))/(1000));
        if (distance <0)
        {
            clearInterval(interval.current)
        }
        else
        {
            setDay(days)
            setHour(hours)
            setMinute(minutes)
            setSecond(seconds)
        }
      },1000);
    }
   
    useEffect(()=>
    {
         getProducts();
       
         getEvent();
         return ()=>
         {
          clearInterval(interval.current)
         }
    },[])
    const AllProductFun=()=>
    {
       localStorage.setItem("allpro","All Product")
  
  
    }
      
    return (<>
    <Hidden mdDown="true">
    <Paper elevation={24} className={classes.BoxStyle} style={{padding:'20px'}}>
          <Box style={{display:'flex'}}>
          <Typography><h3 style={{fontFamily:'initial',color:'#081333'}}>Featured Products</h3></Typography>
          <NavLink to="/FilterProducts" onClick={AllProductFun} style={{textDecoration:'none',marginLeft:'auto'}}>     <Button startIcon={<GridViewIcon />} className="SignInClass" variant="contained" style={{borderRadius:'5px',background:'#186494',color:'white',textTransform:'capitalize',fontSize:'14px'}}>View All</Button></NavLink>
        </Box>
        <hr style={{color:'grey',marginBottom:'1.3%'}}></hr>
        <Carousel responsive={responsive} infinite={true}  autoPlay={true} keyBoardControl={true}  swipeable={false}
          draggable={false} ssr={true}  container className="carousel-container"  >
          {
            products.map((item,index) =>
            (
                <NavLink to={`/${item.product_id}/`} style={{textDecoration:'none'}}>
                  <Box textAlign="center" className={classes.Card} style={{marginRight:'10px',borderRadius:'2px',paddingBottom:'15px',marginRight:'0px'}}>
                    <img className={classes.image} src={item.product_image}   alt="..."></img>
                    <Typography className={classes.Text} style={{color:'black',fontWeight:'bold',fontSize:'14px'}}>
                    {item.product_name}
                 
                    </Typography >
                    <Typography className={classes.Text} style={{color:'#081333',fontSize:'14px',opacity:'.6'}}>
                      Price:{item.product_price}$
                    </Typography>
                  </Box>
                </NavLink>
            ))
          }
        </Carousel>
      
         
       
       
       
      </Paper>
    </Hidden>
      
   
    </>)
}
export default MultiSlider