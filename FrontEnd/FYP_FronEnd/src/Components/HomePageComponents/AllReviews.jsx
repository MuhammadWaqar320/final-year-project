import React from 'react';
import { Paper } from '@material-ui/core';
import { Box } from '@mui/material';
import { Rating } from 'react-simple-star-rating'
import { Grid, Hidden } from '@material-ui/core';
import { useEffect,useState } from "react";
import axios from "axios";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
const AllReviews = () => {
  const [reviewRating,setReviewRating]=useState([])
  const [avg,setAvg]=useState(0)

  const FetchDataFromApi=async()=>
  {
    let avg_rating=0;
    const response=await axios.get('http://127.0.0.1:8000/api/reviews_rating/')
    const FetchedData=response.data
    FetchedData.map(item => {
      avg_rating += parseFloat(item.rating);
    });
    let total_reviews=FetchedData.length;
    let AVG=(avg_rating/total_reviews);
    if(AVG>=5.1)
    {
      setAvg(4.99)
    }
    else
    {
     
      setAvg(AVG)
    }
   
    setReviewRating(FetchedData)
  }
 
  useEffect(()=>
  {
    FetchDataFromApi()
  
  },[])
     
  return (<>
 <Paper elevation={24} style={{margin:'4%',borderRadius:'15px',background:'#ebedf0'}}>
   <Box className='reviewPageTop'>
        <center><span style={{color:'white',fontSize:'28px'}} >Customers Reviews({Math.round((avg + Number.EPSILON) * 100) / 100}/5)</span></center>
   </Box>
     <Box className='reviewPageCenter'>
      {
        reviewRating.map((item,index)=>
        (
          <Paper elevation={3} style={{padding:'2%',marginBottom:'15px'}}>
      
        
          <Grid container direction="row">
            <Grid item md={6}>
                  <img  style={{border:'1px solid silver',height:'45px',width:'45px',borderRadius:'50px',marginRight:'10px',float:'left'}} src="data:image/png;base64,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"></img>
          <span>{item.customer_name}</span>
          <div>20-2-2022</div>
            </Grid>
            <Grid item md={6} align="right">
          
            <Rating  ratingValue={item.rating}  /* Available Props */ />  
            </Grid>
          </Grid>
            
          
            <Box>
            <p>{item.reviews}</p>
              </Box>
    
         
         </Paper>
        )
       )
      }
     </Box>
     <Box className='reviewPageDown'>

     </Box>
 </Paper>
  </>)
};
export  default AllReviews