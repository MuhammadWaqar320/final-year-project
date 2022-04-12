import { Grid, Hidden, Paper } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../App.css';
import Lottie from 'react-lottie';
import * as animationData from '../Lottie Files/lf30_editor_6zlfydhi.json'
import BgImage from '../Images/bgImage.jpg';

const SliderComponent=()=>
{
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return (<>
  <Hidden smDown="true">
       <div className="Feature">
           <Grid container direction='row'>
               <Grid item md={8}>
               <div className="Feature-Div">
                <h2 style={{color:'#f3ce73'}}>Buy Best Products Of The World From PakElectronics</h2>
                <p>The PakElectronics is one of the fast-growing App. After the growth of online shopping, PakElectronics sales are reaching new heights. The global apparel market is valued at 3 trillion dollars, which is nearly 2% of the world’s Gross Domestic Product.</p>
            
                <NavLink to="#" className="btn BTN-Class" >Shop Now</NavLink>
                <NavLink to="#" className="btn BTN-Class1"  >
                    SignIn
                </NavLink>
            </div>
               </Grid>
               <Grid item md={4}  >
                 <div className='center1' >
                 <Lottie options={defaultOptions}
        style={{height:'550px',width:'500px'} }
         />
                     </div>  
              
               </Grid>
          
           </Grid>
        
       </div>
  </Hidden >
    <Hidden mdUp="true">
    <Paper elevation={5} className="SliderDiv">
        <Grid container direction="row" justifyContent="center" align="center" justify="center"> 
            <Grid item md={12} style={{backgroundColor:'blueviolet'}}>

              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                     <div className="carousel-indicators">
                     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                     </div>
                     <div className="carousel-inner">
                     <div className="carousel-item active">
                     <img src="https://img.alicdn.com/imgextra/i2/O1CN012SqPNB1zQJVmnWFFM_!!6000000006708-2-tps-990-400.png" className="d-block w-100" alt="..."></img>
                     </div>
                     <div className="carousel-item ">
                     <img src="	https://img.alicdn.com/imgextra/i1/O1CN01vU3fJO1xusiSTpH99_!!6000000006504-0-tps-990-400.jpg" className="d-block w-100" alt="..."></img>
                     </div>
                     <div className="carousel-item">
                     <img src="https://s.alicdn.com/@img/imgextra/i2/O1CN01wlclhz1hnWUyEoz4X_!!6000000004322-0-tps-990-400.jpg" className="d-block w-100" alt="..."></img>
                     </div>
                     
                     </div>
                     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                     <span className="visually-hidden">Previous</span>
                     </button>
                     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
                     <span className="visually-hidden">Next</span>
                     </button>
              </div>
            </Grid>






      
       
        </Grid>



    </Paper>
    </Hidden>
   
    </>)
}
export default SliderComponent