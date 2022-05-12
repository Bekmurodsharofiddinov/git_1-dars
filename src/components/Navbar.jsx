
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Button } from "@mui/material";
import relfux from '../assets/images/author-image.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import CameraIcon from '@mui/icons-material/Camera';
import RssFeedIcon from '@mui/icons-material/RssFeed';

export default function Navigation() {
  const theme = useTheme();
  const useStyle = makeStyles({
    navItem: {
      color: "white",
      textDecoration: "none",
      padding: "5px 5px 5px 5px",
      fontWeight: "bold",
      fontSize: "18px",
      transition: "ease-in all 0.6s",
      borderBottom: "2px solid white",
      width: '100%',

      "&:hover": {
        background: 'white',
        color: '#BB5B6B'
      },

    },



    Navtes: {
      background: "white",
      color: "black",
      textDecoration: "none",
      padding: "5px 5px 5px 5px",
      fontWeight: "bold",
      fontSize: "18px",
      transition: "ease-in all 0.6s",
      borderBottom: "2px solid white",
      width: '100%',

      "&:hover": {
        background: 'black',
        color: 'white'
      },
    },


    mobileNavItem: {
      color: "black",
      textDecoration: "none",
    },
    navIcon: {
      [theme.breakpoints.up("md")]: {
        display: "none !important",
      },
      ml:'10px'
    },

    navItemContainer: {
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    },
    navLogo: {
      [theme.breakpoints.down("md")]: {
        textAlign: "left",
      },
    },
    flexRow: {
      display: "flex",
      flexDirection: "row",
    },
    iconn: {
      background: '#83343A',
      padding: '3px 3px 3px 3px',
      marginLeft: '3px',
      arginRight: '3px'
    }
  });

  const {
    Navtes,
    navItem,
    navIcon,
    navItemContainer,
    iconn,
    mobileNavItem,
    flexRow,
  } = useStyle();

  const [state, setState] = React.useState(false);

  return (
    <>

      <AppBar sx={{ background: 'inherit', boxShadow: 'none', mt: '10px', }}>
        <Toolbar
          sx={{
            background: "#BB5B6B",
            display: "flex",
            height: "120vh",
            ml: '6%',
            width: '20%',
            height: '100%',
            flexDirection: 'column',
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ ml:"6px", color: "black" }}
            className={navIcon}
            onClick={() => setState(true)}
          >
            <MenuIcon />
          </IconButton>
          <Box className={navItemContainer} sx={{ width: '100%' }}>
            <Typography sx={{ mt: "7%" }}>
              <img src={relfux} style={{ borderRadius: '50%', width: '80%', marginTop: '40px' }} />
              <Typography variant='h5' sx={{ pt: '10px' }}>Relfux Me</Typography>
              <Typography variant='subtitil2'>Web Design</Typography>
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', width: '100%' }}>
              <Typography className={Navtes} to="/clients" sx={{ width: '100%' }}>
                <Button color="inherit" sx={{ fontSize: '70%', }}>
                  About me
                </Button>
              </Typography>
              <Typography className={navItem} to="/works">
                <Button color="inherit" sx={{ fontSize: '70%' }}>
                  What i'm food at
                </Button>
              </Typography>
              <Typography className={navItem} to="/about">
                <Button color="inherit" sx={{ fontSize: '70%' }}>
                  My work
                </Button>
              </Typography>
              <Typography className={navItem} to="/contact">
                <Button color="inherit" sx={{ fontSize: '70%' }}>
                  Contact Me
                </Button>
              </Typography>
            </Box>
            <Typography sx={{ pt: '50px' }}>
              <FacebookIcon className={iconn} />
              <TwitterIcon className={iconn} />
              <InstagramIcon className={iconn} />
              <CameraIcon className={iconn} />
              <RssFeedIcon className={iconn} />
            </Typography>
            <hr style={{ width: '100%', marginTop: '80px' }} />
            <Typography sx={{ fontSize: '10px', padding: '30px 0px 20px 0px' }}>CopyRight 2019 Reflux Design</Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <div>
        <React.Fragment>
          <Drawer open={state} onClose={() => setState(false)}>
            <Box sx={{ width: 250, background:'#BB5B6B', alignItems:'center',display:'flex', flexDirection:'column',textAlign:'center' }} role="presentation">
              <Typography sx={{ mt: "7%" }}>
                <img src={relfux} style={{ borderRadius: '50%', width: '80%', marginTop: '40px' }} />
                <Typography variant='h5' sx={{ pt: '10px' }}>Relfux Me</Typography>
                <Typography variant='subtitil2'>Web Design</Typography>
              </Typography>
              <List>
                <ListItem>
                  <ListItemText>
                    <Typography sx={{ml:'20px'}} className={mobileNavItem} to="/about">
                      <Button color="inherit">About</Button>
                    </Typography>
                  </ListItemText>
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText>
                    <Typography className={mobileNavItem} to="/services">
                      <Button color="inherit">Our Clients</Button>
                    </Typography>
                  </ListItemText>
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText>
                    <Typography className={mobileNavItem} to="/contact">
                      <Button color="inherit">Our Works</Button>
                    </Typography>
                  </ListItemText>
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText>
                    <Typography className={mobileNavItem} to="/login">
                      <Button color="inherit">Contact Us</Button>
                    </Typography>
                  </ListItemText>
                </ListItem>
              </List>
              <Typography sx={{ pt: '50px' }}>
                <FacebookIcon className={iconn} />
                <TwitterIcon className={iconn} />
                <InstagramIcon className={iconn} />
                <CameraIcon className={iconn} />
                <RssFeedIcon className={iconn} />
              </Typography>
              <Typography sx={{ fontSize: '10px', padding: '30px 0px 20px 0px' }}>CopyRight 2019 Reflux Design</Typography>
            </Box>
          </Drawer>
        </React.Fragment>
      </div>
    </>
  );
}