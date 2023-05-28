import React from "react";
import PropTypes from "prop-types";
import "./profile.css";

const ProfileComponent = ({ currentUser }) => {
    var dateOptions = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        timezone: "UTC",
    };

    return (
        <div className="profile">
            <div className="column">
                <h2>
                    {currentUser?.lastName} {currentUser?.firstName}{" "}
                    {currentUser?.patronymic}
                </h2>
                <div>
                    На сайте с{" "}
                    {new Date(currentUser?.createdAt).toLocaleString(
                        "ru",
                        dateOptions
                    )}
                </div>
                <div>
                    Пол:{" "}
                    {currentUser?.gender == "unknown"
                        ? "не указан"
                        : currentUser?.gender}
                </div>
                <div>Почта: {currentUser?.email}</div>
            </div>
            <div className="column">
                <img
                    className="avatar"
                    src={"http://localhost:8080" + currentUser?.avatar}
                    alt="avatar"
                />
                <button className="btn"> Настроить профиль</button>
                <button className="btn"> Создать резюме</button>
            </div>
        </div>
    );
};

ProfileComponent.propTypes = {
    currentUser: PropTypes.object,
};

export default ProfileComponent;
