import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign_in" element={<SignIn />} />
          <Route path="/sign_up" element={<SignUp />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
