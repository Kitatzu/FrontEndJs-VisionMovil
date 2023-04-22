// ----- Tienda main component
// here the cards are rendered 

import React from 'react';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPages } from '../Redux/Thunks/productsThunk.js'


// ----- Material UI imports ----
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
// ------------------------------

import ProductCard from "@/components/ProductCard";



export default function TiendaFrame() {

const Productos = useSelector((state) => state.products);
	console.log(Productos);

//const {products, isLoading} = useSelector((state) => state.products)
	function currentPage(page){
//		dispatch(getPages(page));
		console.log("mostrando info ");
	}


	return (
<div>


<ProductCard /> 
<br></br>
 <Stack spacing={2}>
      <Pagination count={10} color="secondary"/>
</Stack>
<br></br>

</div>
)}
