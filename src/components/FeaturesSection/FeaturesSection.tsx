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
                        and your financial comprehensive are designed to provide peace of
                        mind throws your way.
                    </p>
                    <button className="features-cta">Learn More</button>
                </div>

                <div className="features-image-wrapper">
                    <img src={featureImage} alt="Elderly Care" className="features-image" />

                    <div className="feature-pills">
                        <div className="pill">
                            <span className="icon">🕒</span> 24/7 Customer Support
                        </div>
                        <div className="pill">
                            <span className="icon">✅</span> Quick Claim Processing
                        </div>
                        <div className="pill">
                            <span className="icon">🛡️</span> Customizable Coverage
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FeaturesSection;

