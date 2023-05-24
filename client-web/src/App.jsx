import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Cookies from "js-cookie";
import Header from "./components/header";
import TraineeHeader from "./components/header/traineeHeader";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Landing from "./pages/landing";
import AuthModal from "./components/modals/auth";
import Profile from "./pages/profile";

const queryClient = new QueryClient();

const App = () => {
    const [signup, setSignup] = useState(false);
    const [openAuthModal, setOpenAuthModal] = useState(false);
    const jwtCookie = Cookies.get("jwt");

    console.log("jwt: ", jwtCookie);
    return (
        <QueryClientProvider client={queryClient}>
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
                        <Route path="/" element={<Home />} />
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
                    <Route path="/profile" element={<Profile />} />
                </Routes>
                <AuthModal
                    open={openAuthModal}
                    signup={signup}
                    onChangeAuth={() => setSignup(!signup)}
                    onClose={() => setOpenAuthModal(false)}
                />
            </main>
            <Footer />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

export default App;
