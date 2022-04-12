import { Hidden, makeStyles, Typography} from '@material-ui/core';
import Grid from '@mui/material/Grid';
import image1 from '../Images/about1.png';
import image2 from '../Images/about2.png';
import image3 from '../Images/about3.png';
import image4 from '../Images/about4.png';


const useStyle=makeStyles({
     maindiv:{
         marginTop:"80px",
         marginLeft:"40px",
         marginRight:"40px",
         marginBottom:'40px',
         background:'white',
         padding:'2%'
     },
     grid1div:{
         marginTop:"0px",
     },
     imagesty1:{
         marginTop:"20px",
         marginLeft:"120px",
         "@media (max-width: 768px)": {
             marginLeft:"10px",
           }
     },
     textsty1:{
         marginTop:"30px",
         textAlign:"justify",
     },
     grid2:{
         marginTop:"90px",
     },
     imagesty2:{
         marginLeft:"120px",
         marginTop:"0px",
         "@media (max-width: 768px)": {
             marginLeft:"65px",
           }
     },
     textsty3:{
         marginTop:"20px",
     },
     stop:{
         marginTop:"90px",
     },
     anywhere:{
         marginTop:"90px",
     },
})
const AboutUs=()=>{
    const classes=useStyle();
    return(
        <div className={classes.maindiv}>
            <div className={classes.grid1div}>
                <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <h1>About PakElectronics.com</h1>
                            <Typography className={classes.textsty1}>Launched in 2021, PakElectronics.com is the leading platform for global wholesale trade. We serve millions of buyers and suppliers around the world.</Typography>
                        </Grid>
                        <Hidden smDown="true">
                        <Grid item xs={12} sm={6}>
                            <img src={image1} className={classes.imagesty1}/>
                        </Grid>
                        </Hidden>
                     
                    </Grid>
            </div>
            <div className={classes.grid2}>
                <Grid container spacing={2}>
                        <Grid item  xs={12} sm={6}>
                        <Hidden smDown="true">
                            <img src={image2} className={classes.imagesty2}/>
                            </Hidden>
                        </Grid>
                        <Grid item  xs={12} sm={6}>
                            <h1>Our Mission</h1>
                            <Typography className={classes.textsty1}>As part of the Alibaba Group, our mission is to make it easy to do business anywhere.</Typography>
                            <Typography className={classes.textsty3}>We do this by giving suppliers the tools necessary to reach a global audience for their products, and by helping buyers find products and suppliers quickly and efficiently.</Typography>
                        </Grid>
                    </Grid>
            </div>
            <div className={classes.stop}>
                <Grid container spacing={2}>
                        <Grid item  xs={12} sm={6}>
                            <h1>One-Stop Sourcing</h1>
                            <Typography className={classes.textsty1}>Alibaba.com brings you hundreds of millions of products in over 40 different major categories, including consumer electronics, machinery and apparel.</Typography>
                            <Typography className={classes.textsty3}>Buyers for these products are located in 190+ countries and regions, and exchange hundreds of thousands of messages with suppliers on the platform each day.</Typography>
                        </Grid>
                        <Grid item  xs={12} sm={6}>
                        <Hidden smDown="true">
                            <img src={image3} className={classes.imagesty1}/>
                            </Hidden>
                        </Grid>
                    </Grid>
            </div>
            <div className={classes.anywhere}>
                <Grid container spacing={2}>
                        <Grid item  xs={12} sm={6}>
                        <Hidden smDown="true">
                            <img src={image4} className={classes.imagesty2}/>
                            </Hidden>
                        </Grid>
                        <Grid item  xs={12} sm={6}>
                            <h1>Anytime, Anywhere</h1>
                            <Typography className={classes.textsty1}>As a platform, we continue to develop services to help businesses do more and discover new opportunities.</Typography>
                            <Typography className={classes.textsty3}>Whether it’s sourcing from your mobile phone or contacting suppliers in their local language, turn to Alibaba.com for all your global business needs.</Typography>
                        </Grid>
                    </Grid>
            </div>
        </div>
    )
}
export default AboutUs;