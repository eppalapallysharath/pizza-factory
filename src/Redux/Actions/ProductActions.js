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
// export const removeProduct = () => {
//   return {
//     type: "REMOVE_PRODUCT",
//   };
// };
