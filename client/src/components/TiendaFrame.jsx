// ----- Tienda main component
// here the cards are rendered 

// ----- Material UI imports ----
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
// ------------------------------




import ProductCard from "@/components/ProductCard";


export default function TiendaFrame() {
  return (
<div>

<ProductCard /> 
<br></br>
 <Stack spacing={2}>
      <Pagination count={10} color="secondary" />
</Stack>
<br></br>

</div>
)}
