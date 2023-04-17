import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function valPassword(data){
let error="";
if(data.length===0){
  error="escriba una contraseña"
}else{
  error="";
}
return error;
}

function Password() {
  const [pass, setPass] = useState("");
  const [error,setError]=useState("sin data");

  const handleSubmit = (event) => {
    event.preventDefault();
    const err = valPassword(pass);
    setError(err);
    if(error===""){
    console.log(error);
    alert("input andando")
    }else{
      alert("hay error al ingresar data")
    }
  };

  const handleChange = (event) => {
    setPass(event.target.value);
    const aux=valPassword(event.target.value);
    setError(aux);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="password"
        label="ingrese una contraseña..."
        required
        value={pass}
        type='password'
        onChange={handleChange}
      />
      <p>el error:{error}</p>
      <p>el pass:{pass}</p>
      <Button type="submit">
        Enviar
      </Button>
    </form>
  );
}

export default Password;