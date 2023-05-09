import "./app.css";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./pages/about";
import Landing from "./pages/landing";
import AuthModal from "./components/authModal";

const queryClient = new QueryClient();

const App = () => {
    const [signup, setSignup] = useState(false);
    const [openAuthModal, setOpenAuthModal] = useState(false);

    return (
        <QueryClientProvider client={queryClient}>
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
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

export default App;
