import React, { useState,useEffect } from 'react';
import Logo from '../Images/transparentLogo.png'
import { NavLink } from 'react-router-dom';
import axios from 'axios'
import '../../App.css'
import { useDispatch,useSelector } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from "@material-ui/core/Badge";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Register from '../RegistrationComponents/registeration';
import { Logout } from '@mui/icons-material';
import swal from 'sweetalert';
import { useHistory } from 'react-router';
import { withRouter } from 'react-router';
import ResetPassword from '../CustomerProfileComponents/ResetPassword';
import EditProfile from '../CustomerProfileComponents/EditProfile';
const NavBar=({history})=>
{
    const dispatch=useDispatch()
    const [openDialogBox,setOpenDialogBox]=useState(false)
    const [EditProfileOpenDialogBox,setEditProfileOpenDialogBox]=useState(false)
    const [resetPasswordBox,setResetPasswordBox]=useState(false)
    const [totalCartItem,settotalCartItem]=useState(0)
    const cutomer_name=localStorage.getItem('login_user')
    const getcategory=useSelector((state)=>state.allCategory.categories)
    console.log(history)
    // const history=useHistory()
    const Logout=(e)=>
    {
      
      localStorage.clear()
      window.location.reload(false) 
      history.push('/')
      
    }
    const SetActiveClassFun=(ACN)=>
    {
      if(history.location.pathname===ACN)
      {
        return ("NavBarActive")
      }
    }
    const ShouldLogin=()=>
    {
      swal({
        title: "Error",
        text: "Please login to add item into cart",
        icon: "error",
        button: "OK",
      });
    }
    const ShowResetPasswordDialog=()=>
    {
      setResetPasswordBox(true)
    }
    const ShowDialog=()=>
    {
      setOpenDialogBox(true) 
    }
    const EditProfileShowDialog=()=>
    {
      setEditProfileOpenDialogBox(true) 
    }
    useEffect(async()=>
    {
      const {data}=await axios.get('http://127.0.0.1:8000/api/addTocart/')
      let total=0
      data.map((item)=>
      {
          if(item.customer===cutomer_name)
          {
            total=total+1;
          }
      })
      settotalCartItem(total)
    },[])
    return (<>
    <nav className="navbar navbar-expand-lg NavigationBar" style={{backgroundColor:"#186494",paddingLeft:'2%',paddingRight:'2%'}}>
    <NavLink className="navbar-brand" to="">
    <img src={Logo}   alt="WebSite Logo" className="LogoClass"></img>
  </NavLink>
  <button className="navbar-toggler " style={{border:'1px solid white',borderRadius:'3px',marginRight:'5px'}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  <span className="navbar-toggler-icon">   
    <i className="fas fa-bars" style={{color:"#fff", fontSize:"25px",marginTop:'3px'}}></i>
</span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mx-auto mr-4" >
      <li className="nav-item">
        <NavLink className="nav-link MenuItem " to="/"><i className={`fa fa-home ${SetActiveClassFun('/')}`} style={{fontSize:'18px',fontWeight:'normal',textDecoration:'none'}}> Home</i> </NavLink>
      </li>
      <li className="nav-item" >
        <NavLink className="nav-link MenuItem" to="/contactus" style={{textDecoration:'none'}}><i  className={`fa fa-comment ${SetActiveClassFun('/contactus')}`} style={{fontSize:'18px',fontWeight:'normal',textDecoration:'none'}}> Contact Us </i> </NavLink>
      </li>
      <li className="nav-item" >
        <NavLink className="nav-link MenuItem" to="/faq" ><i  className={`fa fa-question-circle ${SetActiveClassFun('/faq')}`} aria-hidden="true" style={{fontSize:'18px',fontWeight:'normal'}}> FAQ</i></NavLink>
      </li>
      <li className="nav-item" >
        <NavLink className="nav-link MenuItem" to="/about" ><i  className={`fa fa-info-circle ${SetActiveClassFun('/about')}`} aria-hidden="true" style={{fontSize:'18px',fontWeight:'normal'}}> About Us</i></NavLink>
      </li>
      <li className="nav-item" >
        <NavLink className="nav-link MenuItem" to="/policyTerm" ><i  className={`fa fa-user-secret ${SetActiveClassFun('/policyTerm')}`} aria-hidden="true" style={{fontSize:'18px',fontWeight:'normal'}}> Privacy Policy</i></NavLink>
      </li>
      {/* <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle MenuItem" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'white'}}>
         <i className="fa fa-list" aria-hidden="true" style={{fontSize:'18px',fontWeight:'normal'}}> Categories</i>
          </NavLink>
          <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
            {
              getcategory.map((item,index)=>
              {
                return (<>
                  <li><NavLink className="dropdown-item  " to="#" style={{borderBottom:'1px solid silver',background:'white',color:'black'}}>{item.category_name}</NavLink></li>
                </>)
              
              })
            }

            
          </ul>
        </li> */}
       
    </ul>
    <span className="nav-item" >
      
        {
          cutomer_name?
          <NavLink className="nav-link MenuItem" to="/cart" >
          <Badge color="secondary" badgeContent={totalCartItem}>
            <ShoppingCartIcon style={{fontSize:'30px',textDecoration:'none',color:'white'}}></ShoppingCartIcon> 
            </Badge>
          </NavLink>
          :
          <NavLink className="nav-link MenuItem" to="/" onClick={ShouldLogin}>
          <Badge color="secondary" badgeContent="0">
            <ShoppingCartIcon style={{fontSize:'30px',textDecoration:'none',color:'white'}}></ShoppingCartIcon> 
            </Badge>
          </NavLink>

        }
      </span>
   
    <form className="form-inline">
    { 
    (localStorage.getItem("login_user"))?
    <div className="dropdown">
  <button className="btn btn-outline-light dropdown-toggle  navLogin" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
 <span style={{fontSize:'18px'}} ><i class="fa fa-user-circle" aria-hidden="true">  {localStorage.getItem("login_user")}</i></span>
  </button>
  
  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#"><i class="fa fa-home" aria-hidden="true"></i> Home Page</a></li>
    <li><a className="dropdown-item" href="#" onClick={EditProfileShowDialog}><i class="fa fa-pencil" aria-hidden="true"></i> Edit Profile</a></li>
    <li><a className="dropdown-item" href="#" onClick={ShowResetPasswordDialog}><i class="fa fa-unlock-alt" aria-hidden="true"></i> Change Password</a></li>
    <li><a className="dropdown-item" href="#" onClick={()=>Logout()}><i class="fa fa-sign-out" aria-hidden="true"></i> Logout</a></li>
  </ul>
</div>

      :
      <NavLink to="#">  <button onClick={()=>ShowDialog()} className="navLogin btn btn-outline-light my-2 my-sm-0" type="submit" style={{marginLeft:'10px',fontFamily:'initial',fontWeight:'bold'}}>Login/Register</button>
      </NavLink>
    
    
    }
 
  </form>
  <Register open={openDialogBox} close={setOpenDialogBox} />
  <EditProfile open={EditProfileOpenDialogBox} close={setEditProfileOpenDialogBox} />
  <ResetPassword open={resetPasswordBox} close={setResetPasswordBox}></ResetPassword>
  </div>
</nav>
<i className="fa-solid fa-house"></i>
<div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{backgroundColor:'#f1f2f6',width:'75%'}}>
        <div className="offcanvas-header" style={{backgroundColor:'#186494',marginBottom:'0px',height:'66px'}}>
        <NavLink className="navbar-brand" to="#">
    <img src={Logo}   alt="WebSite Logo" style={{width:'170px'}}></img>
  </NavLink>
          <button type="button" className="btn-close text-reset btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" ></button>
        </div>
        <div className="offcanvas-body" >
          
        <div id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto mr-4" >
      <li className="nav-item" style={{borderBottom:'1px solid #b3bdc9'}}>
        <NavLink className="nav-link MenuDrawerItem" to="#"><i className="fa fa-home" style={{fontSize:'16px',fontWeight:'normal'}}> Home</i> </NavLink>
      </li>
      <li className="nav-item" style={{borderBottom:'1px solid #b3bdc9'}}>
        <NavLink className="nav-link MenuDrawerItem" to="#" ><i className="fa fa-comment" style={{fontSize:'16px',fontWeight:'normal'}}> Contact Us </i> </NavLink>
      </li>
      <li className="nav-item" style={{borderBottom:'1px solid #b3bdc9'}}>
        <NavLink className="nav-link MenuDrawerItem" to="#" ><i className="fa fa-question-circle" aria-hidden="true" style={{fontSize:'16px',fontWeight:'normal'}}> FAQ</i></NavLink>
      </li>
      <li className="nav-item" style={{borderBottom:'1px solid #b3bdc9'}}>
        <NavLink className="nav-link MenuDrawerItem" to="#" ><i className="fa fa-shopping-bag" aria-hidden="true" style={{fontSize:'16px',fontWeight:'normal'}}> Shop Now</i></NavLink>
      </li>
      <li className="nav-item" style={{borderBottom:'1px solid #b3bdc9'}}>
        <NavLink className="nav-link MenuDrawerItem" to="#" ><i className="fa fa-user-secret" aria-hidden="true" style={{fontSize:'16px',fontWeight:'normal'}}> Privacy Policy</i></NavLink>
      </li>
      <li className="nav-item" style={{borderBottom:'1px solid #b3bdc9'}}>
        <NavLink className="nav-link MenuDrawerItem" to="#" ><i className="fa fa-text-height" aria-hidden="true" style={{fontSize:'16px',fontWeight:'normal'}}> Term and Conditions</i></NavLink>
      </li>
      <li className="nav-item" style={{borderBottom:'1px solid #b3bdc9'}}>
        <NavLink className="nav-link MenuDrawerItem" to="#" ><i className="fa fa-question" aria-hidden="true" style={{fontSize:'16px',fontWeight:'normal'}}> How To Order?</i></NavLink>
      </li>
      {
        (localStorage.getItem('login_user'))?
        <li className="nav-item" style={{borderBottom:'1px solid #b3bdc9'}}>
        <NavLink onClick={()=>Logout()} className="nav-link MenuDrawerItem" to="#" ><i className="fa fa-sign-in" aria-hidden="true" style={{fontSize:'16px',fontWeight:'normal'}}> Logout</i></NavLink>
      </li>:
       <li className="nav-item" style={{borderBottom:'1px solid #b3bdc9'}}>
       <NavLink onClick={()=>ShowDialog()} className="nav-link MenuDrawerItem" to="#" ><i className="fa fa-sign-in" aria-hidden="true" style={{fontSize:'16px',fontWeight:'normal'}}> Login/Register</i></NavLink>
     </li>
      }
  
     
    </ul>
  
  </div>
        </div>
      </div>
    </>)
}
export default withRouter(NavBar)