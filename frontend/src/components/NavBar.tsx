import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <nav>
            <ul className="flex justify-center space-x-10">
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
        </nav>
    );
}

export default Navbar;