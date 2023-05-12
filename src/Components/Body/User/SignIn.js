import React, { useState } from "react";
import "./SignIn.css";
import { useDispatch } from "react-redux";
import { loginAction } from "../../../Redux/Actions/UserActions";

const SignIn = () => {
  const initialValues = { email: "", password: "" };
  const [user, setUser] = useState(initialValues);
  const dispatch = useDispatch();

  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  console.log(user);
  const handleSignInSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAction(user));
  };

  return (
    <div className="signIn-container">
      <div className="signIn-form">
        <h2>Sign In</h2>
        <form onSubmit={handleSignInSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleSignInChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleSignInChange}
          />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
