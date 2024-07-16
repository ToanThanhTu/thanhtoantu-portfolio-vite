import { Link } from "react-router-dom";
import logo from "../assets/logo3t.png";

const Navbar: React.FC = () => {
    return (
        <div className="fixed w-full bg-primary-white">
            <nav className="flex h-14 items-center portfolio-width">
                <img src={logo} alt="3T logo" className="flex-none size-10" />
                <ul className="flex-auto flex justify-center space-x-14">
                    {[
                        ["About me", "/#about"],
                        ["Work", "/#work"],
                        ["Contact", "/#contact"],
                    ].map(([text, link]) => (
                        <li key={text}>
                            <Link to={link}>{text}</Link>
                        </li>
                    ))}
                </ul>
                <div>
                    <p>Weather Data</p>
                    <p>TO-DO</p>
                </div>
            </nav>
        </div>


    );
}

export default Navbar;