// ------ NEXT imports -----------------
import Image from 'next/image'
// -------------------------------------

// ----- Material UI imports ------------
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// ---------------------------------------

// ------  graphic assets ------------------
import stylos from './ServiciosComponent.module.css';
import graph1 from './images/ServAsset5.png'
import graph2 from './images/ServAsset48.png'
import graph3 from './images/ServMampara.png'
import graph4 from './images/LB.png'
// -----------------------------------------

export default function ServiciosComponent() {
  return (
<div  className={stylos.back}>
<Image src={ graph1 } alt="My Image"  width={ 900 } height={500} />

<hr></hr> {/* section delimiter */}

<section>
  
<Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={2}>
        
        <Grid item xs={4}>
          <div>
          <p>MAMPARA</p>

          Innovador recurso que utiliza como medio
          el transporte de pasajeros, y una estrategia
          de público cautivo. Permitiendo al anunciante
          generar gran numero de vistas diarias.
<p></p>
          <Button color="secondary" variant="contained" size="large">PUBLICITÁ {'>'}</Button>
          </div>
        </Grid>
     
        <Grid item xs={4}>
          <div>
<p>MARKETPLACE</p>
Regístrate como vendedor, crea tu tienda en línea en unos
simples pasos y comenzá a vender todo desde un mismo lugar,
con una amplia pasarela de pagos
<p></p>
          <Button color="secondary" variant="contained" size="large">SUSCRIBITE {'>'}</Button>
          </div>
        </Grid>

        <Grid item xs={4}>
          <div>
<p>SOCIAL MEDIA</p>

En nuestra plataforma podés obtener herramientas,
datos y un sin fin de servicios digitales para conocer
y abordar de mejor forma tu público objetivo.  
<p></p>
          <Button color="secondary" variant="contained" size="large">POTENCIATE {'>'}</Button>
          </div>
        </Grid>




     </Grid>
   </Box>


</section>

<hr></hr> {/* section delimiter */}

<section>
<Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={2}>
        
        <Grid item xs={4}>
          <div>
          <Image src={ graph2 } alt="My Image"  width={ 400 } height={70} />
          <p></p>
          <p>
          ¿ESTÁS BUSCANDO UNA FORMA INNOVADORA DE LLEGAR A TU
          PÚBLICO OBJETIVO? ¡CON NUESTRA MAMPARA PUBLICITARÍA
          EN TAXIS, LO HACES!
          </p>
            <Button color="secondary" variant="contained" size="large">PUBLICITÁ {'>'}</Button>
          </div>
        </Grid>

        <Grid item xs={4}>
          <div>
            
          <Image src={ graph3 } alt="My Image"  width={ 400 } height={300} />
          </div>
        </Grid>

</Grid>
</Box>

</section>

<hr></hr> {/* section delimiter */}

<section>

<Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={2}>
        
        <Grid item xs={4}>
          <div>

      ¡CON NUESTRA MAMPARA PUBLICITARÍA EN LOS MEDIOS DE TRANSPORTE,
      Y UN SIN FIN DE SERVICIOS DIGITALES DENTRO DE NUESTRA PLATAFORMA!
      LOGRAMOS GRAN INTERACCIÓN ENTRE USUARIOS Y CLIENTES, GRACIAS A LA
      RETROALIENTACIÓN ENTRE LOS CANALES DE COMUNICACIÓN. ADEMÁS, NUESTRA
      PASARELAS DE PAGO ACEPTAN TODAS LAS FORMAS DE PAGO, INCLUYENDO CRIPTOMONEDAS.

      REGÍSTRATE HOY MISMO COMO VENDEDOR Y TEN ACCESO A HERRAMIENTAS AVANZADAS
      PARA LLEVAR TU NEGOCIO EN LÍNEA AL SIGUIENTE NIVEL.

      ¡COMENZÁ TU CAMINO HACIA EL ÉXITO COMERCIAL CON VISIONMOVIL!
      <p></p>
          <Button color="secondary" variant="contained" size="large">REGISTRATE {'>'}</Button>
          </div>
          </Grid>

          <Grid item xs={4}>
          <div>
          <Image src={ graph4 } alt="My Image"  width={ 500 } height={400} />

          </div>
          </Grid>


</Grid>
</Box>

</section>


</div>
  
)}