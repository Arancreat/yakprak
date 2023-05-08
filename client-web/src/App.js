import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";

const App = () => {
    return (
        <>
            <Header />
            <main>
                <div className="content-main">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default App;
