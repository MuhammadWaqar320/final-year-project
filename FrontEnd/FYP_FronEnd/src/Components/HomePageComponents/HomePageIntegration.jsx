import React  from "react";
import BottomNavBar from './BottomNavBar';
import SearchBar from './SearchBar';
import SliderComponent from './SliderComponent';
import AccessoriesComponent from "./AccessoriesComponent";
import SignInOption from "./SignInOption";
import WhyBuy from "./WhyBuy";
import JustForYou from "./JustForYou";
import BeautifullLaptop from "./BeautifullLaptop";
import { setRating } from "../../Redux/Action/actions";
import {useDispatch } from "react-redux";
import MapComponent from "./MapComponent";
import MultiSlider from "./MultiSlider";
import DecrementCounter from "./DecrementCounter";
import Testinomial from "./Testinomial";

import Hidden from '@mui/material/Hidden';
import '../../App.css';
import EmbedVideo from "./EmbedVideo";
import MobileWatchCamera from "./MobileComponent";
import FreeShopping from "./freeShopping";
import FreeShopping1 from "./shipping1";
import { useEffect,useState } from "react";
import axios from "axios";

const HomePageIntegration=()=>
{
  const [reviewRating,setReviewRating]=useState([])
  const dispatch=useDispatch()
  const FetchDataFromApi=async()=>
  {
    const response=await axios.get('http://127.0.0.1:8000/api/reviews_rating/')
    setReviewRating(response.data)
    dispatch(setRating(response.data))
  }

useEffect(()=>
{
  FetchDataFromApi()
},[])
  
    return (<>
    <SearchBar />
    <BottomNavBar />
    <SliderComponent />
    <AccessoriesComponent />
    <div style={{paddingTop:'1.5%',paddingBottom:'1.5%',paddingLeft:'2%',paddingRight:'2%'}}>
        <WhyBuy />
        <Hidden smDown="true">
        <MultiSlider />  
        </Hidden>
       
    
        <Hidden smDown="true">
        <BeautifullLaptop />
        </Hidden>
       
        {/* <Hidden smDown="true"> */}
        <DecrementCounter />
        {/* </Hidden> */}
     <Hidden smDown="true">
     <FreeShopping/>
     </Hidden>
     
       <Hidden smUp="true">
       <FreeShopping1/>
       </Hidden>
      
        <Hidden smDown="true">
         <Testinomial />
        </Hidden>
     
         <JustForYou />
         <Hidden smDown="true">
         <MobileWatchCamera  name="Mobile" />
         <MobileWatchCamera  name="Camera" />
         <MobileWatchCamera  name="SmartWatch" />
         </Hidden>
       

   
         <EmbedVideo />
    
    
    </div>
    <SignInOption />
  <MapComponent></MapComponent>
    </>)
}



export default HomePageIntegration