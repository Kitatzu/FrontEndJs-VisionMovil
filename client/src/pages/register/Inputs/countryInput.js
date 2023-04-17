import countries from "./data/countries";
import { Select,MenuItem } from "@mui/material";
import { useState } from "react";

const CountryInput=()=>{
  const [current, setCurrent] = useState("seleccione un país");

  const handleChange = (event) => {
    setCurrent(event.target.value);
  };

  return(
<Select onChange={handleChange} value={current}>
  <MenuItem value="seleccione un país" disabled>Seleccione un país</MenuItem>
  {countries.map((e)=>(
    <MenuItem key={e.code} value={e.label}>{e.label}</MenuItem>
  ))}
  <MenuItem></MenuItem>
</Select>
  )
}

export default CountryInput;