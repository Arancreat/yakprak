import React from "react";
import PropTypes from "prop-types";
import "./profileCard.css";
import { useNavigate } from "react-router-dom";

const TraineeProfileCard = ({ currentUser, toggleEdit }) => {
    const navigate = useNavigate();

    const navigateToResume = () => {
        navigate("/resume");
    };

    const dateOptions = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        timezone: "UTC",
    };

    return (
        <div className="profile">
            <h2>
                {currentUser?.lastName} {currentUser?.firstName}{" "}
                {currentUser?.patronymic}
            </h2>
            <div className="profileCard">
                <div className="column">
                    <div>Почта: {currentUser?.email}</div>
                    <div>
                        {currentUser?.phone == ""
                            ? null
                            : "Телефон: " + currentUser?.phone}
                    </div>
                    <div>
                        {currentUser?.birthdate
                            ? "Дата рождения: " +
                              new Date(currentUser?.birthdate).toLocaleString(
                                  "ru",
                                  dateOptions
                              )
                            : null}
                    </div>
                    <div>
                        {currentUser?.gender == "unknown"
                            ? null
                            : currentUser?.gender == "male"
                            ? "Пол: Мужской"
                            : "Пол: Женский"}
                    </div>

                    <div className="createdAt">
                        На сайте с{" "}
                        {new Date(currentUser?.createdAt).toLocaleString(
                            "ru",
                            dateOptions
                        )}
                    </div>
                </div>
                <div className="column">
                    <img
                        className="avatar"
                        src={"http://localhost:8080" + currentUser?.avatar}
                        alt="avatar"
                    />
                    <div className="buttons">
                        <button className="btn" onClick={toggleEdit}>
                            Настроить профиль
                        </button>

                        <button className="btn" onClick={navigateToResume}>
                            Заполнить резюме
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

TraineeProfileCard.propTypes = {
    currentUser: PropTypes.object,
    toggleEdit: PropTypes.func,
};

export default TraineeProfileCard;
