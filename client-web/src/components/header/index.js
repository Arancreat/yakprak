import { Link } from "react-router-dom";
import styles from "./header.css";
import Button from "../button";

const Header = () => {
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
                            <Button text="Войти" />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
