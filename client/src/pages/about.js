import { Container, Grid, Toolbar, Typography, Select, MenuItem } from '@mui/material';
import {IoIosPaper} from "react-icons/io"
import {BsFillMegaphoneFill,BsLightbulbFill} from "react-icons/bs"
import {FaShoppingCart} from "react-icons/fa"
import {TbDeviceAnalytics} from "react-icons/tb"
import Footer from '@/components/Footer';

import Link from 'next/link';

export default function About(){


    return(
      <box>

<Container>
  <Toolbar>
    <Grid Container>

      <Grid item>
      <Typography >
      BIENVENIDOS A VISIONMOVIL.COM
      </Typography>
<br></br>
      <Typography>
      VISIONMOVIL ES UNA AGENCIA DE PUBLICIDAD Y MARKETING, CON EL OBJETIVO DE POTENCIAR TU MARCA O NEGOCIO UTILIZANDO ESTRATEGIAS DE BAJO COSTO Y ALTO IMPACTO.

      A RAÍZ DE UN INNOVADOR RECURSO DE PUBLICIDAD, LA MAMPARA PUBLICITARÍA; Y UN MEDIO COMO EL TRANSPORTE DE PASAJEROS, PENSAMOS EN LA CREACIÓN DE LA PLATAFORMA VISIONMOVIL.COM.AR LOGRANDO UNA RETROALIMENTACIÓN ENTRE LOS DISTINTOS CANALES DE COMUNICACIÓN Y LOS DIVERSOS SERVICIOS DIGITALES, ASI COMO UNA HIPERINTERACCIÓN ENTRE USUARIO Y CLIENTE.

      VISIONMOVIL, POTECIAMOS TU NEGOCIO.
     </Typography>
      </Grid>
<br></br>
      <Grid item>
        <Typography>
          NUESTROS VALORES:
        </Typography>
        <Typography>
        LA LEALTAD Y LA HONORABILIDAD EN EL TRATO ENTRE EL EQUIPO, LOS USUARIOS Y CLIENTES SON NUESTROS PRINCIPALES VALORES.
        </Typography>
<br></br>
      <Select defaultValue="innovacion">
       <MenuItem value="innovacion" style={{ display: 'none' }}>Innovación</MenuItem>
       <MenuItem value="texto inn">
       Utilizamos un innovador recurso de publicidad, la mampara publicitaria; en un medio como el transporte de pasajeros y estrategias de bajo costo y alto impacto.
       </MenuItem>
      </Select>
      
      <Select defaultValue="educacion">
       <MenuItem value="educacion" style={{ display: 'none' }}>Educación</MenuItem>
       <MenuItem value="texto edu">
       Ademas de un sin fin de herramientas que ponemos a tu alcance, compartimos información de valor respecto a la publicidad y el marketing.
       </MenuItem>
      </Select>

      <Select defaultValue="consistencia">
       <MenuItem value="consistencia" style={{ display: 'none' }}>Consistencia</MenuItem>
       <MenuItem value="texto edu">
       Creemos en la consistencia como parte fudamental del crecimiento en cualquier proyecto o inciativa que se tenga.
       </MenuItem>
      </Select>
      <br></br>
      <Grid container flex-direction="row" spacing={3} >

        <Grid item xs={12}>
        <div>
        <IoIosPaper />
        <Typography>
        DIRECTORIO COMERCIAL
        </Typography>
        <Typography>
        Conectá con clientes potenciales de manera rápida y sencilla desde cualquier dispositivo
        </Typography>
        </div>
        </Grid>

        <Grid item xs={12}>
          <div>
        <BsFillMegaphoneFill/>
        <Typography>
        CANALES DE COMUNICACIÓN
        </Typography>
        <Typography>
        Comunícate de manera integral con tus clientes y aprovechá nuestras estrategias innovadoras 
        </Typography>
        </div>
        </Grid>

        <Grid item xs={12}>
          <div>
        <BsLightbulbFill/>
        <Typography>
        ESTRATEGIAS INNOVADORAS
        </Typography>
        <Typography>
        Estrategias de bajo costo y alto impacto en distintos canales de comunicación
        </Typography>
        </div>
        </Grid>

        <Grid item xs={12}>
          <div>
        <FaShoppingCart />
        <Typography>
        MARKETPLACE MEDIOS DE PAGO
        </Typography>
        <Typography>
        Crea tu tienda en línea y aprovechá el potencial de nuestro directorio comercial
        </Typography>
        </div>
        </Grid>

        <Grid item xs={12}>
          <div>
        <TbDeviceAnalytics />
        <Typography>
        ANÁLISIS DE AUDIENCIA
        </Typography>
        <Typography>
        Obtén información valiosa sobre tu negocio gracias a nuestros análisis y reportes
        </Typography>
        </div>
        </Grid>

      </Grid>

        </Grid>

        </Grid>
        </Toolbar>
        <Footer />
    </Container>
</box>
    )
}