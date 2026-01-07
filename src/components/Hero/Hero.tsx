import React, { useEffect } from 'react';
import './Hero.scss';
import familyBg from '../../assets/young-family-with-their-sons-home-having-fun-1.png';
import avatar1 from '../../assets/ellipse-1.png';
import avatar2 from '../../assets/ellipse-2.png';
import avatar3 from '../../assets/ellipse-3.png';
import { sr, revealSettings } from '../../utils/scrollReveal';

const Avatars = () => (
    <div className="hero__avatars">
        <img src={avatar1} alt="User 1" className="avatar" />
        <img src={avatar2} alt="User 2" className="avatar" />
        <img src={avatar3} alt="User 3" className="avatar" />
        <div className="avatar count">+</div>
    </div>
);

const Hero: React.FC = () => {
    useEffect(() => {
        sr.reveal('.hero__badge', revealSettings(0));
        sr.reveal('.hero__title', revealSettings(200));
        sr.reveal('.hero__description', revealSettings(400));
        sr.reveal('.hero__cta', revealSettings(600));
    }, []);

    return (
        <section className="hero" style={{ backgroundImage: `url(${familyBg})` }}>
            <div className="hero__overlay"></div>
            <div className="hero__container">

                <div className="hero__badge">
                    <Avatars />
                    <div className="hero__badge-text">
                        <strong>16K+ Users</strong>
                        <span>Lorem ipsum</span>
                    </div>
                </div>

                <h1 className="hero__title">
                    Secure Your Future with Trusted <br />
                    Insurance Solutions
                </h1>

                <p className="hero__description">
                    Reliable and affordable insurance solutions designed to keep you and your loved
                    ones secure—without confusion or hidden charges.
                </p>

                <div className="hero__actions">
                    <button className="hero__cta">
                        Talk to an Expert
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Hero;

