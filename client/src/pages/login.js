import NavBar from "@/components/NavBar";
import LoginComp from "@/components/Login";
import Footer from "@/components/Footer";

// ----- Material UI imports ------------
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// ---------------------------------------



// ------  graphic assets ------------------
//import stylos from 'Login.module.css';


export default function Login() {
  return (
    <div style={{marginTop: "170px"}}>
<NavBar />
    
    <LoginComp />
          
 <Footer/>
</div>         
)          
}
