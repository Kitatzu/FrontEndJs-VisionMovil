import axios from "axios";
import Global from "@/utilities/Global";
import Swal from "sweetalert2";
import {
  startLoadingCart,
  setProductsInCart,
  setStatus,
  setTotalPrice,
} from "../Slices/cartSlice";

const Toast = Swal.mixin({
  toast: true,
  position: "top-start",
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const getCart = () => {
  const userId = JSON.parse(localStorage.getItem("token"))
    ? JSON.parse(localStorage.getItem("token")).userId
    : null;

  return async (dispatch) => {
    dispatch(startLoadingCart());
    return axios
      .get(Global.URL + "/cart" + userId)
      .then((response) => {
        dispatch(
          setProductsInCart({
            status: response.data.status,
            products: response.data.cart.products,
          })
        );
        dispatch(setTotalPrice(response.data.cart.totalPrice));
      })
      .catch((e) => {
        Toast.fire({
          icon: "error",
          title: "No data found!",
        });
      });
  };
};

export const setCart = (form) => {
  const userId = JSON.parse(localStorage.getItem("token"))
    ? JSON.parse(localStorage.getItem("token")).userId
    : null;

  return async (dispatch) => {
    dispatch(startLoadingCart());
    return axios
      .post(Global.URL + "/cart" + form.productId, {
        quantity: form.quantity,
        userId,
      })
      .then((response) => {
        dispatch(
          setStatus({
            status: response.data.status,
            error: response.data.msg,
          })
        );
        Toast.fire({
          icon: "success",
          title: response.data.msg,
        });
      })
      .catch((e) => {
        dispatch(
          setStatus({
            status: e.response.data.status,
            error: e.response.data.msg,
          })
        );
        Toast.fire({
          icon: "error",
          title: "El producto ya existe en el carrito!",
        });
      });
  };
};

export const editCart = (productId, quantity) => {
  const userId = JSON.parse(localStorage.getItem("token"))
    ? JSON.parse(localStorage.getItem("token")).userId
    : null;

  return async (dispatch) => {
    return await axios
      .put(Global.URL + "/cart", { productId, quantity, userId })
      .then((response) => {
        dispatch(getCart());
      })
      .catch((e) => {
        Toast.fire({
          icon: "error",
          title: "Error no encontro producto con el id especifico!",
        });
      });
  };
};

export const deleteProductInCart = (productId, cartId) => {
  return async (dispatch) => {
    return await axios
      .delete(Global.URL + `/cart/${productId}/${cartId}`, {
        productId,
        cartId,
      })
      .then((response) => {
        dispatch(getCart());
      })
      .catch((e) => {
        Toast.fire({
          icon: "error",
          title:
            "Internal error: No se encuentra producto con id especificado!",
        });
      });
  };
};
