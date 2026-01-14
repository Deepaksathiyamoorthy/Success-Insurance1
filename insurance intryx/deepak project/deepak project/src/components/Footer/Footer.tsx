import React, { useEffect } from 'react';
import './Footer.scss';
import { sr, revealSettings } from '../../utils/scrollReveal';
import logo from '../../assets/Frame.png';

const Footer: React.FC = () => {
    useEffect(() => {
        sr.reveal('.footer__column', {
            ...revealSettings(),
            interval: 100, // Stagger columns
            origin: 'bottom',
        });

        sr.reveal('.footer__bottom', revealSettings(400));
    }, []);

    return (
        <footer className="footer" id="contact">
            <div className="footer__container">

                {/* Column 1: Brand */}
                <div className="footer__column brand-col">
                    <div className="footer__logo">
                        <img src={logo} alt="Success Insurance Point" />
                        <h3>Success <br /> Insurance Point</h3>
                    </div>
                    <p className="footer__desc">
                        We tailor our insurance plans to <br />
                        meet your specific needs
                    </p>
                </div>

                {/* Column 2: Company */}
                <div className="footer__column">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#about">Founder's Message</a></li>
                        <li><a href="#plans">Insurance Plans</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>

                {/* Column 3: Insurance Plans */}
                <div className="footer__column">
                    <h4>Insurance Plans</h4>
                    <ul>
                        <li><a href="#">Life Insurance</a></li>
                        <li><a href="#">Health Insurance</a></li>
                        <li><a href="#">Vehicle Insurance</a></li>
                        <li><a href="#">Business Insurance</a></li>
                        <li><a href="#">Property Insurance</a></li>
                        <li><a href="#">Travel Insurance</a></li>
                    </ul>
                </div>

                {/* Column 4: Contact */}
                <div className="footer__column">
                    <h4>Contact</h4>
                    <ul className="contact-list">
                        <li>+91 98427 18201</li>
                        <li>successinsurance@gmail.com</li>
                        <li>#916, PKS Building, Erode road, Perundurai - 638052</li>
                    </ul>
                </div>
            </div>

            <div className="footer__bottom">
                <p>Copyright © {new Date().getFullYear()} successinsurancepoint.</p>
                <p>All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;

