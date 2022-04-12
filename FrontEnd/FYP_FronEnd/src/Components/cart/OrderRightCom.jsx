import {Box,makeStyles, Typography,Button} from '@material-ui/core';


const useStyle = makeStyles({
    image:{
        height:110,
        width:300,
        marginTop:'10px',
    },
    component:{
     margin:'10px 50px',
     color:'#f0f0f0',
    },
   
    typo:{
     marginTop:'10px',
     color:'black',
    },
    
})

const OrderRightCom=({item})=>{
    const classes=useStyle();
    return(
   <div>
       <Box className={classes.component}>
          <img src={item.image} className={classes.image} />
          <Typography className={classes.typo}>{item.name}</Typography>
          <Typography className={classes.typo}>{item.price}</Typography>
       </Box>

   </div>
    )
}
export default OrderRightCom;