import {useDispatch, useSelector} from 'react-redux';
import {useEffect,useState} from 'react';
import {Box,makeStyles, Typography,Button} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import * as animationData from '../Lottie Files/8774-loading.json';
import Loading from './loading';

//components
import Lottie from 'react-lottie';
import CartItem from './CartItem'; 
import EmptyCart from './EmptyCart';
import TotalView from './TotalView';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { setAddToCart } from '../../Redux/Action/actions';
import CheckOut from './Checkout';
const useStyle = makeStyles({
   component:{
      marginTop:55,
      padding:'30px 135px',
      display:'flex',
      "@media (max-width: 768px)": {
         padding:'5px 15px',
         display:'block',
        }
   },
   leftComponent:{
      width:'67%',
      "@media (max-width: 768px)": {
         width:"100%",
        }
   },
   header:{
      padding:'15px 24px',
      background:'#fff'
   },
   bottom:{
     padding:'16px 22px',
     background:'#fff',
     border:'1px solid #f0f0f0',
     boxShadow:'0 -2px 10px 0 rgb(0 0 0 /10%)',
   },
   stylebtn:{
    width: '94%',
    background: '#4CAF50',
    color: 'white',
    padding: '12px 20px',
    margin: '8px 0',
    marginLeft:'20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    textAlign:'center',
    "@media (max-width: 768px)": {
        width:"91%",
      }
   },
})

const Cart=()=>{
   
   const classes = useStyle();
   const history = useHistory();
   const dispatch=useDispatch();
   const [Allproduct,setAllproduct]=useState([])
   let [sum,SetSum]=useState(0)
   const [cartItems,setCartItems]=useState([])
   const [show,setShow]=useState(false);
   const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
      }
    };
  
   let totalprice=0;

   useEffect(async()=>
   {
     
     const response=await axios.get('http://127.0.0.1:8000/api/addTocart/')
     const AddTOCartData=response.data;
     const {data}=await axios.get('http://127.0.0.1:8000/api/products/')
     setAllproduct(data)
     const cutomer_name=localStorage.getItem('login_user')
     const FilteredDataDB=AddTOCartData.filter(SingleItem=>(SingleItem.customer===cutomer_name))
     setCartItems(FilteredDataDB)
     dispatch(setAddToCart(FilteredDataDB))
     const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
      }
    };
     setTimeout(()=>
     {
        setShow(true)
     },500)
 
   },[])
   return show?(
      <>
        {
           cartItems.length?
           <Box className={classes.component}>
              <Box className={classes.leftComponent}>
                 <Box className={classes.header}>
                     <Typography style={{fontWeight:600,fontSize:18}}>My Cart ({cartItems.length})</Typography>
                 </Box>
                
                 {
                   
                    cartItems.map(item => (
                       <>
                       {
                          Allproduct.map(pro=>
                           {
                              if(pro.product_name===item.product)
                              {
                                 totalprice=totalprice+pro.product_price*item.product_Qty;
                                 return (
                                    <>
                                     <CartItem item={pro} product={item} />
                                     
                                    </>
                                 )
                              }
                              else
                              {
                                
                              }
                            
                           }
                           )
                       }
                   
                      
                       </>
                     
                   ))
                 }

                 <Box className={classes.bottom}>
                 <NavLink to={`/checkout/${totalprice}`}>
                        <button className={classes.stylebtn} style={{background:'#186494'}}>Check Out</button>
                  </NavLink>
                        
                 </Box>

              </Box>
              <TotalView price={totalprice}/>
           </Box>
          :<EmptyCart/>
        }
      </>
   ): <Loading/>
}
export default Cart;