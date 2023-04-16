import countries from "./data/countries";
import { Select,MenuItem } from "@mui/material";
import { useState } from "react";

const CountryInput=()=>{
  const [current, setCurrent] = useState('');

  const handleChange = (event) => {
    setCurrent(event.target.value);
  };

  return(
<Select onChange={handleChange} value="value">
  <MenuItem value="value" disabled>Seleccione un país</MenuItem>
  {countries.map((e)=>(
    <MenuItem key={e.code} >{e.label}</MenuItem>
  ))}
  <MenuItem></MenuItem>
</Select>
  )
}

export default CountryInput;