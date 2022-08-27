import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import Logo from "../Assets/header-logo-img.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import SubscriptionsRoundedIcon from "@mui/icons-material/SubscriptionsRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
const Footer = () => {
  return (
    <Box sx={{ padding: "40px", textAlign: "center" }}>
      <Grid container>
        <Grid item lg={4} md={12} sm={12}>
          <item>
            <Typography variant="body">
              ©2021, <span style={{ color: "#00b870" }}>Sassico.</span> All
              Rights Reserved.
            </Typography>
          </item>
        </Grid>
        <Grid item lg={4} md={12} sm={12}>
          <item>
            <img src={Logo} alt="logo" height={40} />
          </item>
        </Grid>
        <Grid item lg={4} md={12} sm={12}>
          <item>
            <IconButton>
              <FacebookRoundedIcon
                sx={{ fontSize: "30px", color: "#00b870", marginRight: "5px" }}
              />
            </IconButton>
            <IconButton>
              <SubscriptionsRoundedIcon
                sx={{ fontSize: "30px", color: "#00b870", marginRight: "5px" }}
              />
            </IconButton>
            <IconButton>
              <LanguageRoundedIcon
                sx={{ fontSize: "30px", color: "#00b870", marginRight: "5px" }}
              />
            </IconButton>
          </item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
