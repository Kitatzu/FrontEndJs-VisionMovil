import React from "react";
import imgDefault from "../../assets/imgDefault.png";
import { Icon } from "@iconify/react";
import { Button, Typography } from "@mui/material";
import FirstName from "./Inputs/firstNameInput";
import { Box } from "@mui/system";
import LastNameInput from "./Inputs/lastNameInput";
import PasswordRegisterInput from "./Inputs/passwordInput";
import PasswordVerifyInput from "./Inputs/verificationPasswordInput";
import EmailInput from "./Inputs/emailInput"
import { Alert } from "@mui/material";
import CountrySelect from "./Inputs/CountriesInput";
import UserName from "./Inputs/userNameInput";

const FormRegister = ({
  handleChange,
  handleBlur,
  handleSubmit,
  handleImage,
  form,
  errors,
  image,
  previewUrl,
}) => {

  return (
    <Box className="Form" width={"100%"}>
      <Typography
        component="h2"
        fontSize="20px"
        display={"flex"}
        justifyContent={"center"}
        sx={{ color: theme[mode].textPrimary, padding: "20px" }}
      >
        REGISTRAR
      </Typography>

      <Box
        className="Login-form-control"
        display="flex"
        flexDirection={"column"}
        alignItems={"center"}
        width="100%"
      >
        <Box>
          <img
            src={image ? previewUrl : imgDefault}
            alt="imgDefault"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              marginBottom: "10px",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          />
        </Box>
        <Box>
          <div class="input-file">
            <input
              type="file"
              id="file"
              class="input-file-input"
              onChange={handleImage}
            />
            <label for="file" class="input-file__btn">
              Seleccionar archivo
            </label>
          </div>
        </Box>
        <UserName
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleSubmit={handleSubmit}
          form={form}
          error={errors.userName !== undefined}
        />
        {errors.userName !== undefined ? (
          <Alert severity="error" sx={{ margin: "15px 0" }}>
            {errors.userName}
          </Alert>
        ) : null}

        <FirstName
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleSubmit={handleSubmit}
          form={form}
          error={errors.firstName !== undefined}
        />
        {errors.firstName !== undefined ? (
          <Alert severity="error" sx={{ margin: "15px 0" }}>
            {errors.firstName}
          </Alert>
        ) : null}

        <LastNameInput
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleSubmit={handleSubmit}
          form={form}
          error={errors.lastName !== undefined}
        />
      </Box>

      {errors.lastname !== undefined ? (
        <Alert severity="error" sx={{ margin: "15px 0" }}>
          {errors.lastname}
        </Alert>
      ) : null}

      <Box
        className="Login-form-control"
        display="flex"
        flexDirection={"column"}
        alignItems={"center"}
      >
      
        <EmailInput
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleSubmit={handleSubmit}
          error={errors.registerEmail !== undefined}
          form={form}
        />
        {errors.registerEmail !== undefined ? (
          <Alert severity="error" sx={{ margin: "15px 0" }}>
            {errors.registerEmail}
          </Alert>
        ) : null}
        <CountrySelect
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleSubmit={handleSubmit}
          form={form}
        />
        {errors.Country !== undefined ? (
          <Alert severity="error" sx={{ margin: "15px 0" }}>
            {errors.Country}
          </Alert>
        ) : null}
        <PasswordRegisterInput
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleSubmit={handleSubmit}
          error={errors.registerpassword !== undefined}
          form={form}
        />
        {errors.registerpassword !== undefined ? (
          <Alert severity="error" sx={{ margin: "15px 0" }}>
            {errors.registerpassword}
          </Alert>
        ) : null}
        <PasswordVerifyInput
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={errors.verifypassword !== undefined}
          handleSubmit={handleSubmit}
          form={form}
        />
      </Box>
      {errors.verifypassword !== undefined ? (
        <Alert severity="error" sx={{ margin: "15px 0" }}>
          {errors.verifypassword}
        </Alert>
      ) : null}

      <Box display="flex" justifyContent="space-around" alignItems="center">
        <Button
          variant="contained"
          color="secondary"
          startIcon={<Icon className="IconL" icon="ph:sign-in-light" />}
          className="Form-button register-button"
          style={{ marginTop: "20px" }}
          onClick={handleSubmit}
        >
          Registrar
        </Button>
      </Box>
    </Box>
  );
};

export default FormRegister;