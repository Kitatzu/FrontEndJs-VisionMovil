import { AppBar, Container, Grid, Toolbar, Typography, Box, CssBaseline } from '@mui/material';
import { AiFillLinkedin, AiOutlineFacebook,AiOutlineInstagram } from "react-icons/ai";
import Link from 'next/link';


export default function Footer(){
    return(
<Box bgcolor="black" color="white" py={5} position="static">
<CssBaseline />
    <Container maxWidth={false} disableGutters>
        <Toolbar >
        <Grid Container>

        <Grid item>
              <Typography >
               VisionMovil, contactenos:
              </Typography>
        </Grid>
        <br></br>
        <Grid item>

        <Link href="https://ar.linkedin.com/">
           <AiFillLinkedin />
        </Link>

        <Link href="https://facebook.com/">
           <AiOutlineFacebook />
        </Link>

        <Link href="https://instagram.com/">
           <AiOutlineInstagram />
        </Link>
            
        </Grid>

        </Grid>
        </Toolbar>
    </Container>
</Box>
    )
}
