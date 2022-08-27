import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import mockupimage from '../Assets/mockup-img.png';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import WifiIcon from '@mui/icons-material/Wifi';
import TuneIcon from '@mui/icons-material/Tune';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import Services from './Services';
import Contact from "./Contact";
import Testimonial from "./Testimonial";
import Portfolio from "./Portfolio";
const Home = () => {
  return (
    <Box sx={{margin:'100px'}}>
      <Box sx={{textAlign:'center', padding:'100px'}}>
        <Grid container >
          <Grid item lg={12} md={12} xs={12} >
            <item>
              <Typography variant="h2" sx={{fontWeight:'bold',margin:'10px'}}>
                Imagine what you'll love accomplish together
              </Typography>
            </item>
            <item>
              <Typography variant="body" sx={{margin:'5px'}}>
                Chances are good that there’s a cloud software as a service
                solution on the market today that will serve your back-office
                needs.
              </Typography>
            </item>
          </Grid>
          <Grid item lg={12} md={6} sm={12} sx={{textAlign:'center', marginTop:'10px'}}>
            <item>
              <Button sx={{backgroundColor:'#00b870', borderRadius:'15px', color:'white', padding:'10px', width:'200px',boxShadow:'0px 7px 20px 0px rgb(0 210 128 / 30%)', marginTop:'30px',margin:'5px'}}>Get Started</Button>
            </item>
            <item>
            <Button variant="outlined" sx={{borderColor:'#00b870', borderRadius:'15px', color:'#00b870', padding:'10px', width:'200px', marginTop:'30px',margin:'5px'}}>Know Feature</Button>
            </item>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container>
      <Grid item lg={12} md={12} sm={12} sx={{textAlign:'center', marginTop:'10px'}}>
            <item>
              <img src={mockupimage} alt="Mockup Image" width={'100%'}/>
            </item>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{padding:'100px'}}>
        <Grid container>
      <Grid item lg={3} md={6} sm={12} sx={{textAlign:'center', marginTop:'10px'}}>
            <item>
             <Box>
              <SentimentSatisfiedAltIcon sx={{fontSize:'50px', color:'#00b870'}}/>
              <Typography variant="h3" sx={{fontWeight:'bold'}}>100 %</Typography>
              <Typography variant="h6">Client Satisfaction</Typography>
             </Box>
            </item>
          </Grid>
          <Grid item lg={3} md={6} sm={12} sx={{textAlign:'center', marginTop:'10px'}}>
            <item>
             <Box>
              <WifiIcon sx={{fontSize:'50px', color:'#00b870'}}/>
              <Typography variant="h3" sx={{fontWeight:'bold'}}>24 h</Typography>
              <Typography variant="h6">Expert Support Team</Typography>
             </Box>
            </item>
          </Grid>
          <Grid item lg={3} md={6} sm={12} sx={{textAlign:'center', marginTop:'10px'}}>
            <item>
             <Box>
              <TuneIcon sx={{fontSize:'50px', color:'#00b870'}}/>
              <Typography variant="h3" sx={{fontWeight:'bold'}}>98 k+</Typography>
              <Typography variant="h6">Sales Count</Typography>
             </Box>
            </item>
          </Grid>
          <Grid item lg={3} md={6} sm={12} sx={{textAlign:'center', marginTop:'10px'}}>
            <item>
             <Box>
              <InsertDriveFileOutlinedIcon sx={{fontSize:'50px', color:'#00b870'}}/>
              <Typography variant="h3" sx={{fontWeight:'bold'}}>208 +</Typography>
              <Typography variant="h6">Client Worldwide</Typography>
             </Box>
            </item>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Services />
      </Box>
      <Box>
        <Contact />
      </Box>
      <Box>
        <Testimonial />
      </Box>
      <Box>
        <Portfolio />
      </Box>
    </Box>
  );
};

export default Home;
