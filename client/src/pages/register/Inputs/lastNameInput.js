import {
    InputLabel,
    OutlinedInput,
    FormControl,
    InputAdornment,
    IconButton,
  } from "@mui/material";
  import { Icon } from "@iconify/react";

 
  const LastNameInput = ({ handleChange, handleBlur, form, error }) => {
    
    return (
     <FormControl variant="outlined">

      <InputLabel htmlFor="last name">
          Apellido:
      </InputLabel>

      <OutlinedInput
          id="last name"
          name="lastname"
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.lastname}
          required
          error={error}
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end">
                <Icon
                  icon="icon-park-outline:edit-name"
                />
              </IconButton>
            </InputAdornment>
          }
          label="lastName"
        />
      </FormControl>
    );
  };
  export default LastNameInput;