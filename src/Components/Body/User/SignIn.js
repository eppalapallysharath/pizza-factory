import React from "react";
import "./SignIn.css";

const SignIn = () => {
  const handleSignInSubmit = (e) => {
    e.preventDefault();
    console.log("Sign In Data:");
    // Add your sign in logic here
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
            //   value={signInData.email}
            //   onChange={handleSignInChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            //   value={signInData.password}
            //   onChange={handleSignInChange}
          />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
