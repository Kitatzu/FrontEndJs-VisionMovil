import React from 'react';
import { TextField } from '@mui/material';

function UserName(props) {

  const { onInput } = props;
  const handleInput = (event) => {
    onInput(event.target.value);
  }

  return (
    <form >
      <TextField
        id="userName"
        label="ingrese usuario..."
        required
        onInput={handleInput}
      />
    </form>
  );
}

export default UserName;