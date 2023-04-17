import * as React from 'react';

// ------ NEXT imports -----------------
import Image from 'next/image'
// -------------------------------------

// ----- Material UI imports ------------
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
// ---------------------------------------

// ------  graphic assets ------------------
import stylos from './ProductProfile.module.css';
// -----------------------------------------


// ------ only for testing before API connection 
import dummyProd from './dummyProd.jpg'
// -----------------------------------------


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}




export default function ProductProfile(){
 const [value, setValue] = React.useState(0);

 const handleChange = (event, newValue) => {
    setValue(newValue);
  };




return (
<div>
<h1>Product Profile</h1>

<section>
<Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={2}>
        
<Grid item xs={4}>
          <div>
	<Image src={ dummyProd } alt="Producto"  width={ 300 } height={ 300 } />
	</div>
</Grid>


<Grid item xs={4}>
     <div>
	<p>Producto</p>
	<p>Precio $$</p>
	<p>Descripcion</p>
	<input type="number" />
          <Button color="secondary" variant="contained" size="large">Añadir al Carrito {'>'}</Button>
          <Button color="secondary" variant="contained" size="large">Obtener Apoyo {'>'}</Button>
<hr></hr>
	<p>Categoría: Sin categorizar</p>
	<Stack spacing={1}>
	<Rating name="half-rating" defaultValue={1} precision={1} />
	</Stack>
	<p></p>

     </div>
</Grid>

</Grid>
</Box>

</section>
<p></p>

<section>


<Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="Tabs">
          <Tab label="Envio" {...a11yProps(0)} />
          <Tab label="Valoraciones" {...a11yProps(1)} />
          <Tab label="Informacion del vendedor" {...a11yProps(2)} />
          <Tab label="Mas Productos" {...a11yProps(3)} />
          <Tab label="Product Enquiry" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Two   valoraciones
      </TabPanel>
      <TabPanel value={value} index={2}>
        Three
      </TabPanel>
	<TabPanel value={value} index={3}>
        Four
      </TabPanel>
  	<TabPanel value={value} index={4}>
        Five
      </TabPanel>

</Box>







</section>














</div>
)
}
