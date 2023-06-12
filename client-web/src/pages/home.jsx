import React from "react";
import PropTypes from "prop-types";
import CompanyMockList from "../components/home/companyList/companyMockList";
import CompanyList from "../components/home/companyList";
import Dashboard from "../components/home/dashboard";
import Landing from "../components/home/landing";

const Home = ({ jwtCookie, roleCookie, open }) => {
    return (
        <>
            {jwtCookie ? (
                roleCookie == "trainee" ? (
                    <CompanyList />
                ) : (
                    <Dashboard />
                )
            ) : (
                <Landing open={open} />
            )}
        </>
    );
};

Home.propTypes = {
    open: PropTypes.func,
    jwtCookie: PropTypes.string,
    roleCookie: PropTypes.string,
};

export default Home;
