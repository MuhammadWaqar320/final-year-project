import { Paper ,Grid} from "@material-ui/core";
import { Box, Button,  Typography } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import video1 from '../../Components/Images/V1.mp4';
import video2 from '../../Components/Images/V7.mp4';
import video3 from '../../Components/Images/V8.mp4';
import video4 from '../../Components/Images/V9.mp4';
import video5 from '../../Components/Images/vd22.mp4';
import video6 from '../../Components/Images/vd33.mp4';
import video7 from '../../Components/Images/vd66.mp4';
import video8 from '../../Components/Images/VV1.mp4';
import GridViewIcon from '@mui/icons-material/GridView';
const EmbedVideo=()=>
{
    return (
    <>
    <Paper style={{marginTop:'0.6%',padding:'30px'}}>
    <Box style={{display:'flex'}}>
          <Typography><h3 style={{fontFamily:'initial',color:'#081333'}}>Related Information</h3></Typography>

        </Box>
        <hr style={{color:'grey',marginBottom:'1.3%'}}></hr>
    <Grid container direction="row" justify="center" align="justify" spacing={2}>
   
    <Grid item md={3}>
            <video width="100%" controls height="250px" src={video4}>
					
						Your browser does not support HTML5 video.
					</video>
					Manufacturing and building a brand. For manufacturing you have to
					manufacture in china, or import parts and assemble in india.
            </Grid>
            <Grid item md={3}>
            <video width="100%" controls height="250px" src={video1}>
			
			Your browser does not support HTML5 video.
			</video>
			<p>This video is about Huawei y7 prime.Huawei Y7 Prime 2018's retail price in Pakistan is Rs.
				22,499.</p>
            </Grid>
            <Grid item md={3}>
            <video width="100%" controls height="250px" src={video2}>
					
						Your browser does not support HTML5 video.
					</video>
					WHATSAPP has introduced a way to send text messages without having to physically type them out.
            </Grid>
            <Grid item md={3}>
            <video width="100%" controls height="250px" src={video3}>
					
						Your browser does not support HTML5 video.
					</video>
					an IC, a chip, or a
					microchip) is a set of electronic circuits on one small flat piece (or "chip") of semiconductor
					material that is normally silicon.
            </Grid>
         
        </Grid>
        <Grid container direction="row" justify="center" align="justify" spacing={2}>
        <Grid item md={3}>
            <video width="100%" controls height="250px" src={video8}>
					
						Your browser does not support HTML5 video.
					</video>
			<p>		Manufacturing and building a brand. For manufacturing you have to
					manufacture in china, or import parts and assemble in india.</p>
            </Grid>
            <Grid item md={3}>
            <video width="100%" controls height="250px" src={video5}>
			
			Your browser does not support HTML5 video.
			</video>
			<p>This video is about Huawei y7 prime.Huawei Y7 Prime 2018's retail price in Pakistan is Rs.
				22,499.</p>
            </Grid>
            <Grid item md={3}>
            <video width="100%" controls height="250px" src={video6}>
					
						Your browser does not support HTML5 video.
					</video>
					WHATSAPP has introduced a way to send text messages without having to physically type them out.
            </Grid>
            <Grid item md={3}>
            <video width="100%" controls height="250px" src={video7}>
					
						Your browser does not support HTML5 video.
					</video>
					an IC, a chip, or a
					microchip) is a set of electronic circuits on one small flat piece (or "chip") of semiconductor
					material that is normally silicon.
            </Grid>
       
        </Grid>
    </Paper>
    </>)
}
export default EmbedVideo