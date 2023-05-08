import { Route, Routes } from "react-router-dom";
import "./app.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Landing from "./pages/landing";

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
};

export default App;
