import { AppBar, Container, Grid, Toolbar, Typography, Box, CssBaseline } from '@mui/material';
import { AiFillLinkedin, AiOutlineFacebook,AiOutlineInstagram } from "react-icons/ai";
import Link from 'next/link';
import stylos from './Footer.module.css';


export default function Footer(){
    return(


<Box py={3} className={ stylos.Box }>
  

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
    
</Box>



    )
}
