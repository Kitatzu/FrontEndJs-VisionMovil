import React from 'react';
import { Input, TextField } from '@mui/material';

function Password(props) {

  const { onInput } = props;
  const handleInput = (event) => {
    onInput(event.target.value);
  }

  return (
    <form >
      <TextField
        id="Password"
        label="ingrese contraseña..."
        type="password"
        required
        onInput={handleInput}
      />
    </form>
  );
}

export default Password;