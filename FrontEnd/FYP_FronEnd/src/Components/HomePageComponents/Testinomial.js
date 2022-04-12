import React,{useEffect,useState} from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Paper,Grid } from "@material-ui/core";
import Box from '@mui/material/Box';
import FeaturedProduct from "./FeaturedProduct";



const Testinomial=()=>
{
    const [shipper,setShipper]=useState([])
    const GetShipper=async()=>
    {
      const response=await axios.get('http://127.0.0.1:8000/api/shipper/')
      setShipper(response.data)

    }
    useEffect(
      ()=>
      {
        GetShipper()
      },[]
    )
    return (<>
   
    <Paper style={{height:'340px',marginTop:'0.6%'}}>
        <Grid container direction="row" justify="center" align="center">
        <Grid item md={8} style={{display:'flex',flexDirection:'column',justifyContent:'center',paddingLeft:'25px',paddingRight:'25px'}} className="testLeft">
             
             <FeaturedProduct />
         
                
            </Grid>
            <Grid item md={4} style={{}}>   <Carousel
              showArrows={true}
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              autoPlay={true}
              interval={6100}
              showIndicators={false}
              style={{paddingBottom:'20px'}}
              className="testinomial"
            >
           {
             shipper.map((item,index) =>
             (
             
                  <Paper elevation={24} style={{background:'#e2e2e2',paddingTop:'15px',borderRadius:'0px'}}>
                  <div>
                
                <img src={item.shipper_image} style={{border:'1px solid silver'}} />
                <div className="myCarousel">
                  <h3>{item.shipper_name}</h3>
                  <h4>Shipper</h4>
                  <p>
                   <span dangerouslySetInnerHTML={{ __html: item.shipper_detail.substring(0,135) }} />
                  
                  </p>
                </div>
              </div>
                  </Paper>
          
             ))
           }
           </Carousel></Grid>
        </Grid>
    </Paper>
   
    </>)
}
export default Testinomial