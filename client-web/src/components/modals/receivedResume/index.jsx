import "../modal.css";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import UserDetails from "./userDetails"
import ResumeDetails from "./resumeDetails"
import { useQuery } from "@tanstack/react-query";
import { ApiGetResume } from "../../../services/resume";

const ResumeModal = ({ open, onClose, resumeId, companyId }) => {
    useEffect(() => {
        if (open) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "unset";
    }, [open]);

    if (!open) return null;

    return (
        <div onClick={onClose} className="modalOverlay">
            <div
                onClick={(e) => {
                    e.stopPropagation();
                }}
                className="modalContainer"
            >
                <p onClick={onClose} className="modalCloseBtn">
                    X
                </p>
                <div className="post">
                    <UserDetails userId={resumeId} />
                    <ResumeDetails resumeId={resumeId} />
                </div>
            </div>
        </div>
    );
};

ResumeModal.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    resumeId: PropTypes.string,
    companyId: PropTypes.string,
};

export default ResumeModal;
