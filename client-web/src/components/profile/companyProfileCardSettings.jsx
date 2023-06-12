import React, { useEffect, useRef, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import validator from "validator";
import PropTypes from "prop-types";
import "./profileCardSettings.css";
import camera from "../../media/camera.svg";
import {
    ApiPostCompanyAvatar,
    ApiPutCompanyProfileData,
} from "../../services/company";

const CompanyProfileCardSettings = ({ currentCompany, toggleEdit }) => {
    const [companyName, setCompanyName] = useState(currentCompany?.companyName);
    const [description, setDescription] = useState(currentCompany?.description);
    const [phone, setPhone] = useState(currentCompany?.phone);
    const [category, setCategory] = useState(currentCompany?.category);
    const [isCompanyPublic, setIsCompanyPublic] = useState(
        currentCompany?.public
    );
    const [avatarUrl, setAvatarUrl] = useState(currentCompany?.avatar);

    const avatarRef = useRef();
    // validation errors
    const [companyNameError, setCompanyNameError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [avatarError, setAvatarError] = useState("");

    const queryClient = useQueryClient();

    const traineeProfileData = useMutation({
        mutationFn: async (data) => {
            return await ApiPutCompanyProfileData(data).then((res) => {
                if (res.message) {
                    queryClient.invalidateQueries({
                        queryKey: ["currentCompany"],
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
        data.append("id", currentCompany.id);

        const res = await ApiPostCompanyAvatar(data);

        if (res.path) {
            setAvatarUrl(res.path);
            setAvatarError("");
        } else setAvatarError("Аватар не загрузился");
    };

    const onSubmitProfileEdit = async (e) => {
        e.preventDefault();

        let error = false;

        if (companyName.length > 0) {
            setCompanyNameError("");

            if (companyName.length < 30) setCompanyNameError("");
            else {
                setCompanyNameError("Название компании слишком длинное");
                error = true;
            }
        } else {
            setCompanyNameError("Введите название компании");
            error = true;
        }

        if (description.length > 0) {
            setDescriptionError("");

            if (description.length < 255) setDescriptionError("");
            else {
                setDescriptionError("Описание компании слишком длинное");
                error = true;
            }
        } else {
            setDescriptionError("Введите описание компании");
            error = true;
        }

        if (phone.length < 15) setPhoneError("");
        else {
            setPhoneError("Номер телефона слишком длинный");
            error = true;
        }

        if (error) return;

        traineeProfileData.mutate({
            id: currentCompany.id,
            companyName: companyName,
            description: description,
            category: category,
            phone: phone,
            public: isCompanyPublic,
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
                        placeholder="Название компании"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                    ></input>
                    <div className="profileError">{companyNameError}</div>

                    <textarea
                        name="profileDescription"
                        placeholder="Описание компании"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <div className="profileError">{descriptionError}</div>

                    <input
                        name="profilePhone"
                        type="text"
                        placeholder="Телефон компании"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    ></input>
                    <div className="profileError">{phoneError}</div>

                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="none">Не указывать сферу деятельности</option>
                        <option value="it">Информационные технологии</option>
                        <option value="banking">Банковская сфера</option>
                        <option value="medicine">Медицина</option>
                        <option value="building">Строительство</option>
                        <option value="education">Образование</option>
                    </select>

                    <fieldset>
                        <legend>Отображать компанию студентам?</legend>

                        <label>
                            <input
                                type="radio"
                                name="isCompanyPublic"
                                checked={isCompanyPublic === false}
                                onChange={(e) => setIsCompanyPublic(false)}
                            />
                            Нет
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="isCompanyPublic"
                                checked={isCompanyPublic === true}
                                onChange={(e) => setIsCompanyPublic(true)}
                            />
                            Да
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

CompanyProfileCardSettings.propTypes = {
    currentCompany: PropTypes.object,
    toggleEdit: PropTypes.func,
};

export default CompanyProfileCardSettings;
