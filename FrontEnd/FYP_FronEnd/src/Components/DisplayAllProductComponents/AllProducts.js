import  React,{useEffect,useState}from "react";
import axios from "axios";
import { Box, Grid, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import '../../App.css';
import { Hidden } from "@mui/material";
import Carousel from "react-multi-carousel";
import GridViewIcon from '@mui/icons-material/GridView';
import { makeStyles } from "@material-ui/core";
import { useSelector,useDispatch } from "react-redux";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6
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
    Card: {
    
     '&:hover': {
       boxShadow:' 0 0 15px 5px rgb(184, 183, 183)',
   },
   image :{
    height:122,

   
    }
    ,
   }
   
   
 
 })
const AllProducts=()=>
{
    const [products,setProducts]=useState([])
    const [ReCommend_products,setReCommend_products]=useState([])
    const dispatch=useDispatch()
    const classes=useStyle()
    const Allproduct=useSelector((state)=>state.allProducts.product)
    const SearchWord=localStorage.getItem("searchWord")
    const FilteredData=Allproduct.filter(Good=>Good.product_name.toLowerCase()===SearchWord.toLowerCase())

    const RecommendedProducts=async()=>
    {
        const recommendPro=await axios.get(`http://127.0.0.1:8000/api/search/${SearchWord}/`)
        setReCommend_products(JSON.parse(recommendPro.data));
        console.log("data"+ReCommend_products)
    }
    useEffect(()=>
    {
      RecommendedProducts();
    },[])
    if(FilteredData.length>0)
    {
      return (<>
        <Paper  elevation={1} style={{marginTop:'2%',paddingLeft:'1.2%',paddingRight:'1.2%',paddingBottom:'1.2%',paddingTop:'0.6%',marginLeft:'2%',marginRight:'2%'}}>
        <Box>
          <Typography><h3 style={{fontFamily:'initial',textAlign:'center'}}>Searched Products</h3></Typography>
        </Box>
        <hr style={{color:'gray',marginBottom:'1.3%'}}></hr>
        <Grid container direction="row" spacing={2} >
         {
           FilteredData.map((item,index) =>
           { 
              return (<>
              <Grid item md={2} sm={6}  >     
                   <Box style={{border:'1px solid silver',padding:'15px',borderRadius:'5px'}} className={classes.Card}>
                   <NavLink to={`/${item.product_id}/`} style={{textDecoration:'none'}} >
                           <Box textAlign="center"  style={{marginRight:'10px',borderRadius:'2px',paddingBottom:'15px',marginRight:'0px'}}>
                             <img className="Zoom" src={item.product_image}   alt="..."></img>
                             <Typography className={classes.Text} style={{color:'black',fontWeight:'bold',fontSize:'14px',marginTop:'5%'}}>
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
                         </Box>
                 </Grid>
                 
                   </>)
           })
         }
        
        </Grid>
        </Paper>
        <Hidden mdDown="true">
    <Paper className={classes.BoxStyle} style={{marginTop:'0.6%',marginBottom:'2%',marginLeft:'2%',marginRight:'2%'}}>
       
          <Grid  style={{paddingRight:'20px',paddingLeft:'20px',paddingTop:'20px'}}>
          <Box style={{display:'flex'}}>
          <Typography><h3 style={{fontFamily:'initial',color:'#081333'}}>  Recommended For You</h3></Typography>
        </Box>
        <hr style={{color:'grey',marginBottom:'1.3%'}}></hr>
      
        <Carousel responsive={responsive} infinite={true}  autoPlay={true} keyBoardControl={true}  swipeable={false}
          draggable={false} ssr={true}  container className="carousel-container"  >
          {
            ReCommend_products.map((item,index) =>
            {
              return (
                <NavLink to={`/${item.product_id}/`} style={{textDecoration:'none'}}>
                  {
                    Allproduct.map((productData)=>
                    {
                        
                      return item.product_id===productData.product_id?(

                        <Box textAlign="center"  style={{marginRight:'10px',borderRadius:'2px',paddingBottom:'15px',marginRight:'0px'}}>
                        <img className={classes.image} src={productData.product_image} height="200px"   alt="..."></img>
                        <Typography className={classes.Text} style={{color:'black',fontWeight:'bold',fontSize:'14px'}}>
                          {productData.product_name}  
                        </Typography >
                        <Typography className={classes.Text} style={{color:'green',opacity:'.6',fontSize:'14px'}}>
                          {productData.product_brand}
                        </Typography >
                        <Typography className={classes.Text} style={{color:'#081333',fontSize:'14px',opacity:'.6'}}>
                          Price:{productData.product_price}$
                        </Typography>
                      </Box>
                      ):
                      <span></span>
                    })
                  }
                  
                </NavLink>
                )
            }
            )
          }
        </Carousel>
          </Grid>
      
       
      </Paper>
    </Hidden>
      
         </>)
    }
    else
    {
      return (<>
      
     <Paper style={{paddingTop:'20%',paddingBottom:'20%'}}>
   <center><Paper elevation={24}  style={{display:"inline",borderRadius:'5px',fontSize:'28px',padding:'7%'}}>Sorry No Product Found</Paper></center>    
     </Paper>
      
      </>)
    }
    
}
export default AllProducts







