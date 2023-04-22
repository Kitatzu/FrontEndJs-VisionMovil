import axios from "axios";
import Swal from "sweetalert2";
import Global from "@/utilities/Global";
import {
  setCreateProduct,
  setIsLoadingProducts,
  setProducts,
  setProductId,
  setPages,
  setPopularProducts,
  setDeletedProduct,
} from "../Slices/productsSlice";

export const getProducts = () => {
  return async (dispatch) => {
    dispatch(setIsLoadingProducts(true));
    await axios
      .get(`${Global.URL}/products`)
      .then((response) => {
        dispatch(setProducts(response.data));
        dispatch(setIsLoadingProducts(false));
      })
      .catch((response) => {});
  };
};

export const getProductsByName = (name) => {
  return async (dispatch) => {
    dispatch(setIsLoadingProducts(true));
    await axios
      .get(`${Global.URL}/search/${name}`)
      .then((response) => {
        console.log(response);
        dispatch(setProducts(response.data));
        dispatch(setIsLoadingProducts(false));
      })
      .catch((response) => {});
  };
};

export const getProductsById = (id) => {
  return async (dispatch) => {
    try {
      dispatch(setIsLoadingProducts(true));
      axios
        .get(`${Global.URL}/products/${id}`)
        .then((response) => {
          dispatch(setProductId(response.data));
          dispatch(setIsLoadingProducts(false));
        })
        .catch((e) => {
          console.log(e);
          dispatch(setIsLoadingProducts(false));
        });
    } catch (error) {
      return error;
    }
  };
};

export const createProduct = () => {
  return async (dispatch) => {
    dispatch(setIsLoadingProducts(true));
    return await axios({
      url: `${Global.URL}/products`,
      method: "POST",
      body: form,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: form,
    })
      .then((response) => {
        dispatch(getProducts());
        dispatch(setIsLoadingProducts(false));
        dispatch(setCreateProduct(response.data.newProduct.id));
      })
      .catch((response) => {
        dispatch(setIsLoadingProducts(false));
        Swal.fire({
          icon: "error",
        });
      });
  };
};

export const getPages = (page) => {
  if (parseInt(page) === 0) {
    return async (dispatch) => {
      await axios
        .get(`${Global.URL}/products/page/${page}`)
        .then((response) => {
          dispatch(setPages(response.data.pages));
        })
        .catch((response) => {
          Toast.fire({ icon: "error" });
        });
    };
  } else {
    return async (dispatch) => {
      await axios
        .get(`${Global.URL}/products/page/${page}`)
        .then((response) => {
          dispatch(setProducts(response.data));
        })
        .catch((response) => {
          console.log(response);
          Toast.fire({ icon: "error" });
        });
    };
  }
};

export const getProductsByCategories = (name) => {
  return async (dispatch) => {
    dispatch(setIsLoadingProducts(true));
    await axios
      .get(`${Global.URL}/categories/${name}`)
      .then((response) => {
        dispatch(setProducts(response.data.filter));
        dispatch(setIsLoadingProducts(false));
      })
      .catch((response) => {
        // alert(response.response.data.msg);
        dispatch(setIsLoadingProducts(false));
      });
  };
};

export const getPopularProducts = () => {
  return async (dispatch) => {
    axios
      .get(`${Global.URL}/products/popular`)
      .then((response) => {
        dispatch(setPopularProducts(response.data));
      })
      .catch((e) => {
        Swal.fire({
          icon: "warning",
          title: "Advertencia! no existen productos populares.",
        });
      });
  };
};
