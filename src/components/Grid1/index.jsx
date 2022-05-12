import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
// import img from "../assets/img/left-image.jpg";
import { Container, Typography } from "@mui/material";
import rasm from "../../asserts/images/images/about-left-image.png";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Grid1() {
  return (
    <Container>
      <Typography sx={{ width: "100%" }}>
        <Grid>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ mt: "50px", color: "black" }}
          >
            <Grid item xs={12} sm={12} md={6}>
              <Typography sx={{ pl: "10%", width: "90%" }}>
                <img src={rasm} style={{ width: "80%" }} />
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Typography
                variant="h5"
                sx={{ color: "#39C4C1", fontWeight: "700" }}
              >
                About Us
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: "900" }}>
                Top <span style={{ color: "#39C4C1" }}>Marketing</span> Agency &
                Consult Your Website{" "}
                <span style={{ color: "#088BC1" }}>With Us</span>
              </Typography>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                sx={{ mt: "60px", fontWeight: "500" }}
              >
                <Box sx={{ ml: "3%" }}>
                  <Typography
                    variant="h3"
                    sx={{ fontWeight: "900", color: "#088BC1" }}
                  >
                    750+
                  </Typography>
                  <Typography variant="subtitil2" sx={{ fontWeight: "600" }}>
                    Projects Finished
                  </Typography>
                </Box>
                <Box sx={{ ml: "5%" }}>
                  <Typography
                    variant="h3"
                    sx={{ fontWeight: "900", color: "#088BC1" }}
                  >
                    340+
                  </Typography>
                  <Typography variant="subtitil2" sx={{ fontWeight: "600" }}>
                    Happy Clients
                  </Typography>
                </Box>
                <Box sx={{ ml: "5%" }}>
                  <Typography
                    variant="h3"
                    sx={{ fontWeight: "900", color: "#088BC1" }}
                  >
                    128+
                  </Typography>
                  <Typography variant="subtitil2" sx={{ fontWeight: "600" }}>
                    Awards
                  </Typography>
                </Box>
              </Grid>
              <br />
              <Typography sx={{ width: "90%", pt: "30px" }}>
                <span
                  style={{
                    color: "#39C4C1",
                    fontWeight: "600",
                    fontSize: "20px",
                  }}
                >
                  Lorem ipsum
                </span>{" "}
                dolor sit amet, consectetur Lorem ipsum dolor sit amet,
                consectetur adipisicingelit. Deleniti, facilis!Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Deleniti, fa sit amet,
                consectetur adipisicing sit amet, consectetur adipisicing elit.
                Deleniti, fa sit amet, consectetur adipisicing elit. Deleniti,
                fa
              </Typography>
              <Button
                variant="contained"
                sx={{
                  width: "25%",
                  mt: "30px",
                  padding: "10px 0px 10px 0px",
                  borderRadius: "30px",
                  background: "#36CCC3",
                  borderBottom: "2px solid #4A74C8",
                }}
              >
                Contained
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Typography>
    </Container>
  );
}
