import React, { useState } from 'react';
import './Header.scss';
import logo from '../../assets/Frame.png';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <img src={logo} alt="Success Insurance Logo" />
                    Success<span>Insurance</span>
                </div>

                <nav className={`header__nav ${isMenuOpen ? 'open' : ''}`}>
                    <a href="#" className="header__link">Home</a>
                    <div className="header__dropdown-container">
                        <a href="#plans" className="header__link header__link--dropdown">
                            Plans ▾
                        </a>
                        <div className="header__dropdown-menu">
                            <a href="#individual-plans">Individual Plans</a>
                            <a href="#family-plans">Family Plans</a>
                            <a href="#corporate-plans">Corporate Plans</a>
                        </div>
                    </div>
                    <a href="#about" className="header__link">About Us</a>
                    <a href="#testimonials" className="header__link">Testimonials</a>
                    <a href="#contact" className="header__link">Contact</a>
                </nav>

                <div className="header__actions">
                    <button className="header__cta">Buy Insurance here</button>
                    <button className="header__toggle" onClick={toggleMenu}>
                        <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;

