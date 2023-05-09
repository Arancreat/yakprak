import "./modal.css";
import imagePlaceholder from "../media/img-placeholder.png";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const AuthModal = ({ open, signup, onClose, onChangeAuth }) => {
    useEffect(() => {
        if (open) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "unset";
    }, [open]);

    if (!open) return null;

    const onSubmitLogin = (e) => {
        e.preventDefault();
        console.log("Login!");
        onClose();
    };

    const onSubmitSignup = (e) => {
        e.preventDefault();
        console.log("Signup!");
        onClose();
    };

    const Login = () => {
        return (
            <>
                <div className="modalContent">
                    <form className="modalForm" onSubmit={onSubmitLogin}>
                        <h2>Авторизация</h2>
                        <input
                            id="loginEmail"
                            type="email"
                            placeholder="Почта"
                        ></input>
                        <input
                            id="loginPassword"
                            type="password"
                            placeholder="Пароль"
                        ></input>
                        <button id="loginButton" type="submit" className="btn">
                            Войти
                        </button>
                    </form>
                </div>
                <div className="modalLinkContainer">
                    Нет аккаунта?
                    <p className="modalLink" onClick={() => onChangeAuth()}>
                        Зарегистрироваться
                    </p>
                </div>
            </>
        );
    };

    const Signup = () => {
        return (
            <>
                <div className="modalContent" autoComplete="false">
                    <form className="modalForm" onSubmit={onSubmitSignup}>
                        <h2>Регистрация</h2>
                        <input
                            id="signupName"
                            type="text"
                            placeholder="Имя"
                        ></input>
                        <input
                            id="signupSurname"
                            type="text"
                            placeholder="Фамилия"
                        ></input>
                        <input
                            id="signupEmail"
                            type="email"
                            placeholder="Почта"
                            autoComplete="new-mail"
                        ></input>
                        <input
                            id="signupPassword"
                            type="password"
                            placeholder="Пароль"
                            autoComplete="new-password"
                        ></input>
                        <input
                            id="signupConfirmPassword"
                            type="password"
                            placeholder="Подтвердите пароль"
                        ></input>
                        <button id="signupButton" type="submit" className="btn">
                            Зарегистрироваться
                        </button>
                    </form>
                </div>
                <div className="modalLinkContainer">
                    Есть аккаунт?
                    <p className="modalLink" onClick={() => onChangeAuth()}>
                        Войти
                    </p>
                </div>
            </>
        );
    };

    return (
        <div onClick={onClose} className="modalOverlay">
            <div
                onClick={(e) => {
                    e.stopPropagation();
                }}
                className="modalContainer"
            >
                <img src={imagePlaceholder} alt="authPic" />
                <div className="modalRight">
                    <p onClick={onClose} className="modalCloseBtn">
                        X
                    </p>
                    {signup ? Signup() : Login()}
                </div>
            </div>
        </div>
    );
};

AuthModal.propTypes = {
    open: PropTypes.bool,
    signup: PropTypes.bool,
    onClose: PropTypes.func,
    onChangeAuth: PropTypes.func,
};

export default AuthModal;
