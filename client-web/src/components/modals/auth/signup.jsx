import React, { useState } from "react";
import PropTypes from "prop-types";
import { useMutation } from "@tanstack/react-query";
import ApiSignup from "../../../api/auth";

const Signup = ({ onChangeAuth, onClose }) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const postSignup = useMutation({
        mutationFn: (data) => ApiSignup(data),
    });

    const onSubmitSignup = (e) => {
        e.preventDefault();
        postSignup.mutate({ email: email, password: pass });
        onClose();
    };

    return (
        <>
            <div className="modalContent" autoComplete="false">
                <form className="modalForm" onSubmit={onSubmitSignup}>
                    <h2>Регистрация</h2>
                    <input
                        name="signupName"
                        type="text"
                        placeholder="Имя"
                    ></input>
                    <input
                        name="signupSurname"
                        type="text"
                        placeholder="Фамилия"
                    ></input>
                    <input
                        name="signupEmail"
                        type="email"
                        placeholder="Почта"
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="new-mail"
                    ></input>
                    <input
                        name="signupPassword"
                        type="password"
                        placeholder="Пароль"
                        onChange={(e) => setPass(e.target.value)}
                        autoComplete="new-password"
                    ></input>
                    <input
                        name="signupConfirmPassword"
                        type="password"
                        placeholder="Подтвердите пароль"
                    ></input>
                    <button name="signupButton" type="submit" className="btn">
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

Signup.propTypes = {
    onChangeAuth: PropTypes.func,
    onClose: PropTypes.func,
};

export default Signup;
