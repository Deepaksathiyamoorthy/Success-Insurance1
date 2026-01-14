import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.scss';
import logo from '../../assets/Frame.png';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavigation = (sectionId: string) => {
        setIsMenuOpen(false); // Close menu on click
        if (location.pathname !== '/') {
            navigate('/');
            // Optional: timeout to allow navigation before scrolling could be added here if needed
            // For now, navigating to home is the priority.
            // A more complex solution would involve a context or URL param to trigger scroll on load.
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const handleHomeClick = () => {
        setIsMenuOpen(false);
        if (location.pathname !== '/') {
            navigate('/');
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    const handleBecomeAgentClick = () => {
        setIsMenuOpen(false);
        if (location.pathname !== '/new-page') {
            navigate('/new-page');
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo" onClick={handleHomeClick} style={{ cursor: 'pointer' }}>
                    <img src={logo} alt="Success Insurance Point Logo" />
                    Success<span>Insurance Point</span>
                </div>

                <nav className={`header__nav ${isMenuOpen ? 'open' : ''}`}>
                    <a onClick={handleHomeClick} className="header__link" style={{ cursor: 'pointer' }}>Home</a>
                    <a onClick={() => handleNavigation('plans')} className="header__link" style={{ cursor: 'pointer' }}>Plans</a>
                    <a onClick={() => handleNavigation('about')} className="header__link" style={{ cursor: 'pointer' }}>Founder's Message</a>
                    <a onClick={handleBecomeAgentClick} className="header__link" style={{ cursor: 'pointer' }}>Become an Agent</a>
                    <a onClick={() => handleNavigation('contact')} className="header__link" style={{ cursor: 'pointer' }}>Contact</a>
                </nav>

                <div className="header__actions">
                    <button
                        className="header__cta"
                        onClick={() => window.open('https://wa.me/919842718201?text=Hello%20I%20need%20details', '_blank')}
                    >
                        Buy Insurance
                    </button>
                    <button className="header__toggle" onClick={toggleMenu}>
                        <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;

