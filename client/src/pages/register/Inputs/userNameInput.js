import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function valUserName(data){
let error="";
if(data.length===0){
  error="escriba un username"
}else{
  error="";
}
return error;
}

function UserName() {
  const [UN, setUN] = useState("");
  const [error,setError]=useState("sin data");

  const handleSubmit = (event) => {
    event.preventDefault();
    const err = valUserName(UN);
    setError(err);
    if(error===""){
    console.log(error);
    alert("input andando")
    }else{
      alert("hay error al ingresar data")
    }
  };

  const handleChange = (event) => {
    setUN(event.target.value);
    const aux=valUserName(event.target.value);
    setError(aux);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="userName"
        label="ingrese usuario..."
        required
        value={UN}
        onChange={handleChange}
      />
      <p>el error:{error}</p>
      <p>el UN:{UN}</p>
      <Button type="submit">
        Enviar
      </Button>
    </form>
  );
}

export default UserName;