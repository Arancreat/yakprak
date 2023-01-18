import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };

  return (
    <>
      <form className="auth_form" onSubmit={handleSubmit}>
        <h2>Sign in</h2>
        <input
          type="email"
          placeholder="Email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
      <div className="sign_up_link">
        Don't have an account? <Link to="/sign_up">Sign up!</Link>
      </div>
    </>
  );
};

export default SignIn;
