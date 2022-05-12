import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import bgImg from '../assets/images/page-bg.jpg'
import img from '../assets/images/first-main-icon.png'
import img2 from '../assets/images/second-main-icon.png'
import img3 from '../assets/images/third-main-icon.png'
import img4 from '../assets/images/fourth-main-icon.png'
import blogImg from '../assets/images/portfolio-01.jpg'
import blogImg2 from '../assets/images/portfolio-02.jpg'
import blogImg3 from '../assets/images/portfolio-03.jpg'
import blogImg4 from '../assets/images/portfolio-04.jpg'
import blogImg5 from '../assets/images/portfolio-05.jpg'
import blogImg6 from '../assets/images/portfolio-06.jpg'






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
                <Box sx={{ width: "70%", float: "right" }}>

                    <Grid variant="div" sx={{
                        borderRadius: "15px",
                        padding: "25px",
                        textAlign: "center",
                        mt: "10%"
                    }}>
                        <Typography variant="h4" sx={{ fontWeight: 600, color: "white" }}>
                            What i'm good at
                        </Typography>
                        <hr style={{ width: "35px", marginLeft: "45%", marginTop: "5px", marginBottom: "5px" }} />
                        <Typography variant="p" sx={{ fontWeight: 600, color: "white" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas exercitationem, culpa hic iure iste molestias fugit magni possimus enim. Consequuntur reprehenderit assumenda ratione quia!
                        </Typography>
                    </Grid>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} sm={6} md={6} sx={{ mt: "20px", }}>
                            <Item sx={{ p: "10%", width: "85%", background: "rgba(225,225,225,0.1)" }}>
                                <img style={{ textAlign: "center", justifyContent: "center", margin: "2%", marginBottom: "20px", }} src={img} />
                                <Typography >
                                    <Typography sx={{ mr: '60px', color: "white", }} variant='h4' >Html5 & CSS3 </Typography>
                                    <Typography sx={{ width: '80%', color: "white", }}>Phasellus non convallis dolor.Integer Tempor hendrerit arcu al bibendum . Send ac ante non metus vehicule congue quis eget eros.</Typography>
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} sx={{ mt: "20px" }}>
                            <Item sx={{ p: "10%", width: "90%", ml: "3%", background: "rgba(225,225,225,0.1)" }}>
                                <img style={{ textAlign: "center", justifyContent: "center", margin: "2%", marginBottom: "20px" }} src={img2} />
                                <Typography >
                                    <Typography sx={{ mr: '60px', color: "white", }} variant='h4' >Creative Ideas </Typography>
                                    <Typography sx={{ width: '80%', color: "white", }}>Phasellus non convallis dolor.Integer Tempor hendrerit arcu al bibendum . Send ac ante non metus vehicule congue quis eget eros.</Typography>
                                </Typography>
                            </Item>
                        </Grid>
                    </Grid>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} sm={6} md={6} sx={{ mt: "20px" }}>
                            <Item sx={{ p: "10%", width: "85%", background: "rgba(225,225,225,0.1)" }}>
                                <img style={{ textAlign: "center", justifyContent: "center", margin: "2%", marginBottom: "20px" }} src={img3} />
                                <Typography >
                                    <Typography sx={{ mr: '60px', color: "white", }} variant='h4' >Easy Customize </Typography>
                                    <Typography sx={{ width: '80%', color: "white", }}>Phasellus non convallis dolor.Integer Tempor hendrerit arcu al bibendum . Send ac ante non metus vehicule congue quis eget eros.</Typography>
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} sx={{ mt: "20px" }}>
                            <Item sx={{ p: "10%", width: "90%", ml: "3%", background: "rgba(225,225,225,0.1)" }}>
                                <img style={{ textAlign: "center", justifyContent: "center", margin: "2%", marginBottom: "20px" }} src={img4} />
                                <Typography >
                                    <Typography sx={{ mr: '60px', color: "white", }} variant='h4' >Admin Dashboard </Typography>
                                    <Typography sx={{ width: '80%', color: "white", }}>Phasellus non convallis dolor.Integer Tempor hendrerit arcu al bibendum . Send ac ante non metus vehicule congue quis eget eros.</Typography>
                                </Typography>
                            </Item>
                        </Grid>
                    </Grid>
    
                </Box>





















                <Box sx={{ width: "70%", float: "right" }}>
                <hr style={{marginTop:"100px"}}/>

                    <Grid variant="div" sx={{
                        borderRadius: "15px",
                        padding: "25px",
                        textAlign: "center",
                        mt: "10%"
                    }}>
                        <Typography variant="h4" sx={{ fontWeight: 600, color: "white" }}>
                            My work 
                        </Typography>
                        <hr style={{ width: "35px", marginLeft: "48%", marginTop: "5px", marginBottom: "5px" }} />
                        <Typography variant="p" sx={{ fontWeight: 600, color: "white" }}>
                            Lorem ipsum dolor sit amet consectetur adipi fugit magni possimus enim. Consequuntur reprehenderit assumenda ratione quia!
                        </Typography>
                        <Typography variant="p" sx={{ fontWeight: 600, color: "white", display:"flex", textAlign:"center", ml:"35%", mt:"40px" }}>
                            <Typography sx={{color:"red", ml:"4px"}}>All</Typography>
    
                            <Typography sx={{ ml:"10px"}}>People</Typography>
                            <Typography sx={{ ml:"10px"}}>Nature</Typography>
                            <Typography sx={{ ml:"10px"}}>Animals</Typography>
                        </Typography>
                    </Grid>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} sm={6} md={6} sx={{ mt: "20px", }}>
                                <img style={{width:"100%" }} src={blogImg} />
                                <hr style={{marginTop:"10%", marginBottom:"10%"}} />
                   
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} sx={{ mt: "20px" }}>
                                <img style={{ width:"100%" }} src={blogImg2} />
                                <hr style={{marginTop:"10%", marginBottom:"10%"}} />
        
                        </Grid>
                    </Grid>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} sm={6} md={6} sx={{ mt: "20px", }}>
                                <img style={{width:"100%" }} src={blogImg3} />
                                <hr style={{marginTop:"10%", marginBottom:"10%"}} />
                   
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} sx={{ mt: "20px" }}>
                                <img style={{ width:"100%" }} src={blogImg4} />
                                <hr style={{marginTop:"10%", marginBottom:"10%"}} />
        
                        </Grid>
                    </Grid>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} sm={6} md={6} sx={{ mt: "20px" }}>
                                <img style={{width:"100%" }} src={blogImg5} />
                                <hr style={{marginTop:"10%", marginBottom:"30%"}} />
                                
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} sx={{ mt: "20px" }}>
                                <img style={{ width:"100%"}} src={blogImg6} />
                                <hr style={{marginTop:"10%", marginBottom:"30%"}} />

                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}