import {
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
    FormControl,
  } from "@mui/material";
  import { Icon } from "@iconify/react";

  const UserName = ({ handleChange, handleBlur, form, error }) => {
  
    return(
     <FormControl variant="outlined">

      <InputLabel htmlFor="user name" >
        Nombre:
      </InputLabel>

      <OutlinedInput
        id="user name"
        name="user name"
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.UserName}
        required
        error={error}
        endAdornment={
          <InputAdornment position="end">
            <IconButton edge="end">
              <Icon
                icon="mdi:account-badge"
              />
            </IconButton>
          </InputAdornment>
        }
        label="user name"
      />
        </FormControl>
    )
}

export default UserName;