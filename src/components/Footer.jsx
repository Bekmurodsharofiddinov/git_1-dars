import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import bgImg from '../assets/images/page-bg.jpg'
import { Button } from "@mui/material";
import img from '../assets/images/first-main-icon.png'
import img2 from '../assets/images/second-main-icon.png'
import img3 from '../assets/images/third-main-icon.png'
import img4 from '../assets/images/fourth-main-icon.png'



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
}));

export default function Blog() {
    return (
        <Box sx={{ width: '100%', float: "right", backgroundImage: `url(${bgImg})` }}>

            <Container sx={{}}>
                <Box sx={{ width: "70%", float: "right", }}>
                    <Grid variant="div" sx={{
                        borderRadius: "15px",
                        padding: "25px",
                        textAlign: "center",
                        mt: "10%"
                    }}>
                        <Typography variant="h4" sx={{ fontWeight: 600, color: "white" }}>
                            Contact Me
                        </Typography>
                        <hr style={{ width: "35px", marginLeft: "45%", marginTop: "5px", marginBottom: "5px" }} />
                        <Typography variant="p" sx={{ fontWeight: 600, color: "white" }}>
                            Lorem ipsum dolor sit elit. Nihil quas exercitationem, culpa hic iure iste molestias fugit magni possimus enim. Consequuntur reprehenderit assumenda ratione quia!
                        </Typography>
                    </Grid>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} sm={6} md={6} sx={{ mt: "20px", }}>
                            <Box
                                sx={{
                                    border: "2px solid white",
                                    width: 500,
                                    maxWidth: '100%',
                                }}
                            >
                                <TextField fullWidth label="Your Name" id="fullWidth" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} sx={{ mt: "20px" }}>
                            <Box
                                sx={{
                                    border: "2px solid white",
                                    width: 500,
                                    maxWidth: '100%',
                                }}
                            >
                                <TextField fullWidth label="Your email" id="fullWidth" />
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container sx={{ marginTop: "20px" }}>
                        <Box
                            sx={{
                                border: "2px solid white",
                                color: "white",
                                width: 1000,
                                maxWidth: '100%',
                            }}
                        >
                            <TextField fullWidth label="Subject" id="fullWidth" />
                        </Box>
                    </Grid>
                    <Grid container sx={{ marginTop: "20px", textAlign: "center", mb:"80px" }}>
                        <Box
                            sx={{
                                border: "2px solid white",
                                color: "white",
                                width: 1000,
                                height: 200,
                                maxWidth: '100%',
                            }}
                        >
                            <TextField fullWidth label="Subject" id="fullWidth" />
                        </Box>
                        <Grid container sx={{ marginTop: "20px", textAlign: "center" }}>
                            <Button variant="contained" sx={{width:"20%",background:"white", color:"red", borderRadius:"1px", ml:"40%"}}>Send Me</Button>
                        </Grid>
                    </Grid>
                </Box>



            </Container>
        </Box>
    );
}