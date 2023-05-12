import React from "react";
import "./SignUp.css";

const SignUp = () => {
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    console.log("Sign Up Data:");
    // Add your sign up logic here
  };

  return (
    <div className="signUp-container">
      <div className="signUp-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUpSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            //   value={signUpData.name}
            //   onChange={handleSignUpChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            //   value={signUpData.email}
            //   onChange={handleSignUpChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            //   value={signUpData.password}
            //   onChange={handleSignUpChange}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
