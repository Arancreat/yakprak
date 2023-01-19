import React from "react";
import { useNavigate } from "react-router-dom";
import Api from "../components/Api";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(email);
    console.log(password);

    const isReg = await Api.postSignUp(email, password);

    if (isReg) {
      console.log("Successfully signed up");

      navigate("/sign_in");
    } else {
      console.log("Error!!");
    }
  };

  return (
    <form className="auth_form" onSubmit={handleSubmit}>
      <h2>Sign up</h2>
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
      <button type="submit">Sign up</button>
    </form>
  );
};

export default SignUp;
