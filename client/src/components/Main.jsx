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
import TextareaAutosize from '@mui/base/TextareaAutosize';
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

	
    <TextField id="site-search" label="Buscar Productos" variant="outlined" name="searchBar" className={stylos.SearchBar}
sx={{'& fieldset': {borderColor: '#EEEEEE',},
        '&:hover fieldset': {
          borderColor: '#EEEEEE',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#EEEEEE',
        },
      }}
/>

	<p className={stylos.textBold}>		POTENCIA TU NEGOCIO 	</p>

	<Image className={stylos.Ding1 }src={ Ding1 } alt="Publicidad y Marketing" />

	<p className={stylos.textLight}>	BRINDAMOS SOLUCIONES INTEGRALES E INTERACTIVAS </p>

	<Button className={ stylos.MainButton }color="secondary" variant="contained" size="large">S U S C R I B I T E {'>'}</Button>
</section>
</Grid>

{/* <hr></hr>    section delimiter */}
<p></p>
{/* ---- End Section Container */}


{/* ---- Start Section Container */}
{/* ---- border: '1px solid red' ---*/}
<section className={stylos.section1}>
  
      <Grid container spacing={2} >
        
        <Grid item  className={stylos.GridItem1}>
          <div>
					<Image className={stylos.Ding2 } src={ Ding2 } alt="Publicita con Nosotros"/>
<p></p>

<Accordion className={stylos.AccordionOptions}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={ stylos.AccordionTypography }>MAMPARA PUBLICITARÍA</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={stylos.AccordionInnerTypography}>
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
          <Typography className={ stylos.AccordionTypography }>DIRECTORIO COMERCIAL</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={stylos.AccordionInnerTypography}>
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
          <Typography className={ stylos.AccordionTypography }>MARKETPLACE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={stylos.AccordionInnerTypography}>
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
          <Typography className={ stylos.AccordionTypography }>SOCIAL MEDIA</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={stylos.AccordionInnerTypography}>
            En nuestra plataforma podés obtener herramientas,
            datos y un sin fin de servicios digitales para conocer
            y abordar de mejor forma tu público objetivo.  
          </Typography>
        </AccordionDetails>
</Accordion>


<p className={ stylos.textBold }>ACCEDE A HERRAMIENTAS</p>
					<Image className={ stylos.Ding4 }src={ Ding4 } alt="Innovadoras" />



          </div>
        </Grid>
        <Grid item xs={8} style={{textAlign: "center"}}>
          <div>
					<Image className={stylos.Ding3} src={ Ding3 } alt="Publicidad y Marketing"/>
						<Button className={ stylos.PublicitaButton } color="secondary" variant="contained" size="large">PUBLICITÁ {'>'}</Button>


          </div>
        </Grid>
     
      </Grid>
  
</section>

 {/* <hr></hr>   section delimiter */}
{/* ---- End Section Container */}


{/* ---- Start Section Container */}
<section className={ stylos.section2 }>
  
	<p style={{textAlign: "center"}} className={stylos.textBold}>¡COMENZÁ TU CAMINO HACIA EL ÉXITO COMERCIAL!</p>
	<div style={{textAlign: "center"}} >	<Image src={ Ding5 } className={ stylos.Ding5 }alt="Registrate como Vendedor" /> </div>
	<p style={{textAlign: "center"}} className={stylos.textLight} >LLEVAMOS TU NEGOCIO AL SIGUIENTE NIVEL</p>


<Box sx={{ flexGrow: 1 }} >
   <Grid container spacing={2} >
        
       <Grid item xs={7} >
          <div style={{textAlign: "center",marginTop: "8%"}}>
<Image  src={ Ding6 } className={ stylos.Ding6 }alt="Phones" />
 		</div>
<br/>
  	<div style={{textAlign: "center",marginTop: "7%"}}>
<Image src={ Ding7 } className={ stylos.Ding7 }alt="Asi de Simple"/>
	</div>
</Grid>

      <Grid item className={ stylos.GridItem2 }>
         <div>
             	<div className={stylos.textPurple}>
        		<p className={ stylos.pTitles }>   1. REGISTRATE </p>
				</div>
				<div className={stylos.textLight} >
                ELEGÍ EL NOMBRE DE TU TIENDA, CON TU  E-MAIL Y UNA CONTRASEÑA.
                </div>
				<div className={stylos.textPurple}>
               <p className={ stylos.pTitles }> 2. AGREGÁ TUS PRODUCTOS </p>
				</div>
				<div className={stylos.textLight} >
                SUBÍ TUS PRODUCTOS, DESCRIBÍ SUS CARACTERÍSTICAS Y CREÁ UN CATÁLOGO.
                </div>
				<div className={stylos.textPurple}>
              <p className={ stylos.pTitles }>  3. CONFIGURA MEDIOS DE PAGOS </p>
				</div>
				<div className={stylos.textLight} >
                ELEGÍ FORMAS DE PAGO, DESCUENTOS Y CUOTAS.
                </div>
				<div className={stylos.textPurple}>
               <p className={ stylos.pTitles }> 4. VENDÉ </p>
				</div>
				<div className={stylos.textLight}>
                LISTO, YA PODÉS HACER VENTAS EN TU TIENDA EN LÍNEA.
                </div>
    	</div>
<p></p>
<Button className={ stylos.ComenzButton } color="secondary" variant="contained" size="large">COMENZÁ {'>'}</Button>
      </Grid>
      


   </Grid>
 </Box>

</section>
{/* ---- End Section Container */}

{/*<hr></hr>   section delimiter */}

{/* ---- Start Section Container */}
<section style={{ width: "90%",margin: "0 auto",marginTop: "14%"}}>

  
<Box sx={{ flexGrow: 1 }}  >
  <Grid container>
 
		{/*contact form*/}        
<Grid item className={ stylos.GridItem3 }>
        
<div style={{textAlign: "center"}}>
	<Image src={ Ding8 } className={ stylos.Ding8 }alt="Contactanos" />
      <br/>
       <br/>
	<TextField className={stylos.FormFields}  required name="name" id="outlined-required" label="Nombre"/>
    <TextField className={stylos.FormFields} style={{marginBottom: "2%"}} required name="correoe" id="outlined-required" label="Correo Electronico"/>    
	<br/>
      <TextareaAutosize className={stylos.FormFields} name="story" style={{height: "200px"}}/>
    <br/>
    <br/>
	<Button className={ stylos.MainButton } color="secondary" variant="contained" size="large">ENVIAR</Button>
</div>
</Grid>

<Grid item xs={4}>

<div style={{textAlign: "center"}} >
	<Image src={ Ding9 } className={ stylos.Ding9 }alt="Comenza Gratis"/>     
	<p className={stylos.textLight} style={{marginLeft: "100%"}}>UNITE GRATIS Y AUMENTA LA DEMANDA
	DE TU EMPRENDIMIENTO O MARCA. </p>
	<Button className={ stylos.MainButton } style={{marginLeft: "100%"}}color="secondary" variant="contained" size="large">UNITE GRATIS</Button>
</div>

</Grid>

</Grid>
</Box>

</section>
<br/>
{/* ---- End Section Container */}

</div>
)}
