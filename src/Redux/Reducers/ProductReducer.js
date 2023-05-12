const initialState = {
  products: [],
  productDescription: [],
  productAddons: {},
  cart: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCTS_LIST":
      return { ...state, products: action.payload };

    case "PRODUCT":
      return {
        ...state,
        productDescription: action.payload,
      };
    case "REMOTE_PRODUCT":
      return {};

    case "ADD_ONS":
      return {
        ...state,
        productAddons: action.payload,
      };
    case "ADD_TO_CART":
      const check = state.cart.some(
        (val) => val.productId === action.payload.productId
      );
      if (check === true) {
        alert("Already added in cart !");
      } else {
        let data = {
          ...action.payload,
          quantity: 1,
        };
        state.cart.push(data);
      }
      return { ...state, cart: state.cart };
    case "CART_INCREMENT":
      return {
        ...state,
        cart: state.cart.map((pizza) => {
          if (pizza.productId === action.payload) {
            return { ...pizza, quantity: pizza.quantity + 1 };
          }
          return pizza;
        }),
      };
    case "CART_DECREMENT":
      return {
        ...state,
        cart: state.cart.map((pizza) => {
          if (pizza.quantity > 1) {
            if (pizza.productId === action.payload) {
              return { ...pizza, quantity: pizza.quantity - 1 };
            }
          }
          return pizza;
        }),
      };
    case "DELETE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((pizza) => pizza.productId !== action.payload),
      };
    default:
      return state;
  }
};
