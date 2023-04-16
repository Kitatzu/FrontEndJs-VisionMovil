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
import stylos from './Main.module.css';
import Ding1 from './images/Asset8.png'
import Ding2 from './images/Asset35.png'
import Ding3 from './images/LB.png'
import Ding4 from './images/Innovadoras.png'
import Ding5 from './images/Asset21.png'
import Ding6 from './images/celularduo.png'
import Ding7 from './images/Asset27.png'
import Ding8 from './images/Asset54.png'
import Ding9 from './images/Asset36.png'
// ----------------------------------------



export default function Home() {
  return (
<div className={stylos.back}>

<section>
	<p>
	ENCONTRÁ LA SOLUCIÓN QUE NECESITAS
	</p>


	<input type="search" id="site-search" name="searchBar" />
	<p>		POTENCIA TU NEGOCIO 	</p>

	<Image src={ Ding1 } alt="My Image"  width={ 800 } height={70} />

	<p>	BRINDAMOS SOLUCIONES INTEGRALES E INTERACTIVAS </p>

	<Button color="secondary" variant="contained" size="large">SUSCRIBITE {'>'}</Button>
</section>

<hr></hr>   {/* section delimiter */}
<p></p>

<section>
<Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={2}>
        
        <Grid item xs={4}>
          <div>
					<Image src={ Ding2 } alt="My Image"  width={ 400 } height={70} />
<p></p>

<Accordion>
        <AccordionSummary
          
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>MAMPARA PUBLICITARÍA</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nuestro innovador recurso utiliza como medio el transporte de pasajeros, permitiendo
            al anunciante generar gran numero de vistas diarias e invitando al pasajero a visitar tu negocio.
          </Typography>
        </AccordionDetails>
</Accordion>

<Accordion>
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>DIRECTORIO COMERCIAL</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Haz parte de nuestro directorio comercial, un servicio gratuito donde
            el usuario puede encontrar todo tipo de solución a su necesidad, conectando
            a compradores y vendedores de manera eficiente.
          </Typography>
        </AccordionDetails>
</Accordion>

<Accordion>
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel3a-header"
        >
          <Typography>MARKETPLACE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Regístrate como vendedor, crea tu tienda en línea en unos simples
            pasos y comienza a vender todo desde un mismo lugar, con una amplia
            pasarela de pagos.
          </Typography>
        </AccordionDetails>
</Accordion>

<Accordion>
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel4a-header"
        >
          <Typography>SOCIAL MEDIA</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            En nuestra plataforma podés obtener herramientas,
            datos y un sin fin de servicios digitales para conocer
            y abordar de mejor forma tu público objetivo.  
          </Typography>
        </AccordionDetails>
</Accordion>


<p>ACCEDE A HERRAMIENTAS</p>
					<Image src={ Ding4 } alt="My Image"  width={ 400 } height={60} />



          </div>
        </Grid>
        <Grid item xs={4}>
          <div>
					<Image src={ Ding3 } alt="My Image"  width={ 700 } height={500} />
						<Button color="secondary" variant="contained" size="large">PUBLICITÁ {'>'}</Button>


          </div>
        </Grid>
     
      </Grid>
    </Box>

</section>

<hr></hr>   {/* section delimiter */}

<section>
	<p>¡COMENZÁ TU CAMINO HACIA EL ÉXITO COMERCIAL!</p>
		<Image src={ Ding5 } alt="My Image"  width={ 700 } height={70} />
	<p>LLEVAMOS TU NEGOCIO AL SIGUIENTE NIVEL</p>


<Box sx={{ flexGrow: 1 }} >
   <Grid container spacing={2}>
        
       <Grid item xs={4}>
          <div>
<Image src={ Ding6 } alt="My Image"  width={ 400 } height={360} />
 <Image src={ Ding7 } alt="My Image"  width={ 400 } height={70} />
          
		</div>
      </Grid>

      <Grid item xs={4}>
         <div>
             <p>   1. REGISTRATE </p>
                ELEGÍ EL NOMBRE DE TU TIENDA, CON TU  E-MAIL Y UNA CONTRASEÑA.
                
               <p> 2. AGREGÁ TUS PRODUCTOS </p>
                SUBÍ TUS PRODUCTOS, DESCRIBÍ SUS CARACTERÍSTICAS Y CREÁ UN CATÁLOGO.
                
              <p>  3. CONFIGURA MEDIOS DE PAGOS </p>
                ELEGÍ FORMAS DE PAGO, DESCUENTOS Y CUOTAS.
                
               <p> 4. VENDÉ </p>
                LISTO, YA PODÉS HACER VENTAS EN TU TIENDA EN LÍNEA.
    	</div>
<p></p>
<Button color="secondary" variant="contained" size="large">COMENZÁ {'>'}</Button>
      </Grid>
      


   </Grid>
 </Box>

</section>

<hr></hr>  {/* section delimiter */}


<section>
<Box sx={{ flexGrow: 1 }} >
   <Grid container spacing={2}>

		{/*contact form*/}        
       <Grid item xs={4}>
          <div>
	<Image src={ Ding8 } alt="My Image"  width={ 500 } height={70} />
	<input type="text" id="name" name="name"   size="10" />		
	<input type="text" id="email" name="email" size="20" />
	<textarea id="story" name="story"  rows="5" cols="33" > 	</textarea>
	<Button color="secondary" variant="contained" size="large">ENVIAR</Button>


		</div>
      </Grid>

<Grid item xs={4}>
        <div>
	<Image src={ Ding9 } alt="My Image"  width={ 400 } height={100} />     
	<p>UNITE GRATIS Y AUMENTA LA DEMANDA
	DE TU EMPRENDIMIENTO O MARCA. </p>
	<Button color="secondary" variant="contained" size="large">UNITE GRATIS</Button>
	     
		</div>
      </Grid>

  </Grid>
 </Box>

</section>


</div>
)}
