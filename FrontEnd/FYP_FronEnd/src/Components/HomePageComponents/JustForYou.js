import  React,{useEffect,useState}from "react";
import axios from "axios";
import { Box, Grid, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { Paper } from "@material-ui/core";
import { setCategory } from "../../Redux/Action/actions";
import { setSubCategory } from "../../Redux/Action/actions";
import {  useCart } from "react-use-cart";
import { setShipper } from "../../Redux/Action/actions";
import { setRating } from "../../Redux/Action/actions";
import { setProduct } from "../../Redux/Action/actions";

// import DetailsIcon from '@mui/icons-material/Details';
import '../../App.css';
import { makeStyles } from "@material-ui/core";
import { useSelector,useDispatch } from "react-redux";
import { setAddToCart } from './../../Redux/Action/actions';
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
  }
  
  

})
const NewArivalProducts=()=>
{
   const [products,setProducts]=useState([])
   const dispatch=useDispatch()
   const classes=useStyle()
   const { addItem } = useCart();
   const getProducts=async()=>
   {
       const response=await axios.get('http://127.0.0.1:8000/api/products/')
      //  const response=await axios.get('https://pakelectronicsapi.herokuapp.com/productapi/')
       setProducts(response.data)
       dispatch(setProduct(response.data))
   }
   const getCategory=async()=>
   {
      const response=await axios.get('http://127.0.0.1:8000/api/category/')
      dispatch(setCategory(response.data)) 
   }
   const getSubCategory=async()=>
   {
      const response=await axios.get('http://127.0.0.1:8000/api/subcategory/')
      dispatch(setSubCategory(response.data))    
   }
  
   const getShipper=async()=>
   {
      const response=await axios.get('http://127.0.0.1:8000/api/shipper/')
      dispatch(setShipper(response.data))    
   }
   const getRating=async()=>
   {
      const response=await axios.get('http://127.0.0.1:8000/api/rating/')
      dispatch(setRating(response.data))    
   }
   useEffect(()=>
   {
        getProducts();
        getCategory();
        getSubCategory();
        getRating();
        getShipper();

   },[])
   const category=useSelector((state)=>state.allCategory.categories);
    return (<>
 
   <Paper  elevation={1} style={{marginTop:'0.6%',paddingLeft:'1.2%',paddingRight:'1.2%',paddingBottom:'1.2%',paddingTop:'0.6%',borderRadius:'0px'}}>
   <Box>
     <Typography><h3 style={{fontFamily:'initial'}}>Just For You</h3></Typography>
   </Box>
   <0++hr style={{color:'gray',marginBottom:'1.3%'}}></hr>
   <Grid container direction="row" spacing={2} >
    {
    
     
      products.map((item,index) =>
      { 
       
          if(item.category.category_name==="Mobile"||item.category.category_name==="Camera"||item.category.category_name==="Smart Watch")
          {
            if(index<12)
            {
              return (<>
                <Grid item md={2} sm={6}  >
              
              <Box style={{border:'1px solid silver',padding:'15px',borderRadius:'5px'}} className={classes.Card}>
              <NavLink to={`/${item.product_id}/`} style={{textDecoration:'none'}} key={item.product_id}>
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
             {/* <Button onClick={() => addItem(item)}  variant="contained" className="SignInClass" style={{marginLeft:'2px',padding:'8px',background:'#ffa012',width:'150px',textTransform:'capitalize',fontSize:'14px'}}>Add To Cart</Button> */}
            
                      </Box>
                    </NavLink>
                    </Box>
            </Grid>
            
              </>)
          }
  
        }    
       
      
      })
    }
   
   </Grid>
   </Paper>
    </>)
}
export default NewArivalProducts