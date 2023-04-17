import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function valUserName(data){
let error="";
if(data.length===0){
  error="escriba un apellido"
}else{
  error="";
}
return error;
}

function LastName() {
  const [lastName, setLastName] = useState("");
  const [error,setError]=useState("sin data");

  const handleSubmit = (event) => {
    event.preventDefault();
    const err = valUserName(lastName);
    setError(err);
    if(error===""){
    console.log(error);
    alert("input andando")
    }else{
      alert("hay error al ingresar data")
    }
  };

  const handleChange = (event) => {
    setLastName(event.target.value);
    const aux=valUserName(event.target.value);
    setError(aux);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="lastName"
        label="ingrese su apellido..."
        required
        value={lastName}
        onChange={handleChange}
      />
      <p>el error:{error}</p>
      <p>el lastName:{lastName}</p>
      <Button type="submit">
        Enviar
      </Button>
    </form>
  );
}

export default LastName;