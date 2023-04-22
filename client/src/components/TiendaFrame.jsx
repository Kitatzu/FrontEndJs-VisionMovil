// ----- Tienda main component
// here the cards are rendered 

import React from 'react';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getByPage } from '../Redux/Thunks/productsThunk.js'


// ----- Material UI imports ----
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
// ------------------------------

import ProductCard from "@/components/ProductCard";



export default function TiendaFrame() {

	//const Productos = useSelector((state) => state.products);

	function currentPage(num){
		dispatch(geyByPage(num));
		console.log("mostrando info ");
	}


	return (
<div>


<ProductCard /> 
<br></br>
 <Stack spacing={2}>
      <Pagination count={10} color="secondary" onClick={console.log("CLICKED")}/>
</Stack>
<br></br>

</div>
)}
