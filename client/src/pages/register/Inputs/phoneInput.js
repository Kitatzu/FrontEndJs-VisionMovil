import countries from "./data/countries";
import { Select,MenuItem } from "@mui/material";
import { useState } from "react";

const Phone=(props)=>{
  const { onInput } = props;
  const [current, setCurrent] = useState("seleccione código");

  const handleChange = (event) => {
    onInput(event.target.value);
    setCurrent(event.target.value);
  }
  return(
<Select id="phone" onChange={handleChange} value={current}>
  <MenuItem value="seleccione código" disabled>Código de area</MenuItem>
  {countries.map((e)=>(
    <MenuItem key={e.code} value={e.code}>{e.code} {e.phone}</MenuItem>
  ))}
  <MenuItem></MenuItem>
</Select>
  )
}

export default Phone;