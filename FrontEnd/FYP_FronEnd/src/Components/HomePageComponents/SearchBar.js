import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid';
import mobile from '../../Components/Images/mobile.png'
import laptop from '../../Components/Images/laptop.png'
import lcd from '../../Components/Images/lcd.png'

import Chip from '@material-ui/core/Chip';
import { useHistory,browserHistory } from "react-router";
import '../../App.css';
import { Avatar, Hidden, Paper } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Lottie from 'react-lottie';
import MicR from '../Images/ma.png'
import * as animationData from '../Lottie Files/lf30_editor_ougcnrwv.json'
const SearchBar=()=>
{

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const [displayproduct,setdisplayproduct]=useState("/")
  const history=useHistory()
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  const AllProductFun=()=>
  {
     localStorage.setItem("allpro","All Product")


  }
  const SearchData=(e)=>
  {
    e.preventDefault();
   
    const SearchWord=e.target.value
    if(SearchWord)
    {
      localStorage.setItem("searchWord",SearchWord)
      setdisplayproduct("/allproducts")
    }
  }
  const SearchDataVoice=(e)=>
  {
    e.preventDefault();
   
    const SearchWord=transcript;
    if(SearchWord)
    {
      localStorage.setItem("searchWord",SearchWord)

    }
  }
  const ComputerFun=()=>
  {
     localStorage.setItem("computerKey","Computer")
     localStorage.removeItem("laptopKey")
     localStorage.removeItem("CameraKey")
     localStorage.removeItem("smKey")
     localStorage.removeItem("TabletKey")
     localStorage.removeItem("mobileKey")
     localStorage.removeItem("allpro")

  }
  const LaptopFun=()=>
  {
     localStorage.setItem("laptopKey","Laptop")
     localStorage.removeItem("computerKey")
     localStorage.removeItem("CameraKey")
     localStorage.removeItem("smKey")
     localStorage.removeItem("TabletKey")
     localStorage.removeItem("mobileKey")
     localStorage.removeItem("allpro")

  }
  const CameraFun=()=>
  {
     localStorage.setItem("CameraKey","Camera")
     localStorage.removeItem("laptopKey")
     localStorage.removeItem("computerKey")
     localStorage.removeItem("smKey")
     localStorage.removeItem("TabletKey")
     localStorage.removeItem("mobileKey")
     localStorage.removeItem("allpro")

  }
  const SmartWatchFun=()=>
  {
     localStorage.setItem("smKey","SmartWatch")
     localStorage.removeItem("laptopKey")
     localStorage.removeItem("CameraKey")
     localStorage.removeItem("computerKey")
     localStorage.removeItem("TabletKey")
     localStorage.removeItem("mobileKey")
     localStorage.removeItem("allpro")
     

  }
  const TabletFun=()=>
  {
     localStorage.setItem("TabletKey","Tablet")
     localStorage.removeItem("laptopKey")
     localStorage.removeItem("CameraKey")
     localStorage.removeItem("smKey")
     localStorage.removeItem("computerKey")
     localStorage.removeItem("mobileKey")
     localStorage.removeItem("allpro")

  }
  const  MobileFun=()=>
  {
     localStorage.setItem("mobileKey","Mobile")
     localStorage.removeItem("laptopKey")
     localStorage.removeItem("CameraKey")
     localStorage.removeItem("smKey")
     localStorage.removeItem("TabletKey")
     localStorage.removeItem("computerKey")
     localStorage.removeItem("allpro")

  }
    return (<>
       <Paper elevation={10} style={{paddingTop:'15px',paddingBottom:'15px',borderRadius:'0px'}}>
    <Grid container 
  direction="row"
  justifyContent="center"
  alignItems="center"
  align = "center" justify = "center"
  >
    <Hidden mdDown="true">
    <Grid item md={2} lg={3} sm={1} xs={1}>
           <Grid container  direction="row">
            <Grid item md={4} ><NavLink to="/FilterProducts" style={{textDecoration:'none'}} onClick={ComputerFun}>   <Chip style={{width:'110px',height:'40px',overflow:'hidden',border:'1px solid #186494',borderRadius:'50px'}} avatar={<Avatar style={{height:'32px',width:'32px'}} src="https://www.freeiconspng.com/thumbs/computer-png-hd/computer-case-monitor-mouse-keyboard-png-1.png"></Avatar>} label="Computers"></Chip></NavLink></Grid>
             <Grid item md={4} ><NavLink to="/FilterProducts" style={{textDecoration:'none'}} onClick={LaptopFun}>   <Chip style={{width:'110px',height:'40px',overflow:'hidden',border:'1px solid #186494',borderRadius:'50px'}} avatar={<Avatar style={{height:'32px',width:'32px'}} src={laptop}></Avatar>} label="Laptops"></Chip></NavLink></Grid>
             <Grid item md={4} > <NavLink to="/FilterProducts" style={{textDecoration:'none'}} onClick={TabletFun}> <Chip style={{width:'110px',height:'40px',overflow:'hidden',border:'1px solid #186494',borderRadius:'50px'}} avatar={<Avatar style={{height:'32px',width:'32px'}} src={lcd}></Avatar>} label="Tablets"></Chip></NavLink></Grid>
           </Grid>
      </Grid>
    </Hidden>
    
      <Grid item md={8} lg={6} sm={10} xs={10}>
     
      <div className="input-group" >
      <div className="input-group-append">
      <button className="btn btn-secondary" onClick={SpeechRecognition.startListening} 
      data-bs-toggle="modal" data-bs-target="#exampleModal" to="#" type="button" style={{border:'2px solid #186494',backgroundColor:'#186494',borderTopLeftRadius:'60px',borderBottomLeftRadius:'60px'}}>
      <i className="fa fa-microphone"  aria-hidden="true"></i>
      </button>
    
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" >
   
      {listening||transcript?  <div className="modal-content">
      <div >
     <span style={{fontFamily:'initial'}}><h5  id="exampleModalLabel" align="center" justify="center">Please speak now listening<span style={{fontSize:'50px'}}> <span style={{color:'blue'}}>.</span><span style={{color:'red'}}>.</span><span style={{color:'orangered'}}>.</span><span style={{color:'green'}}>.</span> </span></h5></span>  
        
      </div>
      <div className="modal-body microphone" >
     
        <Lottie options={defaultOptions}
        style={{height:'150px',width:'150px'}}
         />
        
   
      </div>
      <div style={{padding:'2%'}}>
        {
          transcript
        }
        {transcript?
        localStorage.setItem("searchWord",transcript)
        
        :
        <span></span>
        }
      </div>
      <div className="modal-footer">
    
   <NavLink to="/allproducts"><button type="button"   value={transcript} data-bs-dismiss="modal" className="btn btn-primary" style={{background:'#186494',border:'1px solid silver'}}>Search</button> </NavLink>   
   
      </div>
    </div> : <div className="modal-content">
      <div >
     <span style={{fontFamily:'initial'}}><h5  id="exampleModalLabel" align="center" justify="center">Did not get that please try again <span style={{fontSize:'50px'}}> <span style={{color:'blue'}}></span><span style={{color:'red'}}></span><span style={{color:'orangered'}}></span><span style={{color:'green'}}></span> </span></h5></span>  
        
      </div>
      <div className="modal-body" >
     <img src={MicR} alt="micro-phone" width="120px" height="120px"></img>
        
   
      </div>
      <div style={{padding:'2%'}}>
        {
          transcript
        }
        {transcript?
        localStorage.setItem("searchWord",transcript)
        
        :
        <span></span>
        }
      </div>
      <div className="modal-footer">
    <button type="button"    data-bs-dismiss="modal" className="btn btn-primary" style={{background:'#186494'}}>Try again</button>  
   
      </div>
    </div>}
   
  </div>
</div>
    </div>
    <input type="text" onMouseLeave={SearchData} list="datalistOptions" className="form-control ShadowClass" placeholder="Search any product here ..." style={{border:'2px solid #186494'}}></input>
 

    <div className="input-group-append">
      <NavLink className="btn btn-secondary" to={displayproduct} type="button" style={{border:'2px solid #186494',backgroundColor:'#186494',borderTopRightRadius:'60px',borderBottomRightRadius:'60px'}}>
        <i className="fa fa-search"></i>
      </NavLink>
    </div>
  </div>
  
        </Grid>
        <Hidden mdDown="true">
        <Grid item md={2} lg={3} sm={1} xs={1}>

<Grid container  direction="row"justifyContent="center"alignItems="center">
   <Grid item md={4} > <NavLink to="/FilterProducts" style={{textDecoration:'none'}} onClick={CameraFun}> <Chip  style={{width:'110px',height:'40px',overflow:'hidden',border:'1px solid #186494',borderRadius:'50px'}} avatar={<Avatar style={{height:'32px',width:'32px'}} src="https://freepngimg.com/thumb/categories/667.png"></Avatar>} label="Cameras"></Chip></NavLink></Grid>
  
   <Grid item md={4} > <NavLink to="/FilterProducts" style={{textDecoration:'none'}} onClick={MobileFun}> <Chip style={{width:'110px',height:'40px',overflow:'hidden',border:'1px solid #186494',borderRadius:'50px'}} avatar={<Avatar style={{height:'32px',width:'32px'}} src={mobile}></Avatar>} label="Mobiles"></Chip></NavLink></Grid>
   <Grid item md={4} > <NavLink to="/FilterProducts" style={{textDecoration:'none'}} onClick={AllProductFun}><Chip style={{width:'110px',height:'40px',overflow:'hidden',border:'1px solid #186494',borderRadius:'50px'}} avatar={<Avatar style={{height:'32px',width:'32px'}} src="https://freepngimg.com/thumb/categories/673.png"></Avatar>} label="All Products"></Chip></NavLink>  </Grid>
</Grid>
</Grid>
        </Hidden>
      
    </Grid>
    </Paper>  
    </>)
}
export default SearchBar