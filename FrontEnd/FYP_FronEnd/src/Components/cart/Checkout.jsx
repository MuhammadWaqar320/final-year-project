import React from 'react'
import { Grid,Paper,Box, Hidden } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useParams } from 'react-router';
import NumbersIcon from '@mui/icons-material/CreditCard';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import emailjs from 'emailjs-com';
import TableRow from '@mui/material/TableRow';
import StripeCheckout from 'react-stripe-checkout';
import { useHistory } from 'react-router';
import DateRangeIcon from '@mui/icons-material/DateRange';
import axios from 'axios';
import { Elements } from "@stripe/react-stripe-js";
import swal from 'sweetalert';
import { useSelector } from 'react-redux';
function createData(Name,Qty, Price,Total) {
  return {Name , Qty, Price,Total };
}
const CheckOut = () => {
  const [address,SetAddress]=useState(localStorage.getItem('user_address'))
  const [city,SetCity]=useState(localStorage.getItem('user_city'))
  const [province,SetProvince]=useState(localStorage.getItem('user_province'))
  const [zip,setZip]=useState(localStorage.getItem('user_zipcode'))
  const [email_cus,setemail_cus]=useState(localStorage.getItem('user_email'))
  const Products=useSelector((state)=>state.allAddToCart.addToCart);
  const {total}=useParams()
  const history=useHistory()
  const name_cus=localStorage.getItem('login_user')
  const PlaceOrderFun=async(token)=>
  { 
    let formField=new FormData()
    let OrderItem=[]
    let CartItemIds=[]
    Products.map(item => {
      OrderItem.push("{"+"id:"+item.product_id+",product name:"+item.product+",quantity:"+item.product_Qty+"}");
      CartItemIds.push(item.id)   
    })
    console.log("ids:",CartItemIds)
    formField.append('customer',name_cus)
    formField.append('Address',address)
    formField.append('city',city)
    formField.append('province',province)
    formField.append('zipcoder',zip)
    formField.append('Payment_id',token.id)
    formField.append('Total_Price',total)
    for (let i = 0; i <  OrderItem.length; i++) {
      formField.append('Order_Items', OrderItem[i])
   }  
    await axios({
      method:'post',
      url:'http://127.0.0.1:8000/api/order/',
     
      data: formField,
      headers: {"content-type": "application/json"}
    }).then((res)=>
    {
      // emailjs.sendForm('service_b2tt9ms', 'template_56d4nil', '#','user_AqXC5ArU0aelh3Vn3MdG0')
      // .then((result) => 
      // {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });
      swal({
        title: "Congratulation!",
        text: "Your order has been placed",
        icon: "success",
        button: "OK",
      });
      let CartLength=CartItemIds.length;
      for(let i=0;i<CartLength;i++)
      {
        axios.delete(`http://127.0.0.1:8000/api/addTocart/${CartItemIds[i]}/`)
        console.log("id=",CartItemIds[i])
      }
      history.push('/')
    })

  }
  const Addressfun=(e)=>
  {
    let addressVar=e.target.value;
    SetAddress(addressVar)
  }
  const CityFun=(e)=>
  {
    let CityVar=e.target.value;
    SetCity(CityVar)
  }


  const Provincefun=(e)=>
  {
    let ProvinceVar=e.target.value;
    SetProvince(ProvinceVar)
  }
  const Zipfun=(e)=>
  {
    let ZipVar=e.target.value;
    setZip(ZipVar)
  }
  return (
  <>
  <Paper elevation={24} style={{margin:'5%',padding:'2%'}}>

  <Grid container direction='row' spacing={3}>
    <Grid item md={6} style={{border:'1px solid silver',borderRadius:'5px'}}>
      <Box style={{borderBottom:'1px solid silver',padding:'1.5% 0',background:'#e8e7e3',borderTopRightRadius:'5px',borderTopLeftRadius:'5px'}}>
      <center> <Typography style={{fontWeight:'bold',fontSize:'24px'}}>Basic Information & Online Payment</Typography></center>
      </Box>

 
  
<form style={{marginTop:'5%',marginBottom:'5%'}} id="myform">
                            <div className="form-group row" style={{marginBottom:'10px'}}>
                                <label for="inputEmail3" className="col-sm-2 col-form-label">Name:</label>
                                <div className="col-sm-10">
                                <input value={name_cus} minLength="3" name="name" maxLength="20" pattern="[A-Z a-z]+" title="Only alphabets are allowed"    required type="text" className="form-control" id="inputEmail3" placeholder="Enter your name"></input>
                                </div>
                            </div>
                            <div className="form-group row" style={{marginBottom:'10px'}}>
                                <label for="inputEmail3" className="col-sm-2 col-form-label">Email:</label>
                                <div className="col-sm-10">
                                <input value={email_cus}  name="email"  required type="email" className="form-control" id="inputEmail3" placeholder="Enter your  email"></input>
                                </div>
                            </div>
                       
                             <div className="form-group row" style={{marginBottom:'10px'}}>
                                <label for="inputPassword3" className="col-sm-2 col-form-label">Address:</label>
                                <div className="col-sm-10">
                                <input  required type="text" value={address}      className="form-control" placeholder="Enter your full address"></input>
                                </div>
                            </div>
                           <div className="row" style={{marginBottom:'10px'}}>
                                <div class="col-md-4">
                                    <div className="row">
                                     
                                        <label for="inputPassword3" className="col-md-6 col-form-label">Zip Code:</label>
                                     
                                        <div className="col-md-6">  
                                            <input type="tel" pattern="[0-9-]+" class="form-control" value={zip}   id="inputZip" minLength="3" maxLength="20" title="Only numbers are allowed" required></input>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div className="row">
                                    <label for="inputPassword3" className="col-md-4 col-form-label">Province:</label>
                                        <div className="col-md-8">  
                                            <input type="text" class="form-control" value={province}   id="inputZip" minLength="3" maxLength="20" pattern="[A-Z a-z]+" title="Only alphabets are allowed" required></input>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div className="row">
                                    <label for="inputPassword3" className="col-md-3 col-form-label">City:</label>
                                        <div className="col-md-9">  
                                            <input type="text" class="form-control" value={city}  id="inputZip" minLength="3" maxLength="20" pattern="[A-Z a-z]+" title="Only alphabets are allowed" required></input>
                                        </div>
                                    </div>
                                </div>
                               
                           </div>
                          
                       
                         
                           <NavLink to="/" style={{fontSize: 15, color: 'green',textDecoration:'none'}}>
                <i class="fa fa-long-arrow-left" aria-hidden="true"></i> <span>Continue Shopping</span>
                </NavLink>
<hr></hr>

<center> <img height="70px" src="https://cleaa.asn.au/wp-content/uploads/2018/07/logo-stripe.png"></img>

</center>

                            
                            </form>            
<center>
<StripeCheckout
name="Pay Online Using Stripe"
currency="PKR"
amount={total*100}
email={email_cus}
token={PlaceOrderFun}
stripeKey="pk_test_51KSmTOHR6s6Zb54wEkIv5mK3Z0QyJP3ccLHfToLd0QyVmfNsKvm4Iox0xAhkpLGgBVKpTzndFbHxqWghhfqPDL5h00yViF8yDU"
>
<button type="submit" className="btn" style={{background:'#186494',color:'white'}} data-bs-toggle="tooltip" data-bs-placement="top" title="Place your order">Pay ({total} Rs) & Place Order</button>

  </StripeCheckout>
  </center>


  
  
    </Grid>
   <Hidden smDown="true">
   <Grid item md={6}>
    <Box style={{borderBottom:'1px solid silver',padding:'1.5% 0',background:'#e8e7e3',borderTopRightRadius:'5px',borderTopLeftRadius:'5px'}}>
      <center> <Typography style={{fontWeight:'bold',fontSize:'24px'}}>Items Summary</Typography></center>
      </Box>
      <TableContainer component={Paper} style={{padding:'10px'}}>
      <Table sx={{ minWidth: 600 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Qty</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Total</TableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>
          {Products.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              {row.product}
              </TableCell>
              <TableCell align="right">{row.product_Qty}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.product_Qty*row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <hr></hr>
      <Typography style={{fontSize:'20px',fontWeight:'bold',textAlign:'center'}}>Total Amount: <span> {total} Rs</span></Typography>
    </TableContainer>
   
  
  
    </Grid>
   </Hidden>

   {/* ////////////////////////////////////////// */}
   <Hidden smUp="true">
   <Grid item md={6}>
    <Box style={{width:'52%',borderBottom:'1px solid silver',padding:'1.5% 0',background:'#e8e7e3',borderTopRightRadius:'5px',borderTopLeftRadius:'5px'}}>
      <center> <Typography style={{fontWeight:'bold',fontSize:'24px'}}>Items Summary</Typography></center>
      </Box>
      <TableContainer component={Paper} style={{padding:'10px',width:'52%'}}>
      <Table sx={{ minWidth: 600 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Qty</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Total</TableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>
          {Products.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              {row.product}
              </TableCell>
              <TableCell align="right">{row.product_Qty}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.product_Qty*row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <hr></hr>
      <Typography style={{fontSize:'20px',fontWeight:'bold',textAlign:'center'}}>Total Amount: <span> {total} Rs</span></Typography>
    </TableContainer>
   
  
  
    </Grid>    
   </Hidden>
  </Grid>
  </Paper>
  
  </>
  )
}

export default CheckOut