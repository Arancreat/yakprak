import React from "react";
import PropTypes from "prop-types";
import "./company.css";

const Company = ({ company }) => {
    return (
        <div className="companyPost">
            <div className="left">
                <h2> {company.companyName} </h2>
                {company.description}
            </div>
            <div className="right">
                <img
                    src={"http://localhost:8080" + company.avatar}
                    alt="company-avatar"
                />
                <button className="btn">Отправить резюме</button>
            </div>
        </div>
    );
};

Company.propTypes = {
    company: PropTypes.object,
};

export default Company;
