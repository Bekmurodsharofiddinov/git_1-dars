
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material";
import { Button } from "@mui/material";
import Container from "@mui/material/Container";

export default function Navbar() {
    const theme = useTheme();
    const useStyle = makeStyles({
            navItem: {
                color: "black",
                textDecoration: "none",
                padding: "10px 10px 5px 10px",
                fontWeight: "bold",
                fontSize: "18px",
                transition: "ease-in all 0.6s",
                border: "none",
                "&:hover": {
                    borderBottom: "1px solid red",
                },
            },
        mobileNavItem: {
            color: "black",
            textDecoration: "none",
        },
        navIcon: {
            [theme.breakpoints.up("lg")]: {
                display: "none !important",
            },
        },
  

        navItemContainer: {
            [theme.breakpoints.down("lg")]: {
                display: "none",
            },
        },
        navLogo: {
            [theme.breakpoints.down("lg")]: {
                textAlign: "left",
            },
        },
        flexRow: {
            width: "100%",
            display: "flex",
            flexDirection: "row",
            marginRight:"50px"

        },
    });

    const {navItem,navIcon,navItemContainer,navLogo,mobileNavItem, flexRow,} = useStyle();
    const [state, setState] = React.useState(false);

    return (
        <>

            <Box sx={{ flexGrow: 1, background: "#34CBC2" }}>
                <AppBar position="static" sx={{ background: "#34CBC2" }}>
                        <Toolbar
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                height: "95px",
                                background: '#34CBC2',
                            }}
                        >
                            <Typography
                                className={navLogo}
                                variant="h6"
                                component="div"
                                sm={{ flexGrow: 1 }}
                            >

                                <Typography className={mobileNavItem} id="buleneek" to="/home">
                                    <Typography sx={{ display: 'flex', color: 'white' , fontWeight:600, ml:"50px" }} variant="h5">SEO Dream </Typography>
                                </Typography>
                            </Typography>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2, color: "black" }}
                                className={navIcon}
                                onClick={() => setState(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Box className={navItemContainer}>
                                <Box className={flexRow}>
                                    <Typography className={navItem} to="/clients">
                                        <Button
                                            color="inherit"
                                            style={{ color: "white", fontWeight: 600 }}
                                        >
                                            Home
                                        </Button>
                                    </Typography>
                                    <Typography className={navItem} to="/about">
                                        <Button color="inherit" style={{ fontWeight: 600, color: 'white' }}>
                                            Features
                                        </Button>
                                    </Typography>
                                    <Typography className={navItem} to="/works">
                                        <Button color="inherit" style={{ fontWeight: 600, color: 'white' }}>
                                            About Us
                                        </Button>
                                    </Typography>
                                    <Typography className={navItem} to="/works">
                                        <Button color="inherit" style={{ fontWeight: 600, color: 'white' }}>
                                            Services
                                        </Button>
                                    </Typography>
                                    <Typography className={navItem} to="/works">
                                        <Button color="inherit" style={{ fontWeight: 600, color: 'white' }}>
                                            Portfolio
                                        </Button>
                                    </Typography>
                                    <Typography className={navItem} to="/contact">
                                        <Button color="inherit" style={{ fontWeight: 600, color: 'white' }}>
                                            Contact us
                                        </Button>
                                    </Typography>
                                    <Typography className={navItem} to="/contact">
                                        <Button color="inherit" style={{ fontWeight: 400, color: 'white', background: "#4972CA", borderRadius: "30px ", borderBottom: "3px solid white" }}>
                                            Get Your Quote
                                        </Button>
                                    </Typography>
        
                                </Box>
                            </Box>
                        </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}








