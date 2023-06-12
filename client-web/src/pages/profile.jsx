import React from "react";
import PropTypes from "prop-types";
import TraineeProfileComponent from "../components/profile/traineeProfile";
import CompanyProfileComponent from "../components/profile/companyProfile";

const Profile = ({ roleCookie }) => {
    return (
        <>
            {roleCookie == "company" ? (
                <CompanyProfileComponent />
            ) : (
                <TraineeProfileComponent />
            )}
        </>
    );
};

Profile.propTypes = {
    roleCookie: PropTypes.string,
};

export default Profile;
