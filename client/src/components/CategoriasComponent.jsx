// ------ NEXT imports -----------------
import Image from 'next/image'
// -------------------------------------

// ----- Material UI imports ------------
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// ---------------------------------------

// ------  graphic assets ------------------
import stylos from './CategoriasComponent.module.css';
import catImg1 from './images/CatAsset29.png'
import catImg2 from './images/CatAsset21.png'
// -----------------------------------------




export default function CategoriasComponent() {
  return (

<div className={stylos.back}>

<Image src={ catImg1 } alt="My Image"  width={ 400 } height={70} />

<hr></hr>  {/* section delimiter */}

<section>
<Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={2}>

{/* ------------ column start ------------ */}        
        <Grid item xs={2}>
          <div>
          <p>ICONO</p>
          <p>SALUD Y BELLEZA</p>
          Productos, herramientas y profesionales
          que ayudan al cuidado de la salud y cuerpo.
        
          </div>
 		</Grid>

{/* ------------ column start ------------ */}        
<Grid item xs={2}>
          <div>
	      <p>ICONO</p>
          <p>SERVICIOS</p>
        	  Variedad de servicios profesionales,
        	  que se adaptan a sus necesidades y objetivos. 
          </div>
 		</Grid>

{/* ------------ column start ------------ */}        
<Grid item xs={2}>
          <div>
		  <p>ICONO</p>
          <p>GASTRONOMÍA</p>
          Todos los productos necesarios para preparar
          comidas y bebidas. Negocios que cocinen por vos.
        	 
          </div>
 		</Grid>

{/* ------------ column start ------------ */}        
<Grid item xs={2}>
          <div>
		  <p>ICONO</p>
          <p>TECNOLOGÍA</p>
          Productos que permiten a los usuarios
          mejorar sus experiencias digitales y reales.
        	  
          </div>
 		</Grid>

{/* ------------ column start ------------ */}        
<Grid item xs={2}>
          <div>
		  <p>ICONO</p>
          <p>INDUMENTARÍA</p>
          Productos relacionados con el vestuario
          para satisfacer diversas necesidades.
          </div>
 		</Grid>

     </Grid>
   </Box>
          


</section>

<hr></hr>  {/* section delimiter */}


<section>
<Image src={ catImg2 } alt="My Image"  width={ 800 } height={70} />
<p></p>
CONECTÁ CON CLIENTES POTENCIALES DE MANERA RÁPIDA Y SENCILLA DESDE CUALQUIER DISPOSITIVO

<p></p>
<Button color="secondary" variant="contained" size="large">REGISTRATE {'>'}</Button>

</section>


</div>

  )}
