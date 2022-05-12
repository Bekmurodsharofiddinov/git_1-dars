import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import img from '../assets/images/left-image.jpg'
import img1 from '../assets/images/right-image.jpg'
import { Container, Typography } from '@mui/material';
import rasm from '../assets/img/page-bg.jpg'
import Navbar from '../components/Navbar';
import { width } from '@mui/system';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Header() {
    return (
        <Typography>
            <img src={rasm} style={{ width: '100%',height:'120vh', position: 'absolute', zIndex: '-1' }} />
            <Grid>
                <Navbar />
            </Grid>
            <Grid sx={{ width: '65%', float: 'right' }}>
                <Grid xs={12} sm={12} md={12} sx={{width:'80%', textAlign:'center', color:'white', pt:'60px', display:'flex', alignItems:'center', flexDirection:'column'}}>
                    <Typography variant='h4'>About Me</Typography>
                    <Typography sx={{borderBottom:'1px solid red', width:'4%'}}></Typography>
                    <Typography variant='subtitle2'>Lorem ipsum dolor sit amet, consectetur    Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Deleniti, facilis!   Lorem ipsum dolor sit amet, consectetur  adipisicing
                        elit. Deleniti, fa</Typography>
                </Grid>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ mt: '50px', color: 'white' }}>
                    <Grid item xs={12} sm={10} md={5}  >
                        <Typography>
                            <img src={img} style={{ width: '100%' }} />
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={10} md={6}>
                        <Typography variant='h5' sx={{ color: 'white' }}>Let's discuss about you project</Typography>
                        <br />
                        <Typography sx={{ width: '90%' }}>   Lorem ipsum dolor sit amet, consectetur    Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Deleniti, facilis!   Lorem ipsum dolor sit amet, consectetur  adipisicing
                            elit. Deleniti, fa
                        </Typography>
                    </Grid>

                </Grid>
                <hr style={{ marginTop: '40px', width: '90%' }} />
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ mt: '40px', color: 'white' }}>

                    <Grid item xs={12} sm={10} md={6}>
                        <Typography variant='h5' sx={{ color: 'white' }}>Let's discuss about you project</Typography>
                        <br />
                        <Typography sx={{ width: '90%' }}>   Lorem ipsum dolor sit amet, consectetur    Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Deleniti, facilis!   Lorem ipsum dolor sit amet, consectetur  adipisicing
                            elit. Deleniti, </Typography>
                    </Grid>
                    <Grid xs={12} sm={10} md={5}>
                        <img src={img1} style={{ width: '100%' }} />
                    </Grid>
                </Grid>
            </Grid>
        </Typography>
    );
}