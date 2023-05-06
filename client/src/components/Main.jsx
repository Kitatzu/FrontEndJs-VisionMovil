import * as React from 'react';

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
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';
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
<br/>
<br/>
{/* ---- Start Section Container */}
  <Grid item xs={4} style={{textAlign: "center"}}>
<section>
	<p className={stylos.textLight}>
	ENCONTRÁ LA SOLUCIÓN QUE NECESITAS
	</p>

	
    <TextField  id="site-search" label="Buscar Productos" variant="outlined" name="searchBar" className={stylos.SearchBar}
sx={{'& fieldset': {borderColor: '#EEEEEE',},
        '&:hover fieldset': {
          borderColor: '#EEEEEE',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#EEEEEE',
        },
      }}
/>

	<p className={stylos.textBold} style={{fontSize: "25px"}}>		POTENCIA TU NEGOCIO 	</p>

	<Image src={ Ding1 } alt="My Image"  width={ 800 } height={70} />

	<p className={stylos.textLight} style={{fontSize: "20px"}}>	BRINDAMOS SOLUCIONES INTEGRALES E INTERACTIVAS </p>

	<Button className={ stylos.MainButton }color="secondary" variant="contained" size="large">S U S C R I B I T E {'>'}</Button>
</section>
</Grid>

{/* <hr></hr>    section delimiter */}
<p></p>
{/* ---- End Section Container */}


{/* ---- Start Section Container */}
{/* ---- border: '1px solid red' ---*/}
<section style={{ width: "70%",margin: "0 auto",marginTop: "14%" }}>
  
      <Grid container spacing={2} >
        
        <Grid item xs={4} >
          <div>
					<Image src={ Ding2 } alt="My Image"  width={ 400 } height={90} />
<p></p>

<Accordion className={stylos.AccordionOptions}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontSize: "20px"}} >MAMPARA PUBLICITARÍA</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nuestro innovador recurso utiliza como medio el transporte de pasajeros, permitiendo
            al anunciante generar gran numero de vistas diarias e invitando al pasajero a visitar tu negocio.
          </Typography>
        </AccordionDetails>
</Accordion>

<Accordion className={stylos.AccordionOptions}>
        <AccordionSummary
		  expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
		  style={{marginTop: "5%"}}
        >
          <Typography style={{fontSize: "20px"}}>DIRECTORIO COMERCIAL</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Haz parte de nuestro directorio comercial, un servicio gratuito donde
            el usuario puede encontrar todo tipo de solución a su necesidad, conectando
            a compradores y vendedores de manera eficiente.
          </Typography>
        </AccordionDetails>
</Accordion>

<Accordion className={stylos.AccordionOptions} >
        <AccordionSummary
		  expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel3a-header"
			style={{marginTop: "5%"}}
        >
          <Typography style={{fontSize: "20px"}}>MARKETPLACE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Regístrate como vendedor, crea tu tienda en línea en unos simples
            pasos y comienza a vender todo desde un mismo lugar, con una amplia
            pasarela de pagos.
          </Typography>
        </AccordionDetails>
</Accordion>

<Accordion className={stylos.AccordionOptions}>
        <AccordionSummary
		  expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel4a-header"
		  style={{marginTop: "5%"}}
        >
          <Typography style={{fontSize: "20px"}}>SOCIAL MEDIA</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            En nuestra plataforma podés obtener herramientas,
            datos y un sin fin de servicios digitales para conocer
            y abordar de mejor forma tu público objetivo.  
          </Typography>
        </AccordionDetails>
</Accordion>


<p className={stylos.textBold} style={{fontSize: "25px"}} >ACCEDE A HERRAMIENTAS</p>
					<Image src={ Ding4 } alt="My Image"  width={ 400 } height={60} />



          </div>
        </Grid>
        <Grid item xs={8} style={{textAlign: "center"}}>
          <div>
					<Image src={ Ding3 } alt="My Image"  width={ 700 } height={500} />
						<Button className={ stylos.MainButton } color="secondary" variant="contained" size="large">PUBLICITÁ {'>'}</Button>


          </div>
        </Grid>
     
      </Grid>
  
</section>

 {/* <hr></hr>   section delimiter */}
{/* ---- End Section Container */}


{/* ---- Start Section Container */}
<section style={{ width: "90%",margin: "0 auto",marginTop: "14%"}}>
  
	<p style={{textAlign: "center",fontSize: "25px"}} className={stylos.textBold}>¡COMENZÁ TU CAMINO HACIA EL ÉXITO COMERCIAL!</p>
	<div style={{textAlign: "center"}} >	<Image src={ Ding5 } alt="My Image"  width={ 700 } height={70} /> </div>
	<p style={{textAlign: "center",fontSize: "20px"}} className={stylos.textLight} >LLEVAMOS TU NEGOCIO AL SIGUIENTE NIVEL</p>


<Box sx={{ flexGrow: 1 }} >
   <Grid container spacing={2} >
        
       <Grid item xs={7}>
          <div style={{textAlign: "center",marginTop: "8%"}}>
<Image  src={ Ding6 } alt="My Image"  width={ 400 } height={360} />
 		</div>
<br/>
  	<div style={{textAlign: "center",marginTop: "7%"}}>
<Image src={ Ding7 } alt="My Image"  width={ 400 } height={50} />
	</div>
</Grid>

      <Grid item xs={4}>
         <div>
             	<div className={stylos.textPurple}>
        		<p>   1. REGISTRATE </p>
				</div>
				<div className={stylos.textLight} style={{fontSize: "20px"}}>
                ELEGÍ EL NOMBRE DE TU TIENDA, CON TU  E-MAIL Y UNA CONTRASEÑA.
                </div>
				<div className={stylos.textPurple}>
               <p> 2. AGREGÁ TUS PRODUCTOS </p>
				</div>
				<div className={stylos.textLight} style={{fontSize: "20px"}}>
                SUBÍ TUS PRODUCTOS, DESCRIBÍ SUS CARACTERÍSTICAS Y CREÁ UN CATÁLOGO.
                </div>
				<div className={stylos.textPurple}>
              <p>  3. CONFIGURA MEDIOS DE PAGOS </p>
				</div>
				<div className={stylos.textLight} style={{fontSize: "20px"}}>
                ELEGÍ FORMAS DE PAGO, DESCUENTOS Y CUOTAS.
                </div>
				<div className={stylos.textPurple}>
               <p> 4. VENDÉ </p>
				</div>
				<div className={stylos.textLight} style={{fontSize: "20px"}}>
                LISTO, YA PODÉS HACER VENTAS EN TU TIENDA EN LÍNEA.
                </div>
    	</div>
<p></p>
<Button className={ stylos.MainButton } color="secondary" variant="contained" size="large">COMENZÁ {'>'}</Button>
      </Grid>
      


   </Grid>
 </Box>

</section>
{/* ---- End Section Container */}

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
