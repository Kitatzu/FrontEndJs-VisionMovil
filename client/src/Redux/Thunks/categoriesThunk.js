import axios from "axios";
import Global from "@/utilities/Global";
import Swal from "sweetalert2";
import { setCategories } from "../Slices/categoriesSlice";

export const getCategories = () => {
  return async (dispatch) => {
    await axios
      .get(Global.URL + "/categories")
      .then((response) => {
        dispatch(setCategories(response.data.Categories));
      })
      .catch((response) => {
        Swal.fire({
          icon: "error",
          title: response.response.data.Message,
        });
      });
  };
};
