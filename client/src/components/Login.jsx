import * as React from 'react';


// ----- Material UI imports ------------
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
// ---------------------------------------



// ------  graphic assets ------------------
import stylos from './Login.module.css';


export default function Login(   ){

  
  return(
<div>    
    
<Box sx={{ display: 'flex',
        justifyContent: 'center',  }}>  

<FormControl variant="outlined" className={stylos.PlaceHolder}>    
 
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '40ch' },
   		 }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Nombre de usuario o correo electrónico *" variant="outlined" />
        <br/>
      <TextField id="outlined-basic" label="Contraseña *" variant="outlined" />
        <br/>
      
      <Button variant="contained">Iniciar Sesion</Button>
      <FormControlLabel control={<Checkbox />} label="Recordarme" />
        <br/>
      <a href="">¿Olvidaste la contraseña?</a>
    </Box>
</FormControl>

</Box>  
<br/>
</div>





)}
