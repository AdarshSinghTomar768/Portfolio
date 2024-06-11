import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="Nav-o">
            <h1 className='h1'>Adarsh Singh Tomar</h1>
            <ul className="NavList">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Education">Education</Link>
                </li>
                <li>
                    <Link to="/Skills">Skills</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;