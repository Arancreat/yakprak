import Cookies from "js-cookie";
import "./header.css";
import React from "react";
import { Link } from "react-router-dom";

const TraineeHeader = () => {
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
                            <div className="dropdown">
                                <button className="dropbtn">Аккаунт</button>
                                <div className="dropdown-content">
                                    <Link to="/profile">Профиль</Link>
                                    <a
                                        onClick={() => {
                                            Cookies.remove("jwt");
                                            window.location.replace("/");
                                        }}
                                    >
                                        Выйти
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default TraineeHeader;
