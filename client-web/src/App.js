import "./app.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./pages/about";
import Landing from "./pages/landing";
import AuthModal from "./components/authModal";

const App = () => {
    const [signup, setSignup] = useState(false);
    const [openAuthModal, setOpenAuthModal] = useState(false);

    return (
        <>
            <main>
                <Header
                    open={() => {
                        setSignup(false);
                        setOpenAuthModal(true);
                    }}
                />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Landing
                                open={() => {
                                    setSignup(true);
                                    setOpenAuthModal(true);
                                }}
                            />
                        }
                    />
                    <Route path="/about" element={<About />} />
                </Routes>
                <AuthModal
                    open={openAuthModal}
                    signup={signup}
                    onChangeAuth={() => setSignup(!signup)}
                    onClose={() => setOpenAuthModal(false)}
                />
            </main>
            <Footer />
        </>
    );
};

export default App;
