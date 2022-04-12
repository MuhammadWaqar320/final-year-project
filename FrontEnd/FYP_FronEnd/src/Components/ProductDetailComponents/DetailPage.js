import { Paper } from '@material-ui/core'
import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { useHistory, useParams } from 'react-router'
import { Grid } from '@mui/material';
import { makeStyles,Box } from '@material-ui/core'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { NavLink } from "react-router-dom";
import {useDispatch} from 'react-redux';
import Button from '@material-ui/core/Button';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DateRangeIcon from '@mui/icons-material/DateRange';
import CheckIcon from '@mui/icons-material/CheckBox';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import ButtonGroup from '@mui/material/ButtonGroup';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
// import 'react-medium-image-zoom/dist/styles.css'
import swal from 'sweetalert';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import FacebookIcon1 from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { addToCart } from '../../Redux/Action/actions';
import { jsPDF } from "jspdf";

import { Link } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import '../../App.css';
import { Avatar, Hidden } from '@material-ui/core';
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    
    PinterestShareButton,
   
    TelegramShareButton,
   
    TwitterShareButton,

    WhatsappShareButton,
 
  }   from "react-share";
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
const useStyle=makeStyles(
    {
       
        ButtonClass:
        {
            marginTop:20
        },
        ImgClass:
        {
           height:400,
     
        }
    }
)
const ProductDetail=()=>
{
    const [value, setValue] = React.useState(0);
    const cutomer_name=localStorage.getItem('login_user')
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const classes=useStyle()
    const [product,setproduct]=useState("")
    const { id }=useParams();
    const [Quantity,setQuantity]=useState(1);
    const usehistory=useHistory()
  
    const [rating, setRating] = useState(0) // initial rating value
    let avg=0;
    const getSingleProduct=async()=>
    {
        const {data}=await axios.get(`http://127.0.0.1:8000/api/products/${id}/`)
        setproduct(data)
    }
    const GeneratePdf=()=>
    {
        const doc = new jsPDF();

        doc.text(product.product_description, 10, 10);
        doc.save("ProductDescription.pdf");
    }
    const dispatch=useDispatch();
    const addItemToCart =async(e) => {
        let notRefresh=e.preventDefault();
        if(cutomer_name)
        {
            const cartData=new FormData();
            cartData.append('product',product.product_name)
            cartData.append('customer',cutomer_name)
            cartData.append('product_Qty',Quantity)
            cartData.append('product_id',product.product_id)
            cartData.append('price',product.product_price)
            const res=await axios.get('http://127.0.0.1:8000/api/addTocart/')
            const AllCartData=res.data
            const FilteredData=AllCartData.filter(SingleItem=>(SingleItem.product===product.product_name)&&(SingleItem.customer===cutomer_name))
            if(FilteredData.length===0)
            {
                await axios({
                    method:'post',
                    url:'http://127.0.0.1:8000/api/addTocart/',
                    data: cartData,
                    headers: {"content-type": "multipart/form-data"}
                  }).then((res)=>
                  {       
                    swal({
                        title: "Success",
                        text: "Added into Cart",
                        icon: "success",
                        button: "OK",
                      });
                      window.location.reload(false); 
                  })
            }
            else
            {
                swal({
                    title: "Error",
                    text: "Already Added",
                    icon: "error",
                    button: "OK",
                  });
                 
            }
           
           
        }
        else{
            swal({
                title: "Error",
                text: "Please login to purchase",
                icon: "error",
                button: "OK",
              });
        }
     
       
    }
   
    const IncrementFun=()=>
    {
        if(Quantity<20)
        {
            setQuantity(Quantity+1)
        }
    }
    const DecrementFun=()=>
    {
        if(Quantity>1)
        {
            setQuantity(Quantity-1)
        }
        console.log(Quantity)
    }
    useEffect(()=>
    {
        getSingleProduct();
    },[])

    return (<>
    <Hidden smDown="true">
    <Paper  className="DetailPageClass">
                <Grid container direction="row" justify="center" align="center">
                    <Grid item md={12}><h1 style={{marginBottom:'1%'}}>Information About {product.product_name}</h1> </Grid>
                </Grid>
                <Grid container direction="row" spacing={2}>
                    <Grid item md={4} justify="center" align="center">
                    <Box  style={{padding:'3%'}}>
                        <TransformWrapper>
                            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                            <React.Fragment>
                                <Box className="tools" style={{marginBottom:'1%'}}>
                                    <button onClick={() => zoomIn()} style={{marginRight:'5px',border:'1px solid silver'}}><ZoomInIcon /></button>
                                    <button onClick={() => zoomOut()} style={{marginRight:'5px',border:'1px solid silver'}}><ZoomOutIcon /></button>
                                    <button onClick={() => resetTransform()} style={{border:'1px solid silver'}}><SettingsBackupRestoreIcon /></button>
                                </Box>  
                                <TransformComponent>
                                  
                                    <img style={{width:'100%'}} src={product.product_image} alt="test"  className={classes.ImgClass} /> 
                                   
                                   
                                </TransformComponent> 
                            </React.Fragment>
                            )}
                        </TransformWrapper>
                        <Box className={classes.ButtonClass}> 
            
                            <NavLink to='#' style={{textDecoration:'none'}}>     <Button onClick={addItemToCart} startIcon={<ShoppingBasketIcon/>} variant="contained" className="SignInClass" style={{marginLeft:'2px',padding:'8px',background:'#ffa012',width:'150px',textTransform:'capitalize',fontSize:'14px',marginBottom:'4%'}}>Add To Cart</Button></NavLink>
                            {/* <NavLink to='#' style={{textDecoration:'none'}}>     <Button startIcon={<ShoppingBasketIcon/>} variant="contained" className="SignInClass" style={{marginLeft:'2px',padding:'8px',background:'#ffa012',width:'150px',textTransform:'capitalize',fontSize:'14px',marginBottom:'4%'}}>Buy Now</Button></NavLink> */}
                        </Box>
                        </Box>
                    </Grid>
                    <Grid item md={8} >
                        <Box style={{padding:'0.3%'}}>
                        <Grid container direction="row" style={{padding:'1.7%',background:'#f7f7f7',borderRadius:'5px',border:'1px solid silver'}}>
                          {/* large */}
                    
                           <Grid item md={7} > 
                            <h2>{product.product_name}</h2>                  
                                <Box>                             
                                  
                                   <span style={{fontSize:'17px'}}> <span style={{textDecoration:'line-through',fontSize:'18px',color:'red'}}>Rs{product.product_price+20}</span> <span style={{fontWeight:'500',fontSize:'25px'}}>{product.product_price}Rs</span><span style={{marginLeft:'10%',color:'green'}}>10% off</span></span><br></br>
                                   <span style={{fontSize:'17px'}}><span style={{fontWeight:'bold'}}>In Stock <CheckIcon color="success" fontSize='medium' /></span> <span ></span></span><br></br>
                                   <span style={{fontSize:'17px'}}><span style={{fontWeight:'bold'}}>Available Offers</span> </span><br></br>
                                   <span style={{fontSize:'13px'}}> <span><LocalOfferIcon style={{fontSize:'14px',color:'green'}} /></span> <span>Bank OfferFlat ₹100 off on first PakElectronics Pay Later order of ₹500 and aboveT&C</span></span><br></br> 
                                   <span style={{fontSize:'13px'}}><span><LocalOfferIcon style={{fontSize:'14px',color:'green'}} /></span> <span>Bank Offer10% off on ICICI Bank Cards, up to ₹300. On orders of ₹1750 </span></span><br></br> 
                                   <span style={{fontSize:'13px'}}><span><LocalOfferIcon style={{fontSize:'14px',color:'green'}} /></span> <span>Bank Offer5% Unlimited Cashback on PakElectronics Axis Bank Credit CardT&C</span></span><br></br> 
                                   <span style={{fontSize:'13px'}}><span><LocalOfferIcon style={{fontSize:'14px',color:'green'}} /></span> <span>Bank Offer20% off on 1st txn with Amex Network Cards issued by ICICI Bank,IndusInd Bank</span></span><br></br>                            
                            
                                       
                                       <Grid container direction="row">
                                           <Grid item md={1.3}>
                                                <img height="50px" src="https://d3ogm7ac91k97u.cloudfront.net/en-US/alexa/branding/alexa-guidelines/brand-guidelines/the-alexa-logo.thumb.800.480.png?ck=1614891977"></img>
                                            </Grid>
                                            <Grid item md={10.7}>
                                            <span>WORKS WITH ALEXA</span>
                                       <p> Add voice control by combining with an Alexa device</p>
                                            </Grid>
                                       
                                       </Grid>
                                       <Grid container direction="row">
                                           <Grid item md={4}>
                                            <span style={{color:'#222a8f'}}>       <ShoppingCartIcon style={{fontSize:'16px'}} /> <span>Ready</span>  </span>
                                            </Grid>
                                            <Grid item md={4}>
                                            <span style={{color:'#222a8f'}}>            <LocalOfferIcon style={{fontSize:'16px'}} /> <span>Original</span> </span>
                                            </Grid>
                                            <Grid item md={4}>
                                            <span style={{color:'#222a8f'}}>       <DateRangeIcon style={{fontSize:'16px'}} /> <span>Warranty</span> </span>
                                            </Grid>
                                          
                                       </Grid>

                                   <Box>
                                   <hr style={{color:'grey'}}></hr>
                                   <Box>
                                        <div className='row'>
                                           <div className='col-md-6' align="center">

                                           <ButtonGroup style={{border:'1px solid silver'}} variant="contained" aria-label="outlined primary button group">
                                                    <Button onClick={IncrementFun} style={{borderRight:'2px solid silver',borderRadius:'0px',background:'#bfc2c7'}}><i class="fa fa-plus" aria-hidden="true"></i></Button>
                                                    <div style={{fontSize:'20px',width:'100px',marginTop:'3px',textAlign:'center'}}>{Quantity}</div>
                                                    <Button onClick={DecrementFun} style={{borderLeft:'2px solid silver',borderRadius:'0px',background:'#bfc2c7'}}><i class="fa fa-minus" aria-hidden="true"></i></Button>
                                            </ButtonGroup>


                                           </div>
                                            <div className='col-md-6'>
                                            <Box align="center">
                                <span style={{color:'blue',fontSize:'18px'}}>For further descriotion</span><br></br>
                                <button type="button" class="btn" style={{background:'#186494',color:'white'}} onClick={GeneratePdf}>Download Pdf</button>

                                </Box>
                                            </div>
                                          
                                        </div>
                                  
                                   </Box>
                                   <hr style={{color:'grey'}}></hr>
                           
                              <br></br>
                               <Box align="center">
                               <span style={{color:'blue',fontSize:'18px'}}>Share It Now</span><br></br>
                            <FacebookShareButton url={window.location.href}>
                                    <FacebookIcon1 style={{color:'#3b5998'}}></FacebookIcon1>
                                </FacebookShareButton>  
                                <WhatsappShareButton url={window.location.href}>
                                     <WhatsAppIcon style={{color:'#075e54'}}></WhatsAppIcon> 
                                </WhatsappShareButton>
                                <EmailShareButton url={window.location.href}>
                                    <MailIcon style={{color:'#BB001B'}}>

                                    </MailIcon>
                                </EmailShareButton>
                                <TwitterShareButton url={window.location.href}>
                                    <TwitterIcon style={{color:'#00acee'}}>

                                    </TwitterIcon>
                                </TwitterShareButton>
                                <PinterestShareButton url={window.location.href}>
                                    <PinterestIcon style={{color:'#c8232c'}}>

                                    </PinterestIcon>
                                </PinterestShareButton>
                                <LinkedinShareButton url={window.location.href}>
                                    <LinkedInIcon style={{color:'#075e54'}}>
                                    </LinkedInIcon>
                                </LinkedinShareButton>
                                <TelegramShareButton url={window.location.href}>
                                    <TelegramIcon style={{color:'#0088cc'}}>

                                    </TelegramIcon>
                                </TelegramShareButton>  
                                </Box>
                           
                
                            </Box>
                                </Box>       
                            </Grid>
                         
                           {/* mobile */}
                           
                        
                            <Grid item md={5} style={{height:'auto',padding:'3%',paddingBottom:'1%',background:'#f7f5f5'}} justify="left" align="left">
                            <Box>
                                <span><h2>Specifications</h2></span>
                            </Box>  
                            <span dangerouslySetInnerHTML={{ __html: product.product_specification }} />           
                          
                  
                              
                            
                            </Grid>

                        </Grid> 
                            </Box>
                    </Grid>
                    
                </Grid>
            </Paper>
      
            <Paper  style={{marginTop:'0.6%',borderRadius:'0px',padding:'20px'}}>
            <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider'}} >
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label={<span className='Tab'>Product Detail</span>} {...a11yProps(0)} className='Tab' />
                    <Tab label={<span className='Tab'>Packaging & Delivery</span>} {...a11yProps(1)} />
                   
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
               <Box className='quickDetail'>
                   <h5 style={{fontweight:'bold'}} >Quick Details</h5>                   
                   <table>
                        <tr>
                            <td>Product Name</td>
                            <td style={{paddingLeft:'15px'}}>{product.product_name}</td>
  
                        </tr>
                        <tr>
                            <td>Product Price</td>
                            <td style={{paddingLeft:'15px'}}>Rs {product.product_price}</td>
  
                        </tr>
                        <tr>
                            <td>Product Brand</td>
                            <td style={{paddingLeft:'15px'}}>{product.product_brand}</td>
  
                        </tr>
                        <tr >
                            <td>Total Stock</td>
                            <td style={{paddingLeft:'15px'}}>{product.product_total_stock}</td>
  
                        </tr>
                     
                        <tr>
                            <td>Company Name</td>
                            <td style={{paddingLeft:'15px'}}>{product.product_companyName}</td>
  
                        </tr>
                      
                        <tr>
                            <td>Product Color</td>
                            <td style={{paddingLeft:'15px'}}>{product.product_color}</td>
  
                        </tr>
                        <tr>
                            <td>Place Of Origiin</td>
                            <td style={{paddingLeft:'15px'}}>{product.place_of_origin}</td>
  
                        </tr>
                        <tr>
                            <td>Product Weight</td>
                            <td style={{paddingLeft:'15px'}}>{product.product_weight}g</td>
  
                        </tr>
                    </table>
               </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
            <Box className='quickDetail'>
                   <h5 style={{fontweight:'bold'}} >Overview</h5>                   
                   <table>
                        <tr>
                            <td>Selling Units</td>
                            <td style={{paddingLeft:'15px'}}>Single item</td>
  
                        </tr>
                        <tr>
                            <td>Single package</td>
                            <td style={{paddingLeft:'15px'}}>15X15X2 cm</td>
  
                        </tr>
                        <tr>
                            <td>Processing Time</td>
                            <td style={{paddingLeft:'15px'}}>5 days</td>
  
                        </tr>
                        <tr >
                            <td>Shipping</td>
                            <td style={{paddingLeft:'15px'}}>Rs200</td>
  
                        </tr>
                     
                        <tr>
                            <td>Response Time</td>
                            <td style={{paddingLeft:'15px'}}>3h</td>
  
                        </tr>
                      
                        <tr>
                            <td>On-Time Delivery</td>
                            <td style={{paddingLeft:'15px'}}>98%</td>
                        </tr>
                      
                        

                    </table>
               </Box>
            </TabPanel>
           
    </Box>
            </Paper>   
    </Hidden>
    {/* ///////////////////////////////////////////////////////////////////////// */}
<Hidden mdUp="true">
<Paper  className="DetailPageClass">
                <Grid container direction="row" justify="center" align="center">
                    <Grid item md={12}><h1 style={{marginBottom:'1%'}}>Information About {product.product_name}</h1> </Grid>
                </Grid>
                <Grid container direction="row" spacing={2}>
                    <Grid item md={4} justify="center" align="center">
                    <Box  style={{padding:'3%'}}>
                        <TransformWrapper>
                            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                            <React.Fragment>
                                <Box className="tools" style={{marginBottom:'1%'}}>
                                    <button onClick={() => zoomIn()} style={{marginRight:'5px',border:'1px solid silver'}}><ZoomInIcon /></button>
                                    <button onClick={() => zoomOut()} style={{marginRight:'5px',border:'1px solid silver'}}><ZoomOutIcon /></button>
                                    <button onClick={() => resetTransform()} style={{border:'1px solid silver'}}><SettingsBackupRestoreIcon /></button>
                                </Box>  
                                <TransformComponent>
                                  
                                    <img style={{width:'100%'}} src={product.product_image} alt="test"  className={classes.ImgClass} /> 
                                   
                                   
                                </TransformComponent> 
                            </React.Fragment>
                            )}
                        </TransformWrapper>
                        <Box className={classes.ButtonClass}> 
            
                            <NavLink to='#' style={{textDecoration:'none'}}>     <Button onClick={addItemToCart} startIcon={<ShoppingBasketIcon/>} variant="contained" className="SignInClass" style={{marginLeft:'2px',padding:'8px',background:'#ffa012',width:'150px',textTransform:'capitalize',fontSize:'14px',marginBottom:'4%'}}>Add To Cart</Button></NavLink>
                            {/* <NavLink to='#' style={{textDecoration:'none'}}>     <Button startIcon={<ShoppingBasketIcon/>} variant="contained" className="SignInClass" style={{marginLeft:'2px',padding:'8px',background:'#ffa012',width:'150px',textTransform:'capitalize',fontSize:'14px',marginBottom:'4%'}}>Buy Now</Button></NavLink> */}
                        </Box>
                        </Box>
                    </Grid>
                    <Grid item md={8} >
                        <Box style={{padding:'0.3%'}}>
                        <Grid container direction="row" style={{width:'343px',padding:'1.7%',background:'#f7f7f7',borderRadius:'5px',border:'1px solid silver'}}>
                          {/* large */}
                    
                           <Grid item md={7} > 
                            <h2>{product.product_name}</h2>                  
                                <Box>                             
                                  
                                   <span style={{fontSize:'17px'}}> <span style={{textDecoration:'line-through',fontSize:'18px',color:'red'}}>Rs{product.product_price+20}</span> <span style={{fontWeight:'500',fontSize:'25px'}}>{product.product_price}Rs</span><span style={{marginLeft:'10%',color:'green'}}>10% off</span></span><br></br>
                                   <span style={{fontSize:'17px'}}><span style={{fontWeight:'bold'}}>In Stock <CheckIcon color="success" fontSize='medium' /></span> <span ></span></span><br></br>
                                   <span style={{fontSize:'17px'}}><span style={{fontWeight:'bold'}}>Available Offers</span> </span><br></br>
                                   <span style={{fontSize:'13px'}}> <span><LocalOfferIcon style={{fontSize:'14px',color:'green'}} /></span> <span>Bank OfferFlat ₹100 off on first PakElectronics Pay Later order of ₹500 and aboveT&C</span></span><br></br> 
                                   <span style={{fontSize:'13px'}}><span><LocalOfferIcon style={{fontSize:'14px',color:'green'}} /></span> <span>Bank Offer10% off on ICICI Bank Cards, up to ₹300. On orders of ₹1750 </span></span><br></br> 
                                   <span style={{fontSize:'13px'}}><span><LocalOfferIcon style={{fontSize:'14px',color:'green'}} /></span> <span>Bank Offer5% Unlimited Cashback on PakElectronics Axis Bank Credit CardT&C</span></span><br></br> 
                                   <span style={{fontSize:'13px'}}><span><LocalOfferIcon style={{fontSize:'14px',color:'green'}} /></span> <span>Bank Offer20% off on 1st txn with Amex Network Cards issued by ICICI Bank,IndusInd Bank</span></span><br></br>                            
                            
                                       
                                       <Grid container direction="row">
                                           <Grid item md={1.3}>
                                                <img height="50px" src="https://d3ogm7ac91k97u.cloudfront.net/en-US/alexa/branding/alexa-guidelines/brand-guidelines/the-alexa-logo.thumb.800.480.png?ck=1614891977"></img>
                                            </Grid>
                                            <Grid item md={10.7}>
                                            <span>WORKS WITH ALEXA</span>
                                       <p> Add voice control by combining with an Alexa device</p>
                                            </Grid>
                                       
                                       </Grid>
                                       <Grid container direction="row">
                                           <Grid item md={4}>
                                            <span style={{color:'#222a8f'}}>       <ShoppingCartIcon style={{fontSize:'16px'}} /> <span>Ready</span>  </span>
                                            </Grid>
                                            <Grid item md={4}>
                                            <span style={{color:'#222a8f'}}>            <LocalOfferIcon style={{fontSize:'16px'}} /> <span>Original</span> </span>
                                            </Grid>
                                            <Grid item md={4}>
                                            <span style={{color:'#222a8f'}}>       <DateRangeIcon style={{fontSize:'16px'}} /> <span>Warranty</span> </span>
                                            </Grid>
                                          
                                       </Grid>

                                   <Box>
                                   <hr style={{color:'grey'}}></hr>
                                   <Box>
                                        <div className='row'>
                                           <div className='col-md-6' align="center">

                                           <ButtonGroup style={{border:'1px solid silver'}} variant="contained" aria-label="outlined primary button group">
                                                    <Button onClick={IncrementFun} style={{borderRight:'2px solid silver',borderRadius:'0px',background:'#bfc2c7'}}><i class="fa fa-plus" aria-hidden="true"></i></Button>
                                                    <div style={{fontSize:'20px',width:'100px',marginTop:'3px',textAlign:'center'}}>{Quantity}</div>
                                                    <Button onClick={DecrementFun} style={{borderLeft:'2px solid silver',borderRadius:'0px',background:'#bfc2c7'}}><i class="fa fa-minus" aria-hidden="true"></i></Button>
                                            </ButtonGroup>


                                           </div>
                                            <div className='col-md-6'>
                                            <Box align="center">
                                <span style={{color:'blue',fontSize:'18px'}}>For further descriotion</span><br></br>
                                <button type="button" class="btn" style={{background:'#186494',color:'white'}} onClick={GeneratePdf}>Download Pdf</button>

                                </Box>
                                            </div>
                                          
                                        </div>
                                  
                                   </Box>
                                   <hr style={{color:'grey'}}></hr>
                           
                              <br></br>
                               <Box align="center">
                               <span style={{color:'blue',fontSize:'18px'}}>Share It Now</span><br></br>
                            <FacebookShareButton url={window.location.href}>
                                    <FacebookIcon1 style={{color:'#3b5998'}}></FacebookIcon1>
                                </FacebookShareButton>  
                                <WhatsappShareButton url={window.location.href}>
                                     <WhatsAppIcon style={{color:'#075e54'}}></WhatsAppIcon> 
                                </WhatsappShareButton>
                                <EmailShareButton url={window.location.href}>
                                    <MailIcon style={{color:'#BB001B'}}>

                                    </MailIcon>
                                </EmailShareButton>
                                <TwitterShareButton url={window.location.href}>
                                    <TwitterIcon style={{color:'#00acee'}}>

                                    </TwitterIcon>
                                </TwitterShareButton>
                                <PinterestShareButton url={window.location.href}>
                                    <PinterestIcon style={{color:'#c8232c'}}>

                                    </PinterestIcon>
                                </PinterestShareButton>
                                <LinkedinShareButton url={window.location.href}>
                                    <LinkedInIcon style={{color:'#075e54'}}>
                                    </LinkedInIcon>
                                </LinkedinShareButton>
                                <TelegramShareButton url={window.location.href}>
                                    <TelegramIcon style={{color:'#0088cc'}}>

                                    </TelegramIcon>
                                </TelegramShareButton>  
                                </Box>
                           
                
                            </Box>
                                </Box>       
                            </Grid>
                         
                           {/* mobile */}
                           
                        
                            <Grid item md={5} style={{height:'auto',padding:'3%',paddingBottom:'1%',background:'#f7f5f5'}} justify="left" align="left">
                            <Box>
                                <span><h2>Specifications</h2></span>
                            </Box>  
                            <span dangerouslySetInnerHTML={{ __html: product.product_specification }} />           
                          
                  
                              
                            
                            </Grid>

                        </Grid> 
                            </Box>
                    </Grid>
                    
                </Grid>
            </Paper>
      
            <Paper  style={{marginTop:'0.6%',borderRadius:'0px',padding:'20px'}}>
            <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider'}} >
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label={<span className='Tab'>Product Detail</span>} {...a11yProps(0)} className='Tab' />
                    <Tab label={<span className='Tab'>Packaging & Delivery</span>} {...a11yProps(1)} />
                   
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
               <Box className='quickDetail'>
                   <h5 style={{fontweight:'bold'}} >Quick Details</h5>                   
                   <table>
                        <tr>
                            <td>Product Name</td>
                            <td style={{paddingLeft:'15px'}}>{product.product_name}</td>
  
                        </tr>
                        <tr>
                            <td>Product Price</td>
                            <td style={{paddingLeft:'15px'}}>Rs {product.product_price}</td>
  
                        </tr>
                        <tr>
                            <td>Product Brand</td>
                            <td style={{paddingLeft:'15px'}}>{product.product_brand}</td>
  
                        </tr>
                        <tr >
                            <td>Total Stock</td>
                            <td style={{paddingLeft:'15px'}}>{product.product_total_stock}</td>
  
                        </tr>
                     
                        <tr>
                            <td>Company Name</td>
                            <td style={{paddingLeft:'15px'}}>{product.product_companyName}</td>
  
                        </tr>
                      
                        <tr>
                            <td>Product Color</td>
                            <td style={{paddingLeft:'15px'}}>{product.product_color}</td>
  
                        </tr>
                        <tr>
                            <td>Place Of Origiin</td>
                            <td style={{paddingLeft:'15px'}}>{product.place_of_origin}</td>
  
                        </tr>
                        <tr>
                            <td>Product Weight</td>
                            <td style={{paddingLeft:'15px'}}>{product.product_weight}g</td>
  
                        </tr>
                    </table>
               </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
            <Box className='quickDetail'>
                   <h5 style={{fontweight:'bold'}} >Overview</h5>                   
                   <table>
                        <tr>
                            <td>Selling Units</td>
                            <td style={{paddingLeft:'15px'}}>Single item</td>
  
                        </tr>
                        <tr>
                            <td>Single package</td>
                            <td style={{paddingLeft:'15px'}}>15X15X2 cm</td>
  
                        </tr>
                        <tr>
                            <td>Processing Time</td>
                            <td style={{paddingLeft:'15px'}}>5 days</td>
  
                        </tr>
                        <tr >
                            <td>Shipping</td>
                            <td style={{paddingLeft:'15px'}}>Rs200</td>
  
                        </tr>
                     
                        <tr>
                            <td>Response Time</td>
                            <td style={{paddingLeft:'15px'}}>3h</td>
  
                        </tr>
                      
                        <tr>
                            <td>On-Time Delivery</td>
                            <td style={{paddingLeft:'15px'}}>98%</td>
                        </tr>
                      
                        

                    </table>
               </Box>
            </TabPanel>
           
    </Box>
            </Paper>
</Hidden>


          
    </>)
}
export default ProductDetail

