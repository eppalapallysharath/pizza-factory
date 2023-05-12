import axios from "axios";

const url = "http://localhost:3010";

export const fetchProductsList = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${url}/pizza`);
      dispatch({
        type: "PRODUCTS_LIST",
        payload: res?.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchProduct = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${url}/pizza/${id}`);
      dispatch({ type: "PRODUCT", payload: res?.data });
      const addons = await axios.get(`${url}/add_ons`);
      dispatch({
        type: "ADD_ONS",
        payload: addons?.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeProduct = () => {
  return {
    type: "REMOVE_PRODUCT",
  };
};

export const addToCart = (cart) => {
  return {
    type: "ADD_TO_CART",
    payload: cart,
  };
};

export const cartIncrement = (id) => {
  return {
    type: "CART_INCREMENT",
    payload: id,
  };
};
export const cartDecrement = (id) => {
  return {
    type: "CART_DECREMENT",
    payload: id,
  };
};
export const deleteFromCart = (id) => {
  return {
    type: "DELETE_FROM_CART",
    payload: id,
  };
};
