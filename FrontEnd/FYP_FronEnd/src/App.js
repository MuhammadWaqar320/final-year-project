
import './App.css';
import NavBar from './Components/CommonComponents/NavBar'
import Footer from './Components/CommonComponents/Footer';
import HomePage from './Components/HomePageComponents/HomePageIntegration';
// import Register from './Components/RegistrationComponents/registeration';
import ContactUs from './Components/ContactUsComponents/ContactUsIntegration'

import {  Route,Switch,Redirect } from "react-router-dom";
import ProductDetailIntegration from './Components/ProductDetailComponents/ProductDetailIntegration';
import DisplayAllProducts from './Components/DisplayAllProductComponents/DisplayProductIntegration';
import CategoriesAllProducts from './Components/DisplayAllProductComponents/CategoriesAllProducts';
import PrivacyPolicyTermIntegration from './Components/PrivacyPolicyComponents/PrivacyPolicyTermIntegration';
import ForgotpasswordIntegration from './Components/ForgotPassword/forgotpasswordIntegration';
import ResetForgotted from './Components/ForgotPassword/ResetForgotted';
import { useEffect,useState } from 'react';
import SurveyForm from './Components/ContactUsComponents/surveyForm';
import Lottie from 'react-lottie';
import Notfound from './Components/CommonComponents/notfound';
import  AllReviews  from './Components/HomePageComponents/AllReviews';
import * as animationData from './Components/Lottie Files/8774-loading.json';
import AboutUs from './Components/StaticComponent/AboutUs';
import Checkout from './Components/cart/Checkout'
import Cart from './Components/cart/Cart';
import FAQ from './Components/StaticComponent/Faq';
import how from './Components/StaticComponent/HowToOrder';


function App() {
 
 
  return (<>


     <div>
   
      <NavBar  />
      <Switch>
      {/* <Route>404 Not Found!</Route> */}
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/contactus" component={ContactUs}></Route>
        <Route exact path="/faq" component={FAQ}></Route>
        <Route exact path="/about" component={AboutUs}></Route>
        <Route exact path="/how" component={how}></Route>
        <Route exact path="/term" component={FAQ}></Route>
        <Route exact path="/cart" component={Cart}></Route>
        <Route exact path="/policy" component={FAQ}></Route>
        <Route exact path="/checkout/:total/" component={Checkout}></Route>
        {/* <Route  path="/notfound" component={Notfound}></Route>
        <Redirect to="/notfound"/> */}
        <Route exact path="/survey" component={SurveyForm}></Route>
        <Route exact path="/forgetreset" component={ResetForgotted}></Route>
        <Route exact path="/allreviews" component={AllReviews}></Route>
        <Route exact path="/forgotpassword" component={ForgotpasswordIntegration}></Route>
        <Route exact path="/policyTerm" component={PrivacyPolicyTermIntegration}></Route>
        <Route exact path="/FilterProducts" component={CategoriesAllProducts} />
        <Route exact path="/allproducts" component={DisplayAllProducts} />
        <Route exact path="/:id/" component={ProductDetailIntegration} />
       
     
        {/* <Route exact path="/AboutUs" component={AboutUs} /> */}
     
      </Switch>
    
      <Footer />
   
      </div>
   

    
     
   
    </>
  );
}

export default App;
