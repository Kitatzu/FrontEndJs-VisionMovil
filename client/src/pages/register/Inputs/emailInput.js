import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function valEmail(data) {
  let error="";
  if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  .test(data)){
   error="";
  } else {
   error="La dirección de email es incorrecta.";
  }
  return error
}

const Email = () => {
  const [email, setEmail]=useState("");
  const [error,setError]=useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    const err = valEmail(email);
    setError(err);
    if(error===""){
    console.log(error);
    alert("input andando")
    }else{
      alert("hay error al ingresar data")
    }
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
    const aux=valEmail(event.target.value);
    setError(aux);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="ingrese un email..."
        type="email"
        required
        value={email}
        onChange={handleChange}
      />
      <p>error:{error}</p>
      <p>data={email}</p>
      <Button
        type="submit"
      >
        Enviar
      </Button>
    </form>
  );
};

export default Email;