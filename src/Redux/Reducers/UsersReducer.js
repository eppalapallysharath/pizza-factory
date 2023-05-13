const initialState = {
  users: [],
  login: {},
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP":
      return { ...state, users: state.users.concat(action.payload) };
    case "LOGIN":
      return { ...state, login: action.payload };
    case "LOGOUT":
      return { ...state, login: {} };
    default:
      return state;
  }
};
