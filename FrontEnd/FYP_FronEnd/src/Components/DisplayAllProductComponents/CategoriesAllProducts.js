import  React,{useEffect,useState}from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { Paper } from "@material-ui/core";
import '../../App.css';
import { makeStyles } from "@material-ui/core";
import { useSelector,useDispatch } from "react-redux";
import Pagination from "./pagination";
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
const CategoriesAllProducts=()=>
{

    const dispatch=useDispatch()
    const classes=useStyle()
    const Allproduct=useSelector((state)=>state.allProducts.product)
    const Computer=localStorage.getItem("computerKey")
    const Laptop=localStorage.getItem("laptopKey")
    const Camera=localStorage.getItem("CameraKey")
    const SmartWatch=localStorage.getItem("smKey")
    const Tablet=localStorage.getItem("TabletKey")
    const Mobile=localStorage.getItem("mobileKey")
    const AllPro=localStorage.getItem("allpro")
    const [showPerPage, setShowPerPage] = useState(8);
    const [pagination, setPagination] = useState({
      start: 0,
      end: showPerPage,
    });
  
    const onPaginationChange = (start, end) => {
      setPagination({ start: start, end: end });
    };

  
    return (<>
 
        <Paper  elevation={1} style={{marginTop:'0.6%',paddingLeft:'1.2%',paddingRight:'1.2%',paddingBottom:'1.2%',paddingTop:'0.6%'}}>
        <Box>
          <Typography><h3 style={{fontFamily:'initial',textAlign:'center'}}>{ AllPro||Computer||Mobile||Laptop||Camera||SmartWatch||Tablet}s</h3></Typography>
   
        </Box>
        <hr style={{color:'gray',marginBottom:'1.3%'}}></hr>
        <Grid container direction="row" spacing={2} >
         {
           AllPro?
                  Allproduct.slice(pagination.start, pagination.end).map((item,index) =>
                  { 
                          return (<>
                            <Grid item md={2} sm={6}  >
                          
                          <Box style={{border:'1px solid silver',padding:'15px',borderRadius:'5px'}} className={classes.Card}>
                          <NavLink to={`/${item.product_id}/`} style={{textDecoration:'none'}} >
                                  <Box textAlign="center" key={item.id} style={{marginRight:'10px',borderRadius:'2px',paddingBottom:'15px',marginRight:'0px'}}>
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
                
                  :
                  Allproduct.filter(Good=>(   (Computer)===(Good.category.category_name)||(Mobile)===(Good.category.category_name)||(Laptop)===(Good.category.category_name)||(Camera)===(Good.category.category_name)||(Tablet)===(Good.category.category_name)||(SmartWatch)===(Good.category.category_name)    )).map((item,index) =>
                  { 
                          return (<>
                            <Grid item md={2} sm={6}  >
                          {}
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
        <Box style={{marginTop:'2%'}}>
        <Pagination
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          total={Allproduct.length}
        />
        </Box>
      
        </Paper>
         </>)
}
export default CategoriesAllProducts







