import {Card,Box,makeStyles, Typography,Button} from '@material-ui/core';
import clsx from 'clsx';
import axios from 'axios';
import swal from 'sweetalert';
//components

const useStyle = makeStyles({
 component:{
     display:'flex',
     borderRadius:0,
     borderTop:'1px solid #f0f0f0',
 },
 leftComponent:{
     margin:20,
     display:'flex',
     flexDirection:'column',
 },
 rightComponent:{
     margin:20,
 },
 smallText:{
     fontSize:14,
 },
 grayTextColor:{
  color:'#878787',
 },
 image:{
     height:110,
     width:80,
 },
 remove:{
   marginTop:10,
   fontSize:16,
 }, 
})
const CartItem = ({item,product}) => {
  const DeleteProduct=async(id)=>
  {
    await axios.delete(`http://127.0.0.1:8000/api/addTocart/${id}/`).then((res)=>
    {
      window.location.reload(false); 
    })

  }
   const classes=useStyle();
   const passured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    return(
      <>
         <Card className={classes.component}>
            <Box className={classes.leftComponent}>
              <img src={item.product_image} className={classes.image} />
             <Box style={{textAlign:'center'}}>Qty : {product.product_Qty}</Box>
            </Box>
            <Box className={classes.rightComponent}>
              <Typography> {item.product_name} </Typography>
              <Typography className={clsx(classes.smallText,classes.grayTextColor)} style={{marginTop:6}}>Seller:Pak Electronics
                <span> <img src={passured} style={{width:50,marginLeft:10}} /> </span>
              </Typography>
              <Typography style={{marginTop:10}}>
                  <span style={{fontSize:18,fontWeight:600}}>Rs: {item.product_price}x{product.product_Qty}  = {item.product_price*product.product_Qty} </span>
            
              </Typography>
              <Button className={classes.remove} onClick={()=>DeleteProduct(product.id)} style={{border:'1px solid silver',background:'#d6d4d4'}}>Remove</Button>
            </Box>
       </Card>
     
      </>
    
       
    )
}
export default CartItem;
