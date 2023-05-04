import countries from "./data/countries";
import { Select,MenuItem } from "@mui/material";
import { useState } from "react";

const CountryInput=(props)=>{
  const { onInput } = props;
  const [current, setCurrent] = useState("seleccione un país");

  const handleChange = (event) => {
    onInput(event.target.value);
    setCurrent(event.target.value);
  }
  return(
<Select id="country" onChange={handleChange} value={current}>
  <MenuItem value="seleccione un país" disabled>Seleccione un país</MenuItem>
  {countries.map((e)=>(
    <MenuItem key={e.code} value={e.label}>{e.label}</MenuItem>
  ))}
  <MenuItem></MenuItem>
</Select>
  )
}

export default CountryInput;