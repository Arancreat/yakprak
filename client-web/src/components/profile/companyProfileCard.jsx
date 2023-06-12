import React from "react";
import PropTypes from "prop-types";
import "./profileCard.css";

const CompanyProfileCard = ({ currentCompany, toggleEdit }) => {
    const dateOptions = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        timezone: "UTC",
    };

    const categories = (category) => {
        if (category == "it") return "Информационные технологии";
        if (category == "banking") return "Банковская сфера";
        if (category == "medicine") return "Медицина";
        if (category == "building") return "Строительство";
        if (category == "education") return "Образование";
    };

    return (
        <div className="profile">
            <h2>{currentCompany?.companyName}</h2>
            <div className="profileCard">
                <div className="column">
                    <div>Почта: {currentCompany?.email}</div>
                    <div>
                        {currentCompany?.phone == ""
                            ? null
                            : "Телефон: " + currentCompany?.phone}
                    </div>
                    <div>
                        {currentCompany?.description == ""
                            ? null
                            : "Описание: " + currentCompany?.description}
                    </div>
                    <div>
                        {currentCompany?.category == "none"
                            ? null
                            : "Сфера: " +
                              categories(currentCompany?.category)}
                    </div>

                    <div className="createdAt">
                        На сайте с{" "}
                        {new Date(currentCompany?.createdAt).toLocaleString(
                            "ru",
                            dateOptions
                        )}
                    </div>
                </div>
                <div className="column">
                    <img
                        className="avatar"
                        src={"http://localhost:8080" + currentCompany?.avatar}
                        alt="avatar"
                    />
                    <div className="buttons">
                        <button className="btn" onClick={toggleEdit}>
                            Настроить профиль
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

CompanyProfileCard.propTypes = {
    currentCompany: PropTypes.object,
    toggleEdit: PropTypes.func,
};

export default CompanyProfileCard;
