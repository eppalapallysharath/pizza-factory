import React, { useState } from "react";
import "./SignIn.css";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../../Redux/Actions/UserActions";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const initialValues = { email: "", password: "" };
  const [user, setUser] = useState(initialValues);
  const usersData = useSelector((state) => state.userR.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    const check = usersData.find(
      (val) => val.email === user.email && val.password === user.password
    );
    if (check) {
      dispatch(loginAction(check));
      alert("Login successful");
      navigate("/");
    } else {
      alert("Enter Valid Username or Password");
    }
    // check ? (dispatch(loginAction(check)) , alert("logged")) : alert("failed to login");
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
            minLength="5"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleSignInChange}
            minLength="8"
            required
          />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
