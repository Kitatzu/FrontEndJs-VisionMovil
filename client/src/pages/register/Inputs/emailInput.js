import React from 'react';
import { TextField } from '@mui/material';

function Email(props) {

  const { onInput } = props;
  const handleInput = (event) => {
    onInput(event.target.value);
  }

  return (
    <form >
      <TextField
        id="Email"
        label="ingrese email..."
        type="email"
        required
        onInput={handleInput}
      />
    </form>
  );
}

export default Email;