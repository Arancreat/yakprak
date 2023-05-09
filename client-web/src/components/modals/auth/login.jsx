import React from "react";
import PropTypes from "prop-types";

const Login = ({ onChangeAuth, onClose }) => {
    const onSubmitLogin = (e) => {
        e.preventDefault();
        console.log("Login!");
        onClose();
    };

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
                <p className="modalLink" onClick={onChangeAuth}>
                    Зарегистрироваться
                </p>
            </div>
        </>
    );
};

Login.propTypes = {
    onChangeAuth: PropTypes.func,
    onClose: PropTypes.func,
};

export default Login;
