import {  Grid, Typography, Select, MenuItem } from '@mui/material';
import Image from 'next/image';
import {IoIosPaper} from "react-icons/io"
import {BsFillMegaphoneFill,BsLightbulbFill} from "react-icons/bs"
import {FaShoppingCart} from "react-icons/fa"
import {TbDeviceAnalytics} from "react-icons/tb"
import React from 'react';
import styles from "./AboutContent.module.css"
import welcome from "./images/about/welcome.png"
import values from "./images/about/values.png"
import can from "./images/about/can.png"
import { useState } from 'react';


export default function AboutContent(){

  const [isExpanded, setIsExpanded] = useState(false);

  function handleBoxClick() {
    setIsExpanded(!isExpanded);
  }

    return(
  
<div className={styles.back}>
 
    <Grid Container>
      <Grid item>
      <Image className={styles.welcome} src={welcome} alt="welcome"/>
<br></br>
      <Typography className={styles.firstText}>
      VISIONMOVIL ES UNA AGENCIA DE PUBLICIDAD Y MARKETING, CON EL OBJETIVO DE POTENCIAR TU MARCA O NEGOCIO UTILIZANDO ESTRATEGIAS DE BAJO COSTO Y ALTO IMPACTO.

      A RAÍZ DE UN INNOVADOR RECURSO DE PUBLICIDAD, LA MAMPARA PUBLICITARÍA; Y UN MEDIO COMO EL TRANSPORTE DE PASAJEROS, PENSAMOS EN LA CREACIÓN DE LA PLATAFORMA VISIONMOVIL.COM.AR LOGRANDO UNA RETROALIMENTACIÓN ENTRE LOS DISTINTOS CANALES DE COMUNICACIÓN Y LOS DIVERSOS SERVICIOS DIGITALES, ASI COMO UNA HIPERINTERACCIÓN ENTRE USUARIO Y CLIENTE.

      VISIONMOVIL, POTECIAMOS TU NEGOCIO.
     </Typography>
      </Grid>
<br></br>
      <Grid item className={styles.ourValues}>
       <Image src ={values} className={styles.values}/>
        <Typography className={styles.valuesText}>
        LA LEALTAD Y LA HONORABILIDAD EN EL TRATO ENTRE EL EQUIPO, LOS USUARIOS Y CLIENTES SON NUESTROS PRINCIPALES VALORES.
        </Typography>
<br></br>




     <div
      className={`${styles.expandingBox} ${isExpanded ? styles.expanded : ''}`}
      onClick={handleBoxClick}
    >
      <div className={styles.expandingBoxHeader}>Innovación</div>
      <div className={styles.expandingBoxContent}>
        <p>Utilizamos un innovador recurso de publicidad, la mampara publicitaria; en un medio como el transporte de pasajeros y estrategias de bajo costo y alto impacto.</p>
      </div>
    </div>
    <br></br>


    <div
      className={`${styles.expandingBox} ${isExpanded ? styles.expanded : ''}`}
      onClick={handleBoxClick}
    >
      <div className={styles.expandingBoxHeader}>Educación</div>
      <div className={styles.expandingBoxContent}>
        <p> Ademas de un sin fin de herramientas que ponemos a tu alcance, compartimos información de valor respecto a la publicidad y el marketing.</p>
      </div>
    </div>
    <br></br>

    <div
      className={`${styles.expandingBox} ${isExpanded ? styles.expanded : ''}`}
      onClick={handleBoxClick}
    >
      <div className={styles.expandingBoxHeader}>Consistencia</div>
      <div className={styles.expandingBoxContent}>
        <p> Creemos en la consistencia como parte fudamental del crecimiento en cualquier proyecto o inciativa que se tenga.</p>
      </div>
    </div>
    <br></br>



        </Grid>

        </Grid>
        
        <Image src={can} />
      <Typography>
        AUMENTA EL TRAFICO DE TU MARCA
      </Typography>
      <Grid container className={styles.canContainer} >

        <Grid item className={styles.canRows}>
        <div >
        <IoIosPaper className={styles.valuesIcons}/>
        <Typography >
        DIRECTORIO COMERCIAL
        </Typography>
        <Typography>
        Conectá con clientes potenciales de manera rápida y sencilla desde cualquier dispositivo
        </Typography>
        </div>
        </Grid>

        <Grid item className={styles.canRows}>
          <div >
        <BsFillMegaphoneFill className={styles.valuesIcons}/>
        <Typography>
        CANALES DE COMUNICACIÓN
        </Typography>
        <Typography>
        Comunícate de manera integral con tus clientes y aprovechá nuestras estrategias innovadoras 
        </Typography>
        </div>
        </Grid>

        <Grid item className={styles.canRows}>
          <div >
        <BsLightbulbFill className={styles.valuesIcons}/>
        <Typography>
        ESTRATEGIAS INNOVADORAS
        </Typography>
        <Typography>
        Estrategias de bajo costo y alto impacto en distintos canales de comunicación
        </Typography>
        </div>
        </Grid>

        <Grid item className={styles.canRows}>
          <div >
        <FaShoppingCart className={styles.valuesIcons}/>
        <Typography>
        MARKETPLACE MEDIOS DE PAGO
        </Typography>
        <Typography>
        Crea tu tienda en línea y aprovechá el potencial de nuestro directorio comercial
        </Typography>
        </div>
        </Grid>

        <Grid item className={styles.canRows}>
          <div >
        <TbDeviceAnalytics className={styles.valuesIcons}/>
        <Typography>
        ANÁLISIS DE AUDIENCIA
        </Typography>
        <Typography>
        Obtén información valiosa sobre tu negocio gracias a nuestros análisis y reportes
        </Typography>
        </div>
        </Grid>

      </Grid>
    </div>

    )
}