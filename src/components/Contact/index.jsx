import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import g from "../../asserts/images/images/contact-bg.jpg";
import imd1 from "../../asserts/images/images/contact-icon-01.png";
import imd2 from "../../asserts/images/images/contact-icon-02.png";
import imd3 from "../../asserts/images/images/contact-icon-03.png";
const Contact = () => {
  return (
    <Box
      sx={{
        backgroundImage: ` url(${g})`,
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Container>
        <Box
          sx={{
            mt: "5%",
            borderRadius: "50px",
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              width: "50%",
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: "#39C4C1", fontWeight: "700" }}
            >
              Contact Us
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: "900" }}>
              Top <span style={{ color: "#39C4C1" }}>Marketing</span> Agency &
              Consult Your Website{" "}
              <span style={{ color: "#088BC1" }}>With Us</span>
            </Typography>
          </Box>
          <br />
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8} sm={12}>
                <Typography>
                  <input
                    placeholder="Name"
                    style={{
                      height: "35px",
                      paddingLeft: "10px",
                      width: "45%",
                      marginLeft: "20px",
                    }}
                  />
                  <input
                    placeholder="Surname"
                    style={{
                      height: "35px",
                      width: "45%",
                      paddingLeft: "10px",
                      marginLeft: "20px",
                      marginTop: "20px",
                    }}
                  />
                  <input
                    placeholder="Your Email"
                    style={{
                      height: "35px",
                      width: "45%",
                      paddingLeft: "10px",
                      marginTop: "20px",
                      marginLeft: "20px",
                    }}
                  />
                  <input
                    placeholder="Subject"
                    style={{
                      height: "35px",
                      width: "45%",
                      paddingLeft: "10px",
                      marginTop: "20px",
                      marginLeft: "20px",
                    }}
                  />
                  <textarea
                    placeholder="Message"
                    style={{
                      height: "150px",
                      width: "94.6%",
                      paddingLeft: "10px",
                      paddingTop: "10px",
                      marginTop: "20px",
                      marginLeft: "20px",
                    }}
                  />
                </Typography>
              </Grid>
              <Grid item md={4} xs={12} sm={12}>
                <Typography
                  sx={{ textAlign: "center", border: "1px solid black" }}
                >
                  <br />
                  <Typography>
                    <img style={{ marginTop: "15px" }} src={imd1} />
                  </Typography>
                  <Typography sx={{ mt: "10px" }}>info@company.com</Typography>
                  <Typography>
                    <img style={{ marginTop: "15px" }} src={imd2} />
                  </Typography>
                  <Typography sx={{ mt: "10px" }}>+001-002-004</Typography>
                  <Typography>
                    <img style={{ marginTop: "15px" }} src={imd3} />
                  </Typography>
                  <Typography sx={{ mt: "10px" }}>
                    26th Street,Digitial Villa
                  </Typography>
                  <br />
                </Typography>
              </Grid>
            </Grid>
          </Container>
          <br />
        </Box>
      </Container>
      <br />
      <br />
    </Box>
  );
};

export default Contact;
