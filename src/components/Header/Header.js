import './Header.css'
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';

function Header() {
    const menuItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/service" },
        { name: "Page", href: "" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header>
            <div className="container">
                <div className="menu">

                    <nav>
                        <div className="logo">
                            <Link to="/">
                                <img src="./assets/img/logo.png" alt="Project Logo" />
                            </Link>
                        </div>
                        <ul>
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.href}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="btnsHeader">
                        <a href="">
                            <img src="./assets/img/phone.svg" alt="phone" />
                            +1 (333) 000-0000
                        </a>
                        <Button btnContent="Get Started" />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
