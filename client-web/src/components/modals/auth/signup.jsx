import React, { useState } from "react";
import PropTypes from "prop-types";
import validator from "validator";
import { ApiSignup } from "../../../services/auth";

const Signup = ({ onChangeAuth, onClose }) => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    // validation errors
    const [serverError, setServerError] = useState("");
    const [nameError, setNameError] = useState("");
    const [surnameError, setSurnameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passError, setPassError] = useState("");
    const [confirmPassError, setConfirmPassError] = useState("");

    const onSubmitSignup = async (e) => {
        e.preventDefault();
        let error = false;

        if (name.length > 0) {
            setNameError("");

            if (name.length < 30) setNameError("");
            else {
                setNameError("Ваше имя слишком длинное");
                error = true;
            }
        } else {
            setNameError("Введите имя");
            error = true;
        }

        if (surname.length > 0) {
            setSurnameError("");

            if (surname.length < 30) setSurnameError("");
            else {
                setSurnameError("Ваше фамилие слишком длинное");
                error = true;
            }
        } else {
            setSurnameError("Введите фамилие");
            error = true;
        }

        if (validator.isEmail(email)) setEmailError("");
        else {
            setEmailError("Вы ввели некорректную почту");
            error = true;
        }

        if (pass.length >= 8) {
            setPassError("");
            if (pass === confirmPass) setConfirmPassError("");
            else {
                setConfirmPassError("Пароли не совпадают");
                error = true;
            }
        } else {
            setPassError("Введите не менее 8 символов");
            error = true;
        }

        if (error) return;

        let status = await ApiSignup({ email: email, password: pass }).then(
            (res) => {
                return res;
            }
        );
        if (status == 200) {
            setServerError("");
            onClose();
        } else {
            if (status == 500) {
                setServerError("Возможно, такая почта уже занята");
            } else {
                setServerError("Проблемы с сервером");
            }
        }
    };

    return (
        <>
            <div className="modalContent" autoComplete="false">
                <form className="modalForm" onSubmit={onSubmitSignup}>
                    <h2>Регистрация</h2>

                    <div className="modalError">{serverError}</div>

                    <input
                        name="signupName"
                        type="text"
                        placeholder="Имя"
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                    <div className="modalError">{nameError}</div>

                    <input
                        name="signupSurname"
                        type="text"
                        placeholder="Фамилия"
                        onChange={(e) => setSurname(e.target.value)}
                    ></input>
                    <div className="modalError">{surnameError}</div>

                    <input
                        name="signupEmail"
                        type="text"
                        placeholder="Почта"
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="new-mail"
                    ></input>
                    <div className="modalError"> {emailError}</div>

                    <input
                        name="signupPassword"
                        type="password"
                        placeholder="Пароль"
                        onChange={(e) => setPass(e.target.value)}
                        autoComplete="new-password"
                    ></input>
                    <div className="modalError">{passError}</div>

                    <input
                        name="signupConfirmPassword"
                        type="password"
                        placeholder="Подтвердите пароль"
                        onChange={(e) => setConfirmPass(e.target.value)}
                    ></input>
                    <div className="modalError">{confirmPassError}</div>

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
