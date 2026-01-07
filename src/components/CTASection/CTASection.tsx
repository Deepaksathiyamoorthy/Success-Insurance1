import React, { useEffect } from 'react';
import './CTASection.scss';
import familyImage from '../../assets/kid-playing-with-paper-plane-2-3.png';
import { sr, revealSettings } from '../../utils/scrollReveal';

const CTASection: React.FC = () => {
    useEffect(() => {
        sr.reveal('.cta-image-wrapper', {
            ...revealSettings(),
            origin: 'left',
            distance: '100px',
        });

        sr.reveal('.cta-content', {
            ...revealSettings(),
            origin: 'right',
            distance: '100px',
        });
    }, []);

    return (
        <section className="cta-section">
            <div className="cta-container">
                <div className="cta-image-wrapper">
                    <img src={familyImage} alt="Happy Family" className="cta-image" />
                </div>

                <div className="cta-content">
                    <h2 className="cta-title">Don't wait for tomorrow, <br />insure yourself today.</h2>
                    <p className="cta-desc">
                        When you file a claim, you'll need to provide necessary documentation,
                        such as police reports or medical records. The insurance company.
                    </p>
                    <button className="cta-btn">Secure Your Family here</button>
                </div>
            </div>
        </section>
    );
};

export default CTASection;

