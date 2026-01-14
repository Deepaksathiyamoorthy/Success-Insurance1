import React, { useEffect } from 'react';
import './AboutSection.scss';
import groupImage from '../../assets/kid-playing-with-paper-plane-2-2.png';
import { sr, revealSettings } from '../../utils/scrollReveal';

const AboutSection: React.FC = () => {
    useEffect(() => {
        sr.reveal('.about-content', {
            ...revealSettings(),
            origin: 'left',
            distance: '100px',
        });

        sr.reveal('.about-image-wrapper', {
            ...revealSettings(),
            origin: 'right',
            distance: '100px',
        });
    }, []);

    return (
        <section className="about-section" id="about">
            <div className="about-container">
                <div className="about-content">
                    {/* Logos strip placeholder if needed, skipping for clean look as per design */}

                    <h2 className="about-title">About Success <br />Insurance</h2>
                    <p className="about-desc">
                        Success Insurance offers simple, clear, and affordable insurance services
                        backed by trusted partners like LIC, Star Health, and Chola Mandalam. Our
                        mission is to protect what matters most with reliable guidance
                        and complete transparency.
                    </p>

                    <div className="about-stats">
                        <div className="stat">
                            <h3>100+</h3>
                            <p>Lives <br />Secured</p>
                        </div>
                        <div className="stat">
                            <h3>2000+</h3>
                            <p>Customers <br />Protected</p>
                        </div>
                        <div className="stat">
                            <h3>80+</h3>
                            <p>Claims <br />Supported</p>
                        </div>
                    </div>
                </div>

                <div className="about-image-wrapper">
                    <img src={groupImage} alt="Happy Group" className="about-image" />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

