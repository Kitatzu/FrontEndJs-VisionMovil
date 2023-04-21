import { 
    setProducts,
    setLoadingProducts,
    setDeletedProducts,
    setProductID,
    setCreateProduct
 } from "../Slices/productsSlice";
import Global from "@/utilities/Global";

export const getProducts = () => {
    return async (dispatch) => {
      dispatch(setLoadingProducts(true));
      await axios
        .get(`${Global.URL}/products`)
        .then((response) => {
          console.log(response);
          dispatch(setProducts(response.data));
          dispatch(setLoadingProducts(false));
        })
        .catch((response) => {
          console.log(response);
          alert(response.response.data.msg);
        });
    };
  };

  export const deletedProducts = () => {
    return async (dispatch) => {
      dispatch(setLoadingProducts(true));
      await axios
        .get(`${Global.URL}/products/status`)
        .then((response) => {
          dispatch(setDeletedProducts(response.data));
          dispatch(setLoadingProducts(false));
        })
        .catch((response) => {
          dispatch(setLoadingProducts(false));
          console.log(response);
        });
    };
  };
  
  export const getProductByID = (id) => {
    return async (dispatch) => {
      try {
        dispatch(setLoadingProducts(true));
        axios
          .get(`${Global.URL}/products/${id}`)
          .then((response) => {
            dispatch(setProductID(response.data));
            dispatch(setLoadingProducts(false));
          })
          .catch((e) => {
            console.log(e);
            dispatch(setLoadingProducts(false));
          });
      } catch (error) {
        console.log(error);
      }
    };
  };

  export const createProduct = (form) => {
  return async (dispatch) => {
    dispatch(setLoadingProducts(true));
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
        console.log(response);
        dispatch(getProducts());
        dispatch(setLoadingProducts(false));
        dispatch(setCreateProduct(response.data.newProduct.id));
      })
      .catch((response) => {
        console.log(response);
        dispatch(setLoadingProducts(false));
      });
  };
};

export const restoreProduct =()=>{
return async (dispatch) =>{
    dispatch(setLoadingProducts(true));
    return await axios.put(`${Global.URL}/products/restore/${id}`)
    .then((response) => {
        console.log(response);
        dispatch(setProducts(response.data));
        dispatch(setLoadingProducts(false));
      })
      .catch((response) => {
        console.log(response);
        alert(response.response.data.msg);
      });
}
}

export const updateProduct =() => {
    return async (dispatch) =>{
        dispatch(setLoadingProducts(true));
        return await axios.put(`${Global.URL}/products/${id}`)
        .then((response) => {
            console.log(response);
            dispatch(setProducts(response.data));
            dispatch(setLoadingProducts(false));
          })
          .catch((response) => {
            console.log(response);
            alert(response.response.data.msg);
          });
    }
}