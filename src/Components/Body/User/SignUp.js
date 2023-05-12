import React, { useState } from "react";
import "./SignUp.css";
import { useDispatch } from "react-redux";
import { signUpAction } from "../../../Redux/Actions/UserActions";

const SignUp = () => {
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handleSignUpChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    dispatch(signUpAction(newUser));
  };

  return (
    <div className="signUp-container">
      <div className="signUp-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUpSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Name"
            value={newUser.username}
            onChange={handleSignUpChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={newUser.email}
            onChange={handleSignUpChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={newUser.password}
            onChange={handleSignUpChange}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
