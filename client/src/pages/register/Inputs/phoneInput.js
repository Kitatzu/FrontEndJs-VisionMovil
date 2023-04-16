import countries from "./data/countries";
import { Select,MenuItem } from "@mui/material";
import { useState } from "react";

const Phone=()=>{
  const [current, setCurrent] = useState('');

  const handleChange = (event) => {
    setCurrent(event.target.value);
  };

  return(
<Select onChange={handleChange} value="value">
  <MenuItem value="value" disabled>Código de area</MenuItem>
  {countries.map((e)=>(
    <MenuItem key={e.code} >{e.code} {e.phone}</MenuItem>
  ))}
  <MenuItem></MenuItem>
</Select>
  )
}

export default Phone;