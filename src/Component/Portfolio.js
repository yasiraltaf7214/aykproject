import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import dashboard from '../Assets/dashboard_screenshot.jpg';
import { textAlign, width } from '@mui/system';


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

const Portfolio = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box>
      <Box sx={{justifyContent:'center',display:'flex'}}>
      <Typography variant='h4' sx={{fontWeight:'bold',width:'70%', textAlign:'center', padding:'10px'}}>We're a software development company that provides state-of-the art solutions for startups and enterprise.</Typography>
      </Box>
        <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='#00b870'
          textColor="inherit"
          variant="fullWidth"
          centered
        >
          <Tab label="Experienced Engineers" sx={{border:'solid',margin:'20px', height:'150px',maxWidth:'200px', borderColor:'#00b870', boxShadow:'0px 7px 20px 0px rgb(0 210 128 / 30%)'}} {...a11yProps(0)} />
          <Tab label="Experienced Engineers" sx={{border:'solid',margin:'20px', height:'150px',maxWidth:'200px', borderColor:'#00b870', boxShadow:'0px 7px 20px 0px rgb(0 210 128 / 30%)'}} {...a11yProps(1)} />
          <Tab label="Experienced Engineers" sx={{border:'solid',margin:'20px', height:'150px',maxWidth:'200px', borderColor:'#00b870', boxShadow:'0px 7px 20px 0px rgb(0 210 128 / 30%)'}} {...a11yProps(2)} />
        </Tabs>
        </Box>
      <SwipeableViews
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0}>
          <Box>
            <img src={dashboard} />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1} >
        <Box>
            <img src={dashboard} />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={2}>
        <Box>
            <img src={dashboard} />
          </Box>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}

export default Portfolio