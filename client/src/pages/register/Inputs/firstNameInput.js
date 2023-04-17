import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function valUserName(data){
let error="";
if(data.length===0){
  error="escriba un nombre"
}else{
  error="";
}
return error;
}

function Name() {
  const [name, setName] = useState("");
  const [error,setError]=useState("sin data");

  const handleSubmit = (event) => {
    event.preventDefault();
    const err = valUserName(name);
    setError(err);
    if(error===""){
    console.log(error);
    alert("input andando")
    }else{
      alert("hay error al ingresar data")
    }
  };

  const handleChange = (event) => {
    setName(event.target.value);
    const aux=valUserName(event.target.value);
    setError(aux);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="name"
        label="ingrese su nombre..."
        required
        value={name}
        onChange={handleChange}
      />
      <p>el error:{error}</p>
      <p>el name:{name}</p>
      <Button type="submit">
        Enviar
      </Button>
    </form>
  );
}

export default Name;