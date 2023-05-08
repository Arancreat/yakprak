import Link from "next/link";
import styles from "./header.css";
import Button from "@/components/button";

const Header = () => {
    return (
        <header>
            <div className="nav_wrap">
                <nav className="nav">
                    <Link href="/" className="site_title">
                        YakPrak
                    </Link>

                    <ul>
                        <li>
                            <Link href="/about">О нас</Link>
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
