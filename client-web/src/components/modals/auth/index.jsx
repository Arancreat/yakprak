import "../modal.css";
import imagePlaceholder from "../../../media/img-placeholder.png";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Login from "./login";
import Signup from "./signup";

const AuthModal = ({ open, signup, onClose, onChangeAuth }) => {
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
                <img src={imagePlaceholder} alt="authPic" />
                <div className="modalRight">
                    <p onClick={onClose} className="modalCloseBtn">
                        X
                    </p>
                    {signup ? (
                        <Signup
                            onChangeAuth={() => onChangeAuth()}
                            onClose={onClose}
                        />
                    ) : (
                        <Login
                            onChangeAuth={() => onChangeAuth()}
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
