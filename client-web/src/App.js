import "./app.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./pages/about";
import Landing from "./pages/landing";
import AuthModal from "./components/authModal";

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
                <AuthModal
                    open={openAuthModal}
                    onClose={() => setOpenAuthModal(false)}
                />
            </main>
            <Footer />
        </>
    );
};

export default App;
