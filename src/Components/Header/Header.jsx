import { Link, NavLink } from "react-router-dom";
import './Header.css';
const Header = () => {

    const menu = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/donation'>Donation</NavLink></li>
        <li><NavLink to='/statistics'>Statistics</NavLink></li>
    </>
    const logo = '/src/assets/Logo.png'
    return (
        <div className="navbar bg-base-100 mb-16 w-4/5 mx-auto">
            <div className="flex-1">
                <Link to='/' className="text-xl">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu-horizontal px-1">
                    {menu}
                </ul>
            </div>
        </div>
    );
};

export default Header;
