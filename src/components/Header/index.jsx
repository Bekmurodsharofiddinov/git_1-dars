import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import banner from "../../asserts/images/images/banner-dec-right.png";
import banner2 from "../../asserts/images/images/banner-dec-left.png";
import image from "../../asserts/images/images/banner-right-image.png";

const Header = () => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            backgroundImage: `url(${banner2})`,
            width: "15%",
            height: "700px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundSize: "cover",
          }}
        >
          <Typography
            sx={{
              color: "#F97162",
              fontFamily: "arial",
              lineHeight: "40px",
              mt: "40%",
              mr: "-180%",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                flexDirection: "row",
                pb: "10%",
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  color: "#F97162",
                  fontFamily: "arial",
                  lineHeight: "2px",
                }}
              >
                <Typography sx={{ color: "#939393" }}>
                  Agnecy Status{" "}
                </Typography>{" "}
                <br />{" "}
                <Typography
                  sx={{ color: "black", fontWeight: 600, fontSize: "20px" }}
                >
                  Ready work{" "}
                </Typography>
              </Typography>

              <Typography
                sx={{
                  color: "#F97162",
                  fontFamily: "arial",
                  lineHeight: "2px",
                  ml: "7%",
                }}
              >
                <Typography sx={{ color: "#939393" }}>Price </Typography> <br />{" "}
                <Typography
                  sx={{ color: "black", fontWeight: 600, fontSize: "20px" }}
                >
                  $720/Month
                </Typography>
              </Typography>

              <Typography
                sx={{
                  color: "#F97162",
                  fontFamily: "arial",
                  lineHeight: "2px",
                  ml: "7%",
                }}
              >
                <Typography sx={{ color: "#939393" }}>Schedules </Typography>{" "}
                <br />{" "}
                <Typography
                  sx={{ color: "black", fontWeight: 600, fontSize: "20px" }}
                >
                  $450/Meeting
                </Typography>
              </Typography>
            </Typography>
            <Typography sx={{ width: "100%" }}>
              <Typography
                sx={{
                  color: "#F97162",
                  fontSize: "300%",
                  fontWeight: "600",
                  fontFamily: "arial",
                }}
              >
                SEO & Digital
                <br />
                Marketing Agency
              </Typography>
            </Typography>
            <Typography>
              <Button
                sx={{
                  mt: "5%",
                  fontSize: "80%",
                  border: 1,
                  borderColor: "#33CCC5",
                  borderRadius: "50px",
                  backgroundColor: "#33CCC5",
                  color: "white",
                  p: "10px",
                }}
              >
                Get your Quote
              </Button>
            </Typography>
          </Typography>


          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              
            </Grid>
            <Grid item xs={6}>
            </Grid>
            <Grid item xs={6}>
            </Grid>
            <Grid item xs={6}>
            </Grid>
          </Grid>


        </Box>

        <Box
          sx={{
            backgroundImage: `url(${banner})`,
            width: "850%",
            height: "700px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundSize: "cover",
          }}
        >
          <Typography sx={{}}>
            <Typography sx={{ ml: "28%", mt: "20%" }}>
              <img style={{ width: "100%" }} src={image} alt="" />
            </Typography>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Header;
