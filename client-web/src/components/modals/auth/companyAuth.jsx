import React from "react";
import PropTypes from "prop-types";
import CompanyLogin from "./companyLogin";
import CompanySignup from "./companySignup";

const CompanyAuth = ({ signup, onClose, onChangeAuth }) => {
    return (
        <>
            {signup ? (
                <CompanySignup
                    onChangeAuth={() => onChangeAuth()}
                    onClose={onClose}
                />
            ) : (
                <CompanyLogin
                    onChangeAuth={() => onChangeAuth()}
                    onClose={onClose}
                />
            )}
        </>
    );
};

CompanyAuth.propTypes = {
    signup: PropTypes.bool,
    onClose: PropTypes.func,
    onChangeAuth: PropTypes.func,
};

export default CompanyAuth;
