import "./app.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Landing from "./pages/landing";
import Modal from "./components/modal";

const App = () => {
    const [openAuthModal, setOpenAuthModal] = useState(false);
    return (
        <>
            <main>
                <Header />
                <Routes>
                    <Route path="/" element={<Landing open={() => setOpenAuthModal(true)} />} />
                    <Route path="/about" element={<About />} />
                </Routes>
                <Modal
                    open={openAuthModal}
                    onClose={() => setOpenAuthModal(false)}
                />
            </main>
            <Footer />
        </>
    );
};

export default App;
