import React, { useEffect } from 'react';
import './FeaturesSection.scss';
import featureImage from '../../assets/kid-playing-with-paper-plane-2.png';
import { sr, revealSettings } from '../../utils/scrollReveal';

const FeaturesSection: React.FC = () => {
    useEffect(() => {
        // Content slides in from left
        sr.reveal('.features-content', {
            ...revealSettings(),
            origin: 'left',
            distance: '100px',
        });

        // Image slides in from right
        sr.reveal('.features-image-wrapper', {
            ...revealSettings(),
            origin: 'right',
            distance: '100px',
        });
    }, []);

    return (
        <section className="features-section">
            <div className="features-container">

                <div className="features-content">
                    <h2 className="features-title">Brief explanations of <br />each feature</h2>
                    <p className="features-desc">
                        Life is full of uncertainties. But with the safeguard your loved ones
                        and your financial comprehensive are designed provide peace of
                        mind throws your way.
                    </p>

                    <ul className="features-list">
                        <li>
                            <span className="check-icon">✓</span>
                            24/7 Customer support
                        </li>
                        <li>
                            <span className="check-icon">✓</span>
                            Quick & Hassle-Free Claim Processing
                        </li>
                        <li>
                            <span className="check-icon">✓</span>
                            Customizable Coverage Options
                        </li>
                        <li>
                            <span className="check-icon">✓</span>
                            Transparent Policy Guidance
                        </li>
                    </ul>
                </div>

                <div className="features-image-wrapper">
                    <img src={featureImage} alt="Elderly Care" className="features-image" />

                    <div className="feature-pills">
                        <div className="pill">
                            <div className="pill-icon clock">🕒</div>
                            <div className="pill-text">24/7 Customer Support</div>
                        </div>
                        <div className="pill">
                            <div className="pill-icon clip">📋</div>
                            <div className="pill-text">Quick Claim Processing</div>
                        </div>
                        <div className="pill">
                            <div className="pill-icon stack">📄</div>
                            <div className="pill-text">Customizable Coverage</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FeaturesSection;

