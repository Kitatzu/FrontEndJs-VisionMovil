import axios from "axios";
import Swal from "sweetalert2";
import Global from "@/utilities/Global";
import { setIsLog, setIsLoading, setUserName } from "../Slices/usersSlices";

export const RegisterUser = (form) => {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    return await axios
      .post({
        url: `${Global.URL}/register`,
        method: "POST",
        body: form,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: form,
      })
      .then((data) => {
        dispatch(setIsLoading(false));
        const userData = {
          userdId: data.data.id,
          userName: data.data.userName,
          email: data.data.email,
          firstName: data.data.firstName,
          lastName: data.data.lastName,
          avatar: form.avatar,
          token: data.data.token,
          rol: data.data.rol,
          verify: data.data.verify,
        };
        localStorage.setItem("token", JSON.stringify(userData));
        Swal.fire({
          icon: "success",
          title: "Register OK!",
          text: "Usuario registrado correctamente!",
          confirmButtonText: "Continuar!",
        }).then(async (response) => {
          await dispatch(setUserName(userData.userName));
          await dispatch(setIsLog(data.data.token));
        });
      })
      .catch((e) => {
        dispatch(setIsLoading(false));
        Swal.fire({
          icon: "error",
          title: response.response ? response.response.status : response.code,
          text: response.response ? response.response.data : response.message,
        });
      });
  };
};
