export const signUpAction = (data) => {
  return {
    type: "SIGNUP",
    payload: data,
  };
};

export const loginAction = (data) => {
  return {
    type: "LOGIN",
    payload: data,
  };
};
export const logoutAction = (data) => {
  return {
    type: "LOGOUT",
  };
};
