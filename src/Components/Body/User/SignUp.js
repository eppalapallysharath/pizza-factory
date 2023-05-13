import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpAction } from "../../../Redux/Actions/UserActions";
import "./SignUp.css";

const SignUp = () => {
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userR.users);
  console.log(user);
  const handleSignUpChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    dispatch(signUpAction(newUser));
    alert("Registered successfully");
    setNewUser({ username: "", email: "", password: "" });
  };

  return (
    <div className="signUp-container">
      <div className="signUp-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUpSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={newUser.username}
            onChange={handleSignUpChange}
            required
            minLength="5"
            maxLength="10"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={newUser.email}
            onChange={handleSignUpChange}
            required
            minLength="5"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={newUser.password}
            onChange={handleSignUpChange}
            required
            minLength="8"
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
