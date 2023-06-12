import "../modal.css";
import imagePlaceholder from "../../../media/img-placeholder.png";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TraineeAuth from "./traineeAuth";
import CompanyAuth from "./companyAuth";

const AuthModal = ({ open, signup, onClose, onChangeAuth }) => {
    const [activeTab, setActiveTab] = useState("student");

    useEffect(() => {
        if (open) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "unset";
    }, [open]);

    if (!open) return null;

    const OnClickStudentTab = () => {
        setActiveTab("student");
    };

    const OnClickCompanyTab = () => {
        setActiveTab("company");
    };

    return (
        <div onClick={onClose} className="modalOverlay">
            <div
                onClick={(e) => {
                    e.stopPropagation();
                }}
                className="modalContainer"
            >
                <img src={imagePlaceholder} alt="authPic" />
                <div className="modalRight">
                    <ul className="tabs">
                        <li
                            className={activeTab === "student" ? "active" : ""}
                            onClick={OnClickStudentTab}
                        >
                            Студент
                        </li>
                        <li
                            className={activeTab === "company" ? "active" : ""}
                            onClick={OnClickCompanyTab}
                        >
                            Компания
                        </li>
                    </ul>
                    <p onClick={onClose} className="modalCloseBtn">
                        X
                    </p>
                    {activeTab == "student" ? (
                        <TraineeAuth
                            signup={signup}
                            onChangeAuth={onChangeAuth}
                            onClose={onClose}
                        />
                    ) : (
                        <CompanyAuth
                            signup={signup}
                            onChangeAuth={onChangeAuth}
                            onClose={onClose}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

AuthModal.propTypes = {
    open: PropTypes.bool,
    signup: PropTypes.bool,
    onClose: PropTypes.func,
    onChangeAuth: PropTypes.func,
};

export default AuthModal;
