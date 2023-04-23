// ------ Material UI imports ------
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
// ----------------------------------

import ProductProfile from "@/components/ProductProfile";

// ------ NEXT imports -----------------
import Image from 'next/image';
// -------------------------------------

// ------  graphic assets ------------------
import stylos from './Main.module.css';
// -----------------------------------------

// ------ only for testing before API connection 
import dummyProd from './dummyProd.jpg'
// -----------------------------------------




export default function ProductCard({id, description, precio, imagen} ){

// -------- Handlers ----------------

function handleClickProfile(e){
// go to  producto profile
// pass product id via props 
// e.id = product id  
	
console.log(description)
}




// ------ End Handlers ---------------


return (


<div>

<Grid container spacing={2}> 
              <Grid item xs={12}>

	{/*Elements for render product cards */}
<Card sx={{ maxWidth: 340 }} >

	<CardContent onClick={(e) => handleClickProfile(e) }>
	<Typography sx={{ mb: 1.5 }} color="text.secondary">
	{
	imagen ? (<Image src={ imagen } alt="Producto"  width={ 300 } height={ 300 }/>) :
	(<Image src={ dummyProd } alt="Producto"  width={ 300 } height={ 300 }/> )
	}

	</Typography>
	<Typography variant="body1">
	{ description }
	<br />
	</Typography>
	<Typography variant="body2">
	{ precio }
	<br />
	</Typography>
	</CardContent>
	<CardActions>
	<Button size="small">Agregar al Carrito </Button>
	</CardActions>
</Card>
</Grid>

</Grid>






</div>
)}

