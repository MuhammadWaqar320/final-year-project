import React from 'react';
import { makeStyles, Typography} from '@material-ui/core';
import Grid from '@mui/material/Grid';


import image1 from '../Images/howtoplaceorder.jpg';
import image2 from '../Images/step1.png';
import image3 from '../Images/step2.png';
import image4 from '../Images/step3.png';
import image5 from '../Images/step4.png'

const useStyle = makeStyles({
    image1style: {
        width: "100%",
        height: "400px",
    },
    maindiv: {
        marginTop: "80px",
        marginLeft: "30px",
        marginRight: "30px", 
    },
    typofirst: {
        marginTop: "30px",
    },
    typosec: {
        marginTop: "15px",
    },
    headingFirst: {
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: "25px",
        marginTop: "35px",
    },
    headingthird: {
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: "25px",
    },
    liststyle: {
        marginTop: "15px",
    },
    liitem: {
        marginTop: "10px",
    },
    quesdiv: {
        marginTop: "15px",
    },
    quesheading: {
        fontWeight: "bold",
        fontSize: "15px",
        marginTop: "15px"
    },
    quesans: {
        marginTop: "15px",
    },
    stepdiv: {
        marginTop: "15px",
    },
    stepcolor: {
        marginTop: "45px",
        backgroundColor: "#313131",
        color: "white",
        padding:"20px",
        textAlign:"center",
    },
    stepimage:{
        marginTop:"30px",
        height:"500px",
        width:"400px",
        marginLeft:"80px",
        "@media (max-width: 768px)": {
            height:"150px",
            width:"150px",
            marginLeft:"10px",
          }
    },
    steptext:{
        marginTop:"250px",
        "@media (max-width: 768px)": {
            marginTop:"30px",
          }
    },
    para:{
        textAlign:"center",
        fontFamily:"italy",
        padding:"30px",
    },
})
const HowToOrder = () => {
    const classes = useStyle();
    return (
        <div className={classes.maindiv}>
            <img src={image1} className={classes.image1style} />
            <div className={classes.textdiv}>
                <Typography className={classes.typofirst}>Want to Learn How to Place Order on PakElectronics? Well this post will tell you How to do Online Shopping on PakElectronics in 2022.</Typography>
                <Typography className={classes.typosec}>PakElectronics has been the go-to online platform for your online orders. People come on the PakElectronics website in search of products they need and in search of convenience. Safe to say, PakElectronics has done a pretty good job in providing that convenience in comfort.</Typography>
                <Typography className={classes.typosec}>But if you’re new on PakElectronics, or are still in process of figuring out your PakElectronics-journey, then you should find this article useful.  it’s important that you know how to place order on PakElectronics!</Typography>
                <Typography className={classes.headingFirst}>How To Place Order on PakElectronics</Typography>
            </div>
            <div className={classes.liststyle}>
                <ol>
                    <li className={classes.liitem}>To Place Order On PakElectronics Open The PakElectronics Website.</li>
                    <li className={classes.liitem}>Open and sign up with PakElectronics so that you have a registered account on PakElectronics.</li>
                    <li className={classes.liitem}>Now browse through the categories or search for your desired item, you can also use the search bar.</li>
                    <li className={classes.liitem}>When you’ve found your item, tap and go through the product information.</li>
                    <li className={classes.liitem}>Make sure you check its delivery time, product rating & reviews.</li>
                    <li className={classes.liitem}>If you’re satisfied with the product, click Add to Cart if you are buying multiple products, if you want to place an order directly tap Buy Now .</li>
                    <li className={classes.liitem}>In Buy Now, Indicate your preferred quantity or variation if available once confirmed than you will be directed to the Shopping Cart.</li>
                    <li className={classes.liitem}>Select the products you want and tap Check Out in Shopping Cart.</li>
                    <li className={classes.liitem}>On the Check Out page, make sure you select your preferred delivery address, delivery method than tap Proceed To Pay.
                        It’s important that you remember to add your COMPLETE delivery address and ACTIVE contact details.</li>
                    <li> className={classes.liitem}Tap “Place Order”.</li>
                </ol>
            </div>

            <div className={classes.quesdiv}>
                <Typography className={classes.quesheading}>What is the delivery time for my PakElectronics order?</Typography>
                <Typography className={classes.quesans}>You can find the delivery details when placing your order. It usually takes 7-14 days to deliver within Pakistan.</Typography>
                <Typography className={classes.quesheading}>How to add delivery address to my PakElectronics order?</Typography>
                <Typography className={classes.quesans}>You can add shipping details when checking out for your order. Under the shipping details section, you can add delivery address.</Typography>
                <Typography className={classes.quesheading}>How to track your PakElectronics order?</Typography>
                <Typography className={classes.quesans}>You can track your PakElectronics order through your PakElectronics account. Throughout the processing and delivery of your order, PakElectronics will notify you of shipping and delivery updates through messages on PakElectronics Website. You can also find your order status in the order details section on the Website.</Typography>
            </div>

            <div className={classes.stepdiv}>
                <Typography className={classes.headingFirst}>Here are 5 simple steps to place your order on PakElectronics successfully:</Typography>

                <div className={classes.stepcolor}>
                    <Typography className={classes.headingthird}>Step #01</Typography>
                </div>
                <div className={classes.griddiv}>
                <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <img src={image2} className={classes.stepimage}/>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={classes.steptext}>Once you’ve found the product you’re looking for, find the Buy Now button and click on it. And if you’re making multiple purchases, then tap on Add to cart.</Typography>
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.stepcolor}>
                    <Typography className={classes.headingthird}>Step #02</Typography>
                </div>
                <div className={classes.griddiv}>
                <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography className={classes.steptext}>If you added the item to the cart, then go to your shopping cart. Select the items you want to buy, and then tap on Check Out.</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <img src={image3} className={classes.stepimage}/>
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.stepcolor}>
                    <Typography className={classes.headingthird}>Step #03</Typography>
                </div>
                <div className={classes.griddiv}>
                <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <img src={image4} className={classes.stepimage}/>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={classes.steptext}>Now you’ll see your checkout tab displayed on your screen. You can review all the product details and enter a voucher code if you wish to avail one. Here you can edit the delivery address and delivery method as well. Make sure you also check the product quantity, and then click on proceed to pay.</Typography>
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.stepcolor}>
                    <Typography className={classes.headingthird}>Step #04</Typography>
                </div>
                <div className={classes.griddiv}>
                <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography className={classes.steptext}>You’ll then get a number of options to pay that you can choose from. Select your desired method of payment to proceed further.</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <img src={image5} className={classes.stepimage}/>
                        </Grid>
                    </Grid>
                </div>

                <p className={classes.para}>Daraz App is all about making your user experience all-the-more friendly. And with these steps, we’re sure you’ll no longer struggle with placing your order! So get ready for your next purchase! Daraz is ever-ready with its amazing deals, wide variety of products and convenient shopping experience!</p>
            </div>

        </div>
    )
}
export default HowToOrder;