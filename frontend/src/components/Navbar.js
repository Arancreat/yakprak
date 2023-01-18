import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav_wrap">
      <nav className="nav">
        <Link to="/" className="site_title">
          YakPrak
        </Link>

        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/sign_in">Sign in</Link>
          </li>
        </ul>
      </nav>
    </nav>
  );
}
