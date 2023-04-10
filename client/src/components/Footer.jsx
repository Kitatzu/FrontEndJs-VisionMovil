import { AppBar, Container, Grid, Toolbar, Typography } from '@mui/material';
import { AiFillLinkedin, AiOutlineFacebook,AiOutlineInstagram } from "react-icons/ai";
import Link from 'next/link';

export default function Footer(){
    return(
<AppBar>
    <Container>
        <Toolbar>
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
</AppBar>
    )
}