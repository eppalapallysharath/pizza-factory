const initialState = {
  users: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // case "SIGNUP":
    //   console.log(action.payload);
    //   return { ...state };
    default:
      return state;
  }
};
