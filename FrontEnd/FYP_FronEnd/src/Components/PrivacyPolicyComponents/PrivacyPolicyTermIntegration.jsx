import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Hidden, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PrivacyPolicy from './PrivacyPolicy';

import TermCondition from "./TermCondition";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function PrivacyPolicyTermIntegration() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (<>
    <Hidden smDown="true">
    <Box sx={{ bgcolor: 'background.paper', margin:'1%',padding:'1%'}}>
      <center>
      <Hidden mdUp={true}>
      <Paper elevation={24} style={{width:'25%'}}>
      <AppBar position="static" style={{background:'#186494',width:'100%',marginBottom:'5%'}}>
        <Tabs
          centered
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          
          aria-label="full width tabs example"
         
        >
          <Tab label="Privacy Policy" {...a11yProps(0)} />
          <Tab label="Terms & Conditions" {...a11yProps(1)} />
         
        </Tabs>
      </AppBar>
      </Paper>
      </Hidden>
      <Hidden mdDown={true}>
        <Paper elevation={24} style={{width:'25%'}}>
        <AppBar position="static" style={{background:'#186494',borderRadius:'7px',marginBottom:'5%'}}>
        <Tabs
          centered
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          
          aria-label="full width tabs example"
         
        >
          <Tab label="Privacy Policy" {...a11yProps(0)} />
          <Tab label="Terms & Conditions" {...a11yProps(1)} />
         
        </Tabs>
      </AppBar>
        </Paper>
    
      </Hidden>
      </center>
     
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <PrivacyPolicy/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <TermCondition/>
        </TabPanel>
    
      </SwipeableViews>
    </Box>
    </Hidden>
    <Hidden smUp="true">
    <Box sx={{ bgcolor: 'background.paper', margin:'1%',padding:'1%'}}>
      <center>
      <Hidden mdUp={true}>
      <Paper elevation={24} style={{width:'95%'}}>
      <AppBar position="static" style={{background:'#186494',width:'100%',marginBottom:'5%'}}>
        <Tabs
          centered
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          
          aria-label="full width tabs example"
         
        >
          <Tab label="Privacy Policy" {...a11yProps(0)} />
          <Tab label="Terms & Conditions" {...a11yProps(1)} />
         
        </Tabs>
      </AppBar>
      </Paper>
      </Hidden>
      <Hidden mdDown={true}>
        <Paper elevation={24} style={{width:'25%'}}>
        <AppBar position="static" style={{background:'#186494',borderRadius:'7px',marginBottom:'5%'}}>
        <Tabs
          centered
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          
          aria-label="full width tabs example"
         
        >
          <Tab label="Privacy Policy" {...a11yProps(0)} />
          <Tab label="Terms & Conditions" {...a11yProps(1)} />
         
        </Tabs>
      </AppBar>
        </Paper>
    
      </Hidden>
      </center>
     
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <PrivacyPolicy/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <TermCondition/>
        </TabPanel>
    
      </SwipeableViews>
    </Box>
</Hidden>
  
    </>
  );
}






























