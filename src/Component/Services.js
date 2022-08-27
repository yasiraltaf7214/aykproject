import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react';
import InsertPageBreakOutlinedIcon from '@mui/icons-material/InsertPageBreakOutlined';
import PermMediaOutlinedIcon from '@mui/icons-material/PermMediaOutlined';
const Services = () => {
  return (
    <Box sx={{marginTop:'150px',marginLeft:'50px'}}>
      <Grid container>
        <Grid item lg={6} md={12} sm={12}>
          <item>
            <Grid container sx={{marginTop:'70px'}}>
              <Grid item>
                <Box>
                <item>
                  <Typography variant='h6' sx={{color:'#00b870'}}>Customer service</Typography>
                </item><br />
                <item>
                  <Typography variant='h3' sx={{fontWeight:'bold'}}>Discover effortless customer support</Typography>
                </item><br />
                <item>
                  <Typography variant='body'>Convert your emails into tickets and keep them all organized in one place. Never leave customers' questions unanswered.</Typography>
                </item><br /><br />
                <item>
                <Button variant="outlined" sx={{borderColor:'#00b870', borderRadius:'20px', color:'#00b870', padding:'10px', width:'200px', marginTop:'30px',margin:'5px'}}>View More</Button>
                </item><br /><hr /><br />
                <item>
                  <InsertPageBreakOutlinedIcon sx={{fontSize:'40px', color:'#00b870'}} />
                <Typography variant='body' sx={{textAlign:'right'}}>You can help customers in real-time across all of your channels from email, social, website, iOS, and Android apps.</Typography>
                </item>
                </Box>
              </Grid>
            </Grid>
          </item>
        </Grid>
        <Grid item lg={6} md={12} sm={12}>
          <item>
            <Grid container >
              <Grid item lg={4} md={6} sm={6} sx={{ margin:'10px'}}>
                <item>
                 <Box sx={{backgroundColor:'#00b870', color:'white',padding:'30px', textAlign:'center',borderRadius:'15px'}}>
                 <PermMediaOutlinedIcon sx={{fontSize:'40px', }} />
                 <Typography variant='subtitle1' sx={{textAlign:'center', margin:'5px'}}>Experienced Engineers</Typography>
                 </Box>
                </item><br />
                <item>
                 <Box sx={{backgroundColor:'#00b870', color:'white',padding:'30px', textAlign:'center',borderRadius:'15px'}}>
                 <PermMediaOutlinedIcon sx={{fontSize:'40px', }} />
                 <Typography variant='subtitle1' sx={{textAlign:'center', margin:'5px'}}>Experienced Engineers</Typography>
                 </Box>
                </item><br />
              </Grid>
              <Grid item lg={4} md={6} sm={6} sx={{marginTop:'100px',marginLeft:'5px'}}>
                <item>
                 <Box sx={{backgroundColor:'#00b870', color:'white',padding:'30px', textAlign:'center',borderRadius:'15px'}}>
                 <PermMediaOutlinedIcon sx={{fontSize:'40px', }} />
                 <Typography variant='subtitle1' sx={{textAlign:'center', margin:'5px'}}>Experienced Engineers</Typography>
                 </Box>
                </item><br />
                <item>
                 <Box sx={{backgroundColor:'#00b870', color:'white',padding:'30px', textAlign:'center',borderRadius:'15px'}}>
                 <PermMediaOutlinedIcon sx={{fontSize:'40px', }} />
                 <Typography variant='subtitle1' sx={{textAlign:'center', margin:'5px'}}>Experienced Engineers</Typography>
                 </Box>
                </item><br />
              </Grid>
            </Grid>
          </item>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Services