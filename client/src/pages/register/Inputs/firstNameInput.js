import React from 'react';
import { TextField } from '@mui/material';

function FirstName(props) {

  const { onInput } = props;
  const handleInput = (event) => {
    onInput(event.target.value);
  }

  return (
    <form >
      <TextField
        id="Name"
        label="ingrese nombre..."
        required
        onInput={handleInput}
      />
    </form>
  );
}

export default FirstName;