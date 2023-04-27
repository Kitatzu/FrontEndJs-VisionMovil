import axios from "axios";
import Swal from "sweetalert2";
import Global from "@/utilities/Global";
import {
  setDataUser,
  setIsLoading,
  setIsLog,
  setUserName,
} from "../Slices/usersSlices";

export const loginUser = (form) => {
  return async (dispatch) => {
    await dispatch(setIsLoading(true));
    await axios
      .post(Global.URL + "/login", form)
      .then((data) => {
        const userData = {
          userdId: data.data.id,
          userName: data.data.userName,
          email: data.data.email,
          firstName: data.data.firstName,
          lastName: data.data.lastName,
          avatar: form.avatar,
          token: data.data.token,
          rol: data.data.role.rol,
          verify: data.data.verify,
        };
        localStorage.setItem("token", JSON.stringify(userData));
        dispatch(setIsLoading(false));
        Swal.fire({
          icon: "success",
          title: "Login Ok!",
          text: "Usuario Logeado correctamente!",
        }).then(async (response) => {
          await dispatch(setUserName(data.data.userName));
          await dispatch(setIsLog(data.data.token));
        });
      })
      .catch((e) => {
        dispatch(setIsLoading(false));
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Error usuario o contraseña invalidos",
        });
      });
  };
};
