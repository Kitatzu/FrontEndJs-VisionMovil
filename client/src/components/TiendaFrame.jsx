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
	const [currentPage, setCurrentPage] = useState(1);
	const Productos = useSelector((state) => state.products);
	const Paginas = useSelector((state) => state.products.totalPaginas);

// iniciamos en pagina 1 /pagina 0 nos muestra status # de paginas
{/*
useEffect(() => {
	dispatch(getProducts())
	dispatch(getPages(1));
	dispatch(getNumberPages());
}, [dispatch])  	
*/}


{/* usaremos un useEffect sincrono */}
useEffect(() => {
  const fetchData = async () => {
    await dispatch(getProducts());
    await dispatch(getPages(1));
    await dispatch(getNumberPages());
  }
  fetchData();
}, [dispatch]);




// funcion para paginar usando Pagination de Material UI
const handlePageChange = (event, page) => {
    setCurrentPage(page);
    console.log(`Se cambio a la pagina: ${page}`);
    dispatch(getPages(page));
};


	return (
<div>


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





{/*
{Object.values(Productos.products).map((idx) => {
  return (
    <ProductCard
      key={idx.id}
      id={idx.id}
      description={idx.description}
      precio={idx.price}
      imagen={idx.img}
    />
  );
})}
*/}



<br></br>



  <Stack spacing={2}>
      <Pagination count={ Paginas }  page={currentPage} onChange={ handlePageChange } color="secondary"/>
</Stack>
<br></br>
</div>
)}
