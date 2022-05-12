import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import img from '../../asserts/images/images/features-number-02.png'
import img2 from '../../asserts/images/images/features-icon-black-01.png'




export default function Card1() {
  const data = [
    { 
      rasm: require('../../asserts/images/images/features-number-02.png'),
      rasm2: require("../../asserts/images/images/features-icon-black-01.png"),
      number: "01",
    },

    {
      rasm: require("../../asserts/images/images/features-number-02.png"),
      rasm2: require("../../asserts/images/images/features-icon-black-02.png"),
      number: "02",
    },

    {
      rasm: require("../../asserts/images/images/features-number-03.png"),
      rasm2: require("../../asserts/images/images/features-icon-black-01.png"),
      number: "03",
    },

    {
      rasm: require("../../asserts/images/images/features-number-04.png"),
      rasm2: require("../../asserts/images/images/features-icon-black-02.png"),
      number: "04",
    },
  ];
  return (
    <Container>
      <Box
        sx={{
          mt: "10%",
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: "#F5F5F5FF",
            borderRadius: "50px",
          }}
        >
          <Grid sx={{ flexGrow: 1 }} container>
            <Grid item xs={12}>
              <Grid
                container
                justifyContent="center"
                sx={{
                  boxShadow: 1,
                  borderRadius: "50px",
                  backgroundColor: "white",
                }}
              >
                {data.map(value => (
                  <Grid
                    key={value}
                    item
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                    md={3}
                    xs={12}
                    sm={6}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        bottom: 30,
                        left: 20,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img src={img} />
                      <Typography
                        sx={{
                          zIndex: 1,
                          position: "relative",
                          right: 65,
                          color: "white",
                          fontSize: "30px",
                          fontWeight: "600",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {value.number}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img src={img2} />
                    </Box>
                    <br />
                    <Typography
                      sx={{
                        color: "black",
                        textAlign: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "600",
                          fontSize: "25px",
                        }}
                      >
                        Reach Out
                      </Typography>
                      <br />
                      <hr style={{ width: "50%" }} />
                      <Typography
                        sx={{
                          lineHeight: 2,
                        }}
                      >
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Tempore amet aperiam
                      </Typography>
                    </Typography>
                    <br />
                    <br />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <br />
          <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12}>
              <Grid container justifyContent="center">
                {[0, 1, 2, 2].map(value => (
                  <Grid
                    key={value}
                    item
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                    md={3}
                    xs={12}
                    sm={6}
                  >
                    <Box
                      sx={{
                        border: 5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        borderRadius: "100px",
                        color: "#F46958",
                        m:"20px",
                      }}
                    >
                      <Typography
                        sx={{
                          pl: "20px",
                          pt: "40px",
                          pr: "20px",
                          pb: "40px",
                          textAlign: "center",
                          fontSize: "20px",
                          fontWeight: "600",
                          color:"black"
                        }}
                      >
                        60% <br />
                        Html/css/js
                      </Typography>
                    </Box>
                    <br />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
