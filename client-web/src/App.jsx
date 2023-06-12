import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Cookies from "js-cookie";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import AuthModal from "./components/modals/auth";
import Profile from "./pages/profile";
import NotFound from "./pages/errors/notFound";
import AccessDenied from "./pages/errors/accessDenied";
import Resume from "./pages/resume";

const App = () => {
    const jwtCookie = Cookies.get("jwt");
    const roleCookie = Cookies.get("role");

    const [signup, setSignup] = useState(false);
    const [openAuthModal, setOpenAuthModal] = useState(false);

    return (
        <>
            <main>
                <Header
                    jwtCookie={jwtCookie}
                    roleCookie={roleCookie}
                    open={() => {
                        setSignup(false);
                        setOpenAuthModal(true);
                    }}
                />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                jwtCookie={jwtCookie}
                                roleCookie={roleCookie}
                                open={() => {
                                    setSignup(true);
                                    setOpenAuthModal(true);
                                }}
                            />
                        }
                    />
                    <Route
                        path="/profile"
                        element={<Profile roleCookie={roleCookie} />}
                    />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/401" element={<AccessDenied />} />
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
