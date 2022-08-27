import {
  Toolbar,
  Box,
  Tabs,
  Tab,
  Button,
  AppBar,
  Grid,
  useTheme,
  useMediaQuery,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Logo from "../Assets/header-logo-img.png";
import AppBarDrawer from "./Drawers/AppBarDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@material-ui/core/styles";
import { ListItemText } from "@material-ui/core";
import { List, ListItem, SwipeableDrawer } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import SubscriptionsRoundedIcon from "@mui/icons-material/SubscriptionsRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  menuBtn: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginRight: "auto",
  },
  content: {
    padding: theme.spacing(3),
  },
  drawer: {
    width: 450,
    padding: "30px",
  },
}));
const AppBarUI = () => {

  const classes = useStyles();
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);

  return (
    <Box>
      {/* Start Contact Drawer */}
      <SwipeableDrawer
        open={open}
        onClose={() => setOpen(false)}
        anchor="right"
      >
        <Box>
        <List disablePadding className={classes.drawer}>
          <ListItem
            button
            sx={{ alignItems: "right" }}
            onClick={() => setOpen(false)}
          >
            <CloseOutlinedIcon />
          </ListItem>
          <ListItem>
            <ListItemText>
              <Box sx={{ margin: "10px" }}>
                <img src={Logo} alt="logo" height={70} />
              </Box>
              <br />
              <br />
              <Box sx={{ margin: "10px" }}>
                <Typography variant="h5">About Us</Typography>
                <Typography variant="body">
                  We must explain to you how all seds this mistakens idea off
                  denouncing pleasures and praising pain was born and I will
                  give you a completed accounts off the system and expound.
                </Typography>
              </Box>
              <br />
              <Box sx={{ margin: "10px" }}>
                <Button
                  sx={{
                    backgroundColor: "#00b870",
                    borderRadius: "15px",
                    color: "white",
                    padding: "10px",
                    width: "200px",
                  }}
                >
                  Let Connect
                </Button>
              </Box>
              <br />
              <Box sx={{ margin: "10px" }}>
                <Typography variant="h5">Contact Info</Typography>
              </Box>
            </ListItemText>
          </ListItem>
          <ListItem button indicatorColor="inherit">
            <LocationOnOutlinedIcon />
            <ListItemText>81 Lake Floyd Circle, Gaithersburg</ListItemText>
          </ListItem>
          <ListItem button indicatorColor="inherit">
            <PhoneIcon />
            <ListItemText>(000) 000-000-0000</ListItemText>
          </ListItem>
          <ListItem button indicatorColor="inherit">
            <EmailIcon />
            <ListItemText>info@example.com</ListItemText>
          </ListItem>
          <ListItem button indicatorColor="inherit">
            <AccessTimeIcon />
            <ListItemText>
              Week Days: 09.00 to 18.00 Sunday: Closed
            </ListItemText>
          </ListItem>
          <ListItem sx={{ margin: "20px" }}>
            <FacebookRoundedIcon sx={{ fontSize: "50px", padding: "5px" }} />
            <SubscriptionsRoundedIcon
              sx={{ fontSize: "50px", padding: "5px" }}
            />
            <LanguageRoundedIcon sx={{ fontSize: "50px", padding: "5px" }} />
          </ListItem>
        </List>
        </Box>
      </SwipeableDrawer>
      {/* End Contact Drawer */}

      <AppBar
        position="fixed"
        sx={{
          padding: "20px",
          backgroundColor: "white",
          color: "black",
          textAlign: "center",
        }}
      >
        <Toolbar>
          {isMatch ? (
            <>
              <AppBarDrawer />
              <img src={Logo} alt="logo" height={"auto"} />
            </>
          ) : (
            <Grid container>
              <Grid item lg={2}>
                <Box>
                  <img src={Logo} alt="logo" />
                </Box>
              </Grid>

              <Grid item lg={6}>
                <Tabs
                  textColor="inherit"
                  value={value}
                  onChange={(e, value) => setValue(value)}
                  indicatorColor="#00b870"
                >
                  <Tab
                    label="Home"
                    component={Link}
                    to={"/"}
                    sx={{ fontSize: "18px", marginLeft: "center" }}
                  />
                  <Tab
                    label="Service"
                    component={Link}
                    to={"/services"}
                    sx={{ fontSize: "18px" }}
                  />
                  <Tab
                    label="Portfolio"
                    component={Link}
                    to={"/portfolio"}
                    sx={{ fontSize: "18px" }}
                  />
                  <Tab
                    label="Testimonial"
                    component={Link}
                    to={"/testimonial"}
                    sx={{ fontSize: "18px" }}
                  />
                </Tabs>
              </Grid>
              <Grid item lg={4}>
                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      marginLeft: "auto",
                      backgroundColor: "#00b870",
                      borderRadius: "20px",
                      color: "white",
                      padding: "10px",
                      width: "200px",
                      marginRight: "10px",
                      boxShadow:'0px 7px 20px 0px rgb(0 210 128 / 30%)'
                    }}
                  >
                    Contact Us
                  </Button>
                  <IconButton edge="start" onClick={() => setOpen(true)}>
                    <MenuIcon sx={{ color: "#00b870" }} />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppBarUI;
