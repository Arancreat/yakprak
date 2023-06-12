import React, { useState } from "react";
import PropTypes from "prop-types";
import validator from "validator";
import { ApiSignup } from "../../../services/companyAuth";

const CompanySignup = ({ onChangeAuth, onClose }) => {
    const [companyName, setCompanyName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    // validation errors
    const [serverError, setServerError] = useState("");
    const [companyNameError, setNameError] = useState("");
    const [surnameError, setSurnameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passError, setPassError] = useState("");
    const [confirmPassError, setConfirmPassError] = useState("");

    const onSubmitSignup = async (e) => {
        e.preventDefault();
        let error = false;

        if (companyName.length > 0) {
            setNameError("");

            if (companyName.length < 30) setNameError("");
            else {
                setNameError("Ваше имя слишком длинное");
                error = true;
            }
        } else {
            setNameError("Введите имя");
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

        let status = await ApiSignup({
            companyName: companyName,
            email: email,
            password: pass,
        }).then((res) => {
            return res;
        });
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
            <form className="modalForm" onSubmit={onSubmitSignup}>
                <h2>Регистрация</h2>

                <div className="modalError">{serverError}</div>
                <div className="modalError">{companyNameError}</div>
                <input
                    name="signupCompanyName"
                    type="text"
                    placeholder="Название компании"
                    onChange={(e) => setCompanyName(e.target.value)}
                ></input>

                <div className="modalError"> {emailError}</div>
                <input
                    name="signupEmail"
                    type="text"
                    placeholder="Почта"
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="new-mail"
                ></input>

                <div className="modalError">{passError}</div>
                <input
                    name="signupPassword"
                    type="password"
                    placeholder="Пароль"
                    onChange={(e) => setPass(e.target.value)}
                    autoComplete="new-password"
                ></input>

                <div className="modalError">{confirmPassError}</div>
                <input
                    name="signupConfirmPassword"
                    type="password"
                    placeholder="Подтвердите пароль"
                    onChange={(e) => setConfirmPass(e.target.value)}
                ></input>

                <button name="signupButton" type="submit" className="btn">
                    Зарегистрироваться
                </button>
            </form>
            <div className="modalLinkContainer">
                Есть аккаунт?
                <p className="modalLink" onClick={() => onChangeAuth()}>
                    Войти
                </p>
            </div>
        </>
    );
};

CompanySignup.propTypes = {
    onChangeAuth: PropTypes.func,
    onClose: PropTypes.func,
};

export default CompanySignup;

