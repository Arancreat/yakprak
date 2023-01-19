import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Api from "../components/Api";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(email);
    console.log(password);

    const isAuth = await Api.postSignIn(email, password);

    if (isAuth) {
      console.log("I got token");
      console.log(localStorage.getItem("token"));

      navigate("/");
    } else {
      console.log("Error!!");
    }
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
