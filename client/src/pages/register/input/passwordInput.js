import {
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
    FormControl,
  } from "@mui/material";
  import { Icon } from "@iconify/react";
  import { React, useState } from "react";
 
  const PasswordRegisterInput = ({ handleChange, handleBlur, form, error }) => {
    const [showPassword, setShowPassword] = useState(false);
  
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    return (
      <FormControl variant="outlined"
      >
        <InputLabel
          htmlFor="password"
        >
          Password
        </InputLabel>

        <OutlinedInput
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.password}
          error={error}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? (
                  <Icon
                    icon="material-symbols:visibility-off"
                  />
                ) : (
                  <Icon
                    icon="material-symbols:visibility"
                  />
                )}
              </IconButton>
            </InputAdornment>
          }
          label="password"
        />
      </FormControl>
    );
  };
  export default PasswordRegisterInput;