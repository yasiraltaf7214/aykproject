import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import bgImage from '../Assets/BgImage/bg-elements-with-dots-green (1).png'
const Contact = () => {
  return (
    <Box>
      <Grid container sx={{ margin: "0%"}}>
        <Grid
          item
          lg={6}
          sm={12}
          md={12}
          sx={{
            textAlign: "right",
            paddingTop: "150px",
            paddingBottom: "150px",
          }}
        >
          <Box>
            <item>
              <Typography variant="h6" sx={{ color: "#00b870" }}>
                Have any query?
              </Typography>
            </item>
            <br />
            <item>
              <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                Let’s Talk
              </Typography>
            </item>
            <br />
            <item>
              <Typography variant="body">
                Whether you need a full product, consultation, tech investments
                or an extended team, our expert will help you find the best
                solutions.
              </Typography>
            </item>
          </Box>
        </Grid>
        <Grid item lg={6} sm={12} md={12}>
          <Paper sx={{ marginLeft: "50px", marginTop: "70px", backgroundImage:`url(${bgImage})` }}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { width: "50%" },
                textAlign: "center",
                padding: "30px",
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Your Name"
                variant="outlined"
              />
              <br />
              <br />
              <TextField id="outlined-basic" label="Email" variant="outlined" />
              <br />
              <br />
              <TextField
                id="outlined-basic"
                label="Subject"
                variant="outlined"
              />
              <br />
              <br />
              <TextField
                id="outlined-multiline-static"
                label="Write your text"
                variant="outlined"
                multiline
                rows={4}
              /><brv /><br /><br />
              <Button sx={{backgroundColor:'#00b870', borderRadius:'15px', color:'white', padding:'10px', width:'200px'}}>Submit Now</Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
