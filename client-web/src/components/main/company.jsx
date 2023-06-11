import React from "react";
import PropTypes from "prop-types";
import "./company.css";

const Company = ({ company }) => {
    return (
        <div className="companyPost">
            <h2> {company.companyName}</h2>
            {/* <img
                href={"http://localhost:8080" + company.avatar}
                alt="company-avatar"
            ></img> */}
            {company.companyDescription}
            <button className="btn">Отправить резюме</button>
        </div>
    );
};

Company.propTypes = {
    company: PropTypes.object,
};

export default Company;
