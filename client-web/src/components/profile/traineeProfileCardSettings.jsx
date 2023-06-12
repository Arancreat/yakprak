import React, { useEffect, useRef, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import validator from "validator";
import PropTypes from "prop-types";
import "./profileCardSettings.css";
import camera from "../../media/camera.svg";
import { ApiPostAvatar, ApiPutProfileData } from "../../services/trainee";

const TraineeProfileCardSettings = ({ currentUser, toggleEdit }) => {
    const [name, setName] = useState(currentUser?.firstName);
    const [surname, setSurname] = useState(currentUser?.lastName);
    const [patronymic, setPatronymic] = useState(currentUser?.patronymic);
    const [phone, setPhone] = useState(currentUser?.phone);
    const [birthdate, setBirthdate] = useState(
        new Date(currentUser?.birthdate)
    );
    const [gender, setGender] = useState(currentUser?.gender);
    const onChangeGender = (e) => setGender(e.target.value);
    const [avatarUrl, setAvatarUrl] = useState(currentUser?.avatar);

    const avatarRef = useRef();
    // validation errors
    const [nameError, setNameError] = useState("");
    const [surnameError, setSurnameError] = useState("");
    const [patronymicError, setPatronymicError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [avatarError, setAvatarError] = useState("");

    const dateOptions = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        timezone: "UTC",
    };

    const queryClient = useQueryClient();

    const traineeProfileData = useMutation({
        mutationFn: async (data) => {
            return await ApiPutProfileData(data).then((res) => {
                if (res.message) {
                    queryClient.invalidateQueries({
                        queryKey: ["currentUser"],
                    });
                    toggleEdit();
                }
            });
        },
    });

    const checkImageTypeFile = (data) => {
        if (data.indexOf("image") === 0) return true;
        else return false;
    };

    const handlePhotoChange = async (e) => {
        if (!checkImageTypeFile(e.target.files[0].type)) return;

        const data = new FormData();

        data.append("image", e.target.files[0], e.target.files[0].name);
        data.append("id", currentUser.id);

        const res = await ApiPostAvatar(data);

        if (res.path) {
            setAvatarUrl(res.path);
            setAvatarError("");
        } else setAvatarError("Аватар не загрузился");
    };

    const onSubmitProfileEdit = async (e) => {
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

        if (patronymic.length < 30) setPatronymicError("");
        else {
            setPatronymicError("Ваше отчество слишком длинное");
            error = true;
        }

        if (phone.length < 15) setPhoneError("");
        else {
            setPhoneError("Номер слишком длинный");
            error = true;
        }

        if (error) return;

        traineeProfileData.mutate({
            id: currentUser.id,
            firstName: name,
            lastName: surname,
            patronymic: patronymic,
            phone: phone,
            birthdate: birthdate,
            gender: gender,
        });
    };

    return (
        <div className="profileSettings">
            <h2>Настройки профиля</h2>

            <form
                className="profileSettingsForm"
                onSubmit={onSubmitProfileEdit}
            >
                <div className="column">
                    <input
                        name="profileName"
                        type="text"
                        placeholder="Имя"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                    <div className="profileError">{nameError}</div>

                    <input
                        name="profileSurname"
                        type="text"
                        placeholder="Фамилия"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                    ></input>
                    <div className="profileError">{surnameError}</div>

                    <input
                        name="profilePatronymic"
                        type="text"
                        placeholder="Отчество"
                        value={patronymic}
                        onChange={(e) => setPatronymic(e.target.value)}
                    ></input>
                    <div className="profileError"> {patronymicError}</div>

                    <input
                        name="profilePhone"
                        type="text"
                        placeholder="Телефон"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    ></input>
                    <div className="profileError">{phoneError}</div>

                    <input
                        name="profileBirthdate"
                        type="date"
                        placeholder="Дата рождения"
                        defaultValue={birthdate.toISOString().split("T")[0]}
                        onBlur={(e) => setBirthdate(new Date(e.target.value))}
                    ></input>

                    <fieldset>
                        <legend>Ваш пол</legend>
                        
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked={gender === "male"}
                                onChange={onChangeGender}
                            />
                            Мужской
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={gender === "female"}
                                onChange={onChangeGender}
                            />
                            Женский
                        </label>
                    </fieldset>
                </div>

                <div className="column">
                    <div className="avatarWrapper">
                        <input
                            type="file"
                            style={{ display: "none" }}
                            ref={avatarRef}
                            onChange={(e) => handlePhotoChange(e)}
                            accept="image/,.png,.jpg,.jpeg"
                        />
                        <img
                            className="avatar"
                            src={"http://localhost:8080" + avatarUrl}
                            alt="avatar"
                        />
                        <div className="shadow" />
                        <img
                            className="camera"
                            src={camera}
                            alt="svg-camera-icon"
                            onClick={() => avatarRef.current.click()}
                        />
                        <div className="profileError">{avatarError}</div>
                    </div>

                    <div className="buttons">
                        <button className="btn" type="submit">
                            Сохранить
                        </button>
                        <button
                            className="btnCancel"
                            type="button"
                            onClick={toggleEdit}
                        >
                            Отмена
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

TraineeProfileCardSettings.propTypes = {
    currentUser: PropTypes.object,
    toggleEdit: PropTypes.func,
};

export default TraineeProfileCardSettings;
