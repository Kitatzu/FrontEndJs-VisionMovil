import {
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
    FormControl,
  } from "@mui/material";
  import { Icon } from "@iconify/react";

  const FirstName = ({ handleChange, handleBlur, form, error }) => {
  
    return(
     <FormControl variant="outlined">

      <InputLabel htmlFor="first name" >
        Nombre:
      </InputLabel>

      <OutlinedInput
        id="first name"
        name="first name"
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.firstname}
        required
        error={error}
        endAdornment={
          <InputAdornment position="end">
            <IconButton edge="end">
              <Icon
                icon="mdi:user"
              />
            </IconButton>
          </InputAdornment>
        }
        label="first name"
      />
        </FormControl>
    )
}

export default FirstName;