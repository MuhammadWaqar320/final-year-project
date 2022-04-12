import { useState, useEffect } from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { useSelector,useDispatch } from "react-redux";
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles({
    component: {
         width: '30%',
         background:"#fff",
         marginLeft:15,
         "@media (max-width: 768px)": {
             width:"98%",
             marginLeft:"5px",
           }
    },
    header: {
        padding: '15px 24px',
        background: '#fff',
        border:'1px solid #f0f0f0',
    },
    greyTextColor: {
        color: '#878787'
    },
    container: {
        padding:'15px 24px',
        '& > *': {
            marginBottom: 20,
            fontSize: 14
        }
    },
    price: {
        float: 'right'
    },
    totalAmount: {
        fontSize: 18,
        fontWeight: 600,
        borderTop: '1px dashed #e0e0e0',
        padding: '20px 0',
        borderBottom: '1px dashed #e0e0e0'
    }
})


const TotalView = ({ price }) => {
    const classes = useStyle();

  

    return (
        <Box className={classes.component}>
            <Box className={classes.header} style={{borderBottom: '1px solid #f0f0f0'}}>
                <Typography className={classes.greyTextColor}>PRICE DETAILS</Typography>
            </Box>
            <Box className={clsx(classes.header, classes.container)}>
                <Typography>Price<span className={classes.price}>Rs:{price}</span></Typography>
                <Typography>Delivery Charges<span className={classes.price}>Rs:100</span></Typography>
                <Typography className={classes.totalAmount}>Total Amount<span className={classes.price}>Rs:{price + 100}</span></Typography>
                <Typography ></Typography>
                <NavLink to="/" style={{fontSize: 18, color: 'green',textDecoration:'none'}}>
                <i class="fa fa-long-arrow-left" aria-hidden="true"></i> <span>Continue Shopping</span>
                </NavLink>
               
            </Box>
        </Box>
    )
}
export default TotalView;