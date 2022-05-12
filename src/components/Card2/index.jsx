import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import img from "../../asserts/images/images/service-icon-01.png";


export default function SpacingGrid() {
  const data = [
    {
      img: require("../../asserts/images/images/service-icon-01.png"),
    },
    {
      img: require("../../asserts/images/images/service-icon-02.png"),
    },
    {
      img: require("../../asserts/images/images/service-icon-03.png"),
    },
    {
      img: require("../../asserts/images/images/service-icon-01.png"),
    },
    {
      img: require("../../asserts/images/images/service-icon-02.png"),
    },
    {
      img: require("../../asserts/images/images/service-icon-03.png"),
    },
  ];
  return (
    <Box
      sx={{
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
        <Typography variant="h5" sx={{ color: "#39C4C1", fontWeight: "700" }}>
          Our Serviase
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "900" }}>
          Top <span style={{ color: "#39C4C1" }}>Marketing</span> Agency &
          Consult Your Website <span style={{ color: "#088BC1" }}>With Us</span>
        </Typography>
      </Box>
      <Container>
        <Grid
          sx={{ flexGrow: 1 }}
          container
          spacing={2}
          marginTop={"10%"}
          sxx={{}}
        >
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={2}>
              {data.map(value => (
                <Grid
                  key={value}
                  item
                  xs={12}
                  md={4}
                  sm={6}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                      boxShadow: 1,
                    }}
                  >
                    <img src={img} />
                    <Box>
                      <Typography
                        sx={{
                          textAlign: "left",
                        }}
                      >
                        <Typography>Deep URL Analysis</Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            lineHeight: 3,
                          }}
                        >
                          Lorem ipsum dolor sit, amet <br /> consectetur
                          adipisicing elit. Quia <br /> perspiciatis doloribus
                        </Typography>
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
