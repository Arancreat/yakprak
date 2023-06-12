import "./header.css";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import GuestHeader from "./guestHeader";
import TraineeHeader from "./traineeHeader";
import CompanyHeader from "./companyHeader";


const Header = ({ jwtCookie, roleCookie, open }) => {
    return (
        <>
            {jwtCookie && roleCookie ? (
                roleCookie == "trainee"
                ? <TraineeHeader />
                : <CompanyHeader />
            ) : (
                <GuestHeader
                    open={open}
                />
            )}
        </>
    );
};

Header.propTypes = {
    open: PropTypes.func,
    jwtCookie: PropTypes.string,
    roleCookie: PropTypes.string
};

export default Header;
