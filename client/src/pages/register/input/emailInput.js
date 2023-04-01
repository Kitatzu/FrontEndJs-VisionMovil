import {
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
    FormControl,
  } from "@mui/material";
  import { Icon } from "@iconify/react";
  
  const EmailInput = ({ handleChange, handleBlur, form, error }) => {

    return (
      <FormControl variant="outlined">

        <InputLabel htmlFor="email" >
          E-mail:
        </InputLabel>
        <OutlinedInput
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.email}
          error={error}
          required
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end">
                <Icon
                  icon="ic:outline-email"
                />
              </IconButton>
            </InputAdornment>
          }
          label="email"
        />
      </FormControl>
    );
  };
  export default EmailInput;