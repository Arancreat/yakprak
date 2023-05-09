import "./header.css";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = ({ open }) => {
    return (
        <header>
            <div className="nav_wrap">
                <nav className="nav">
                    <Link to="/" className="site_title">
                        YakPrak
                    </Link>
                    <ul>
                        <li>
                            <Link to="/about">О нас</Link>
                        </li>
                        <li>
                            <button className="btn" onClick={open}>
                                Войти
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

Header.propTypes = {
    open: PropTypes.func,
};

export default Header;
