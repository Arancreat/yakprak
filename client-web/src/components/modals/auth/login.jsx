import React, { useState } from "react";
import PropTypes from "prop-types";
import { ApiLogin } from "../../../services/traineeAuth";

const Login = ({ onChangeAuth, onClose }) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [serverError, setServerError] = useState("");

    const onSubmitLogin = async (e) => {
        e.preventDefault();

        let status = await ApiLogin({ email: email, password: pass }).then(
            (res) => {
                return res;
            }
        );
        if (status == 200) {
            setServerError("");
            onClose();
        } else {
            if (status == 403) {
                setServerError("Вы ввели неверные данные");
            } else {
                setServerError("Проблемы с сервером");
            }
        }
    };

    return (
        <>
            <div className="modalContent">
                <form className="modalForm" onSubmit={onSubmitLogin}>
                    <h2>Авторизация</h2>
                    <div className="modalError">{serverError}</div>
                    <input
                        id="loginEmail"
                        type="email"
                        placeholder="Почта"
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    <input
                        id="loginPassword"
                        type="password"
                        placeholder="Пароль"
                        onChange={(e) => setPass(e.target.value)}
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
