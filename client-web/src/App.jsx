import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Cookies from "js-cookie";
import Header from "./components/header";
import TraineeHeader from "./components/header/traineeHeader";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Landing from "./pages/landing";
import AuthModal from "./components/modals/auth";
import Profile from "./pages/profile";
import NotFound from "./pages/notFound";
import Resume from "./pages/resume";

const App = () => {
    const jwtCookie = Cookies.get("jwt");

    const [signup, setSignup] = useState(false);
    const [openAuthModal, setOpenAuthModal] = useState(false);

    return (
        <>
            <main>
                {jwtCookie ? (
                    <TraineeHeader />
                ) : (
                    <Header
                        open={() => {
                            setSignup(false);
                            setOpenAuthModal(true);
                        }}
                    />
                )}

                <Routes>
                    {jwtCookie ? (
                        <>
                            <Route path="/" element={<Home />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/resume" element={<Resume />} />
                        </>
                    ) : (
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
                    )}
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
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
