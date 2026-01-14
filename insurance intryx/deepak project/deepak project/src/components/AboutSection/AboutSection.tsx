import React, { useEffect } from 'react';
import './AboutSection.scss';
import founderImage from '../../assets/assets/WhatsApp Image 2026-01-13 at 11.14.12 AM.jpeg';
import licLogo from '../../assets/lic-india-seeklogo-2.png';
import starLogo from '../../assets/star-health-insurance-seeklogo-1.png';
import newIndiaLogo from '../../assets/the-new-india-assurance-co-ltd-seeklogo-1.png';
import cholaLogo from '../../assets/chola-ms-seeklogo-1.png';
import tataAiaLogo from '../../assets/assets/tata aia logo.png';
import { sr, revealSettings } from '../../utils/scrollReveal';



const AboutSection: React.FC = () => {
    useEffect(() => {
        sr.reveal('.about-header', revealSettings(0));
        sr.reveal('.about-col', { ...revealSettings(200), interval: 200 });
    }, []);



    return (
        <section className="about-section" id="about">
            <div className="about-container">
                <div className="about-header">
                    <h2>Founder's message</h2>
                    <p>Clear, Honest insurance solutions backed by Trusted partners.</p>
                </div>

                <div className="about-grid">
                    {/* Left Column: Intro Text + Logos */}
                    <div className="about-col text-col left">
                        <p>
                            As the founder, I've built Success Insurance Point on a simple belief: insurance isn't just a policy—it's peace of mind for families, businesses, and dreams across India. Drawing from years of navigating the complexities of consumer finance and risk management, I saw a gap in the market—a need for transparent, tech-savvy agents who truly listen and deliver tailored solutions, whether it's health coverage for your loved ones, asset protection for your growing business, or retirement security for your future.
                        </p>

                        <div className="intro-logos">
                            <div className="logo-row">
                                <div className="logo-box"><img src={licLogo} alt="LIC" /></div>
                                <div className="logo-box"><img src={starLogo} alt="Star Health" /></div>
                            </div>
                            <div className="logo-row">
                                <div className="logo-box"><img src={newIndiaLogo} alt="New India Assurance" /></div>
                                <div className="logo-box tata-aia"><img src={tataAiaLogo} alt="Tata AIA" /></div>
                            </div>
                            <div className="logo-box large"><img src={cholaLogo} alt="Chola MS" /></div>
                        </div>
                    </div>

                    {/* Center Column: Image + Stats */}
                    <div className="about-col center-col">
                        <div className="image-wrapper">
                            <div className="image-mask">
                                <img src={founderImage} alt="Founder" />
                            </div>
                        </div>
                        <div className="founder-info">
                            <h3 className="founder-name">C Kolandasamy</h3>
                            <p className="founder-title">Founder & Managing Director</p>
                        </div>
                    </div>

                    {/* Right Column: Expertise & Commitment text */}
                    <div className="about-col text-col right">
                        <h4>25+ Years of Proven Expertise</h4>
                        <p>
                            With over 25 years in the insurance sector—boasting a stellar 99.5% claim settlement success rate, having protected 10,000+ families through IRDAI-aligned processes and reforms like digital mandates—my mission centers on client triumph. This legacy exposes underinsurance risks: health crises, disasters, or volatility. Awareness drives smart choices to avert hardship and secure futures.
                        </p>

                        <h4>Our Commitment to You</h4>
                        <p>
                            Certified agents use analytics and mastery to simplify policies, analyze needs, and secure top coverage with swift settlements—mirroring industry highs of 99%+. Tailored for urban pros, rural ventures, and businesses in Tamil Nadu and India.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
