import React, { useState } from "react";
import PropTypes from "prop-types";
import { ApiSendResume } from "../../../services/sendedResume";
import "./company.css";

const Company = ({ company, resumeId }) => {
    const [buttonState, setButtonState] = useState(false);

    const handleOnClick = () => {
        setButtonState(true);
        ApiSendResume({companyId: company.id, resumeId: resumeId})
    };

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
                {buttonState ? (
                    <button className="btn" disabled={true}>
                        Резюме отправлено
                    </button>
                ) : (
                    <button className="btn" onClick={(e) => handleOnClick()}>
                        Отправить резюме
                    </button>
                )}
            </div>
        </div>
    );
};

Company.propTypes = {
    company: PropTypes.object,
    resumeId: PropTypes.string,
};

export default Company;
