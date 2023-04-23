// ----- Tienda main component
// here the cards are rendered 

import React from 'react';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPages, getProducts, getNumberPages } from '../Redux/Thunks/productsThunk.js'


// ----- Material UI imports ----
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
// ------------------------------

import ProductCard from "@/components/ProductCard";


export default function TiendaFrame() {
	const dispatch = useDispatch();

	const Productos = useSelector((state) => state.products);
	const Paginas = useSelector((state) => state.products.totalPaginas);

// iniciamos en pagina 1 /pagina 0 nos muestra status # de paginas
useEffect(() => {
	dispatch(getProducts())
	dispatch(getPages(1));
	dispatch(getNumberPages());
}, [dispatch])  	


function currentPage(page){
//		dispatch(getPages(page));
//		console.log("mostrando info ");
}


	return (
<div>
		{/*			
	{Object.keys(Productos.products).map((idx) => {
return (
<ProductCard
	key={idx}
	id={Productos.products[idx].id}
	description={Productos.products[idx].description}
	precio={Productos.products[idx].price}
	imagen={Productos.products[idx].img}
/> 

)

		})}
*/}
<br></br>



  <Stack spacing={2}>
      <Pagination count={ Paginas } color="secondary"/>
</Stack>
<br></br>

</div>
)}
