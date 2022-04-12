import { Grid, Hidden } from '@material-ui/core'
import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Images/transparentLogo.png';
import { Rating } from 'react-simple-star-rating'
import { useState } from 'react';
import  axios  from 'axios';
import swal from 'sweetalert';
const Footer=()=>
{
  const [rating, setRating] = useState(0)
  const [reviews,setReviews]=useState("")
  const customer_name=localStorage.getItem('login_user')
  const handleRating = (rate) => {
    setRating(rate)
    // other logic
  }
  const handleReviews=(e)=>
  {
      let review=e.target.value
      setReviews(review)
  }
  const ReviewRating=async(e)=>
  {
    let Dont_RefreshPage=e.preventDefault()
    let formField=new FormData()
    formField.append('reviews',reviews)
    formField.append('rating',rating)
    formField.append('customer_name',customer_name)
    await axios({
        method:'post',
        url:'http://127.0.0.1:8000/api/reviews_rating/',
       
        data: formField,
        headers: {"content-type": "application/json"}
      }).then((res)=>
      {
      
        swal({
            title: "Congratulation!",
            text: "You have successfully rated",
            icon: "success",
            button: "OK",
          });
      })
  
  }
    return (<>
    <div className="FooterClass" >
    <Grid direction="row" container align="center" justify="center">
          <Grid item >
              <h3 style={{color:'#f3ce73'}}>Follow us</h3>
        

<a className="btn btn-primary " style={{backgroundColor:" #0082ca",borderRadius:'50%',marginRight:'5px'}} href="https://www.linkedin.com/in/muhammad-waqar-195546207" role="button"
  ><i className="fab fa-linkedin-in socialMedia"></i></a>

<a className="btn btn-primary" style={{backgroundColor: "#25d366",borderRadius:'50%',marginRight:'5px'}} href="https://wa.me/923445473320" role="button"><i className="fab fa-whatsapp socialMedia"></i></a>
<a className="btn btn-primary" style={{backgroundColor: "#3b5998",borderRadius:'50%',marginRight:'5px'}} href="https://touch.facebook.com/profile.php" role="button"><i class="fab fa-facebook-f socialMedia"></i> </a>
<a className="btn btn-primary" style={{backgroundColor: "#ac2bac",borderRadius:'50%'}} href="https://www.instagram.com/m.waqar.c123/" role="button"><i className="fab fa-instagram socialMedia"></i
></a>
          </Grid>
    </Grid>
    <hr></hr>
    <Grid container>
       
       <Hidden smDown="true"> < Grid item md={3} sm={12} xs={12}  style={{paddingLeft:'2%',marginBottom:'15px'}}>
       <NavLink to="#" >      <img src={Logo} width="60%"></img></NavLink>
            <h3 style={{marginTop:'40px',color:'#f3ce73',textAlign:'justify'}}>About PakElectronics</h3>
            <p >Pak PakElectronics is an online B2C marketplace where buyers and seller from around the world can connect and carry out transactions. It is a secure, trusted platform that is used by millions and millions of businesses. It was created in 2021.</p>
            
       </Grid></Hidden>
       < Grid item md={2} sm={12} xs={12} className="footer-Items" style={{paddingLeft:'5%',marginBottom:'15px'}}> 
        <h3 style={{color:'#f3ce73',marginBottom:'30px'}} className="line"> Quick Links</h3>
        <div style={{marginLeft:'5px'}}>
                <h6 ><NavLink to="/survey" className="footerMenu"><i class="fa fa-comments" aria-hidden="true"></i> FeedBack</NavLink></h6>
                <h6 ><NavLink to="#" className="footerMenu"><i className="fa fa-user"></i> Login</NavLink></h6>
                <h6 > <NavLink to="/how" className="footerMenu"><i className="fa fa-question-circle" aria-hidden="true" > </i> how to order</NavLink></h6>
                <h6 > <NavLink to="#" className="footerMenu"> <i className="fa fa-user-secret" aria-hidden="true" ></i> Privacy Policy</NavLink></h6>

           
            </div>
        </Grid>
        < Grid item md={3} sm={12} xs={12} className="footer-Items" style={{paddingLeft:'5%',marginBottom:'15px'}}>
        <h3 style={{color:'#f3ce73',marginBottom:'30px'}} className="line"> Contact Us</h3>
        <div style={{marginLeft:'5px'}}>
                <h6 ><NavLink to="/contactus" className="footerMenu"><i className="fa fa-comment"></i> Contact US</NavLink></h6>
                <h6 ><i className="fa fa-envelope"></i> pakelectronics@gmail.com</h6>
                <h6 ><i className="fa fa-phone"></i> +92-334-5473329</h6>
                <h6 ><i className="fa fa-fax"></i> +051-3251-759</h6>


            </div>
           
        </Grid>
        < Grid item md={4} sm={12} xs={12} className="footer-Items" style={{paddingLeft:'5%',marginBottom:'15px'}} align="center">
    
     
        <form onSubmit={ReviewRating} style={{border:'1px solid #f3ce73',padding:'15px 2%',borderRadius:'10px'}}>
       
  
   
        <div class="mb-3" align="center">
       <p style={{fontSize:'24px',color:'#f3ce73'}}>Leave Feedback</p>   
            <Rating onClick={handleRating} ratingValue={rating} /* Available Props */ />  
        </div>
        <div class="mb-3">
           
            <div>
                <div class="col-md-2">
                </div>
                <div class="col-md-8">
                    <textarea class="form-control" value={reviews} onChange={handleReviews} id="exampleFormControlTextarea1" required placeholder='Please share your experience of our platform' rows="2"></textarea>
                    <p style={{textAlign:'right',marginTop:'15px'}}>  <button type="submit" class="btn" style={{background:'#f3ce73'}}>Submit</button></p>
                </div>
                <div class="col-md-2">
                </div>
            </div>
        </div>
        <span style={{padding:'5px',border:'1px solid white',borderRadius:'5px'}}><NavLink to="/allreviews" className="footerMenu"> View All Reviews</NavLink></span>
      
        </form>
      
        </Grid>
     

    </Grid>
 
    <Grid container direction="row" justify="center" align="center">
        < Grid item md={12} sm={12} xs={12} >
                 <div className="sharethis-inline-share-buttons" style={{paddingBottom:"20px",paddingTop:'20px'}}></div>
        </Grid>
       
    </Grid>
    <hr></hr>
    <Grid container direction="row" justify="center"  align="center">
        < Grid item md={12} sm={12} xs={12} >	<p style={{color: "white"}}>Copyright 2021 PakElectronics<span style={{color: "#f3ce73"}}> &copy;
									</span>All Rights Reserved</p> 
                                    <hr></hr>
                                    </Grid>
       
    </Grid>

    </div>
  
    
    </>)
}
export default Footer