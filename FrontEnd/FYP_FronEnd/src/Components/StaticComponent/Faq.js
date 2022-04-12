import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles} from '@material-ui/core';

import { Box } from '@mui/material';
const useStyle=makeStyles({
     maindiv:{
         marginTop:"50px",
         margin:"50px",
     }
})
const Faq = () => {
    const classes = useStyle();
    return (
        <div className={classes.maindiv}>
            <Box style={{marginBottom:'2%'}}>
                <center>
                <h1>Frequently Ask Questions</h1>
                </center>
               
            </Box>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>What is PakElectronics?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        PakElectronics.com is a leading online retailer of products that inform, educate, and inspire.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Why do I encounter various availability listings on your site?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Titles have different availabilities simply due to their demand, proximity, and availability to PakElectronics.com. We also source our products from various distributors. The availability on products we obtain from distributors may vary according to whether the distributor has the product in stock or not.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography>What is PakElectronics Group's mission?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Our mission is “to make it easy to do business anywhere.” Our founders started our company to champion small businesses, in the belief that the Internet would level the playing field by enabling small enterprises to leverage innovation and technology to grow and compete more effectively in domestic and global economies.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>What is Alibaba Group doing to help the community?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    We have always felt a responsibility to help solve problems in society, because that is implied in our mission – “to make it easy to do business anywhere.” 
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>What is PakElectronics Group’s core business?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    We enable businesses to transform the way they market, sell and operate and improve their efficiencies. We provide the technology infrastructure and marketing reach to help merchants, brands, retailers and other businesses to leverage the power of new technology to engage with their users and customers and operate in a more efficient way. Our businesses are comprised of commerce, cloud computing, digital media and entertainment, and innovation initiatives. For more information on our key offerings.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>How do I navigate to digital goods?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    To buy a digital good, please follow the below steps:
                        <ul>
                            <li>Visit The PakElectronics WebSites.</li>
                            <li>Select the Category you wish to shop from</li>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>What is the delivery timeline of Digital Goods?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Once you have registered and made the payment, you will receive your digital good(s) within 24 hours.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>What are the payment methods available for Digital Goods?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                     The Payment Method Available For Digital Goods Is Stripe.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
export default Faq;