import React from 'react';
import { TextField } from '@mui/material';

function LastName(props) {

  const { onInput } = props;
  const handleInput = (event) => {
    onInput(event.target.value);
  }

  return (
    <form >
      <TextField
        id="LastName"
        label="ingrese apellido..."
        required
        onInput={handleInput}
      />
    </form>
  );
}

export default LastName;