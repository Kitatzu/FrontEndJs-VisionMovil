// ----- Material UI imports ------------
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// ---------------------------------------



// ------  graphic assets ------------------
import stylos from './Login.module.css';


export default function Login(   ){

  
  return(
<div>
  
  <h1>Iniciar sesión </h1>
<div className={stylos.PlaceHolder}>    
	<form name="fomulario" method="POST">
    <input name="name" id="name" type="text"/>
    <br/>  
    <input name="name" id="name" type="password"/>
      <input type="checkbox" id="remember" name="remember" />
        <label for="remember">Recordarme</label>
	<br/>
		<button type="submit">Guardar</button>
			<a href="">Olvidaste la Contraseña ?</a>
	</form>  
</div>


  </div>
)}
