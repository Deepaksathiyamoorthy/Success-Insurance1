import { useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { sr, revealSettings } from '../../utils/scrollReveal';
import './NewPage.scss';

// Import Assets
import headerBg from '../../assets/assets/new-page-header.png';
import section1Img from '../../assets/assets/Business Handshake.png'; // Updated to Business Handshake
import section2Img from '../../assets/assets/team-meeting.png'; // 1-2 (Updated)
import section3Img from '../../assets/assets/mechanical-engineer-assembling-engine-2-2.png'; // 3rd
import section4Img from '../../assets/assets/mechanical-engineer-assembling-engine-2-3.png'; // 4th
import section5Img from '../../assets/assets/mechanical-engineer-assembling-engine-2-4.png'; // 5th

const NewPage = () => {

    useEffect(() => {
        // Header Content - Fade in from top
        sr.reveal('.header-content h1', revealSettings(0));
        sr.reveal('.header-content p', revealSettings(200));
        sr.reveal('.apply-button', revealSettings(400));

        // Feature Sections - Alternating (Left/Right logic is handled by origin in CSS or just defaulting to bottom/fade for cleaner look, 
        // but lets try to be dynamic if possible or just consistent 'bottom' reveal for simplicity and elegance)
        // Actually, let's target the text and image contents specifically for better effect.

        // Text Content
        sr.reveal('.feature-section .text-content', {
            ...revealSettings(),
            origin: 'bottom',
            distance: '30px',
            interval: 200
        });

        // Image Content
        sr.reveal('.feature-section .image-content', {
            ...revealSettings(),
            origin: 'bottom',
            distance: '30px',
            delay: 200
        });

        // CTA Section
        sr.reveal('.cta-card', {
            ...revealSettings(),
            origin: 'bottom',
            scale: 0.9
        });

    }, []);

    return (
        <div className="new-page">
            <Header />
            <header className="page-header" style={{ backgroundImage: `url(${headerBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="header-content">
                    <h1>Secure your financial future with flexible insurance sales.</h1>
                    <p>Leverage our 25+ years of expertise for immediate success.</p>
                    <button
                        className="apply-button"
                        onClick={() => window.open('https://wa.me/919842718201?text=Hello%20I%20need%20details', '_blank')}
                    >
                        Apply Now
                    </button>
                </div>
            </header>

            <div className="page-content">
                {/* Section 1: Earn Extra Income */}
                <section className="feature-section">
                    <div className="text-content">
                        <div className="icon-placeholder">
                            <div className="blue-icon wallet-icon"></div>
                        </div>
                        <h2>Earn Extra Income</h2>

                        <p className="description">
                            Transform your network into steady revenue. Partner with us to sell trusted policies and enjoy competitive commissions—up to 30-40% on premiums—while building a flexible side hustle or full-time career
                        </p>
                        <ul className="benefits-list">
                            <li>
                                <span className="check-icon">✔</span> Competitive Commission Rates
                            </li>
                            <li>
                                <span className="check-icon">✔</span> Monthly and Quarterly Incentives
                            </li>
                        </ul>
                    </div>
                    <div className="image-content">
                        <div className="image-placeholder" style={{ backgroundImage: `url(${section1Img})` }}></div>
                    </div>
                </section>

                {/* Section 2: Create Job Opportunities */}
                <section className="feature-section reverse-layout">
                    <div className="image-content">
                        <div className="image-placeholder" style={{ backgroundImage: `url(${section2Img})` }}></div>
                    </div>
                    <div className="text-content">
                        <div className="icon-placeholder">
                            <div className="blue-icon briefcase-icon"></div>
                        </div>
                        <h2>Create Job Opportunities</h2>

                        <p className="description">
                            Unlock your potential for monumental growth and leadership. We provide the platform for you to scale your career, build high-performing teams, and transition into significant leadership roles within the industry.
                        </p>
                        <ul className="benefits-list">
                            <li>
                                <span className="check-icon">✔</span> Team Building & Leadership Growth
                            </li>
                            <li>
                                <span className="check-icon">✔</span> End-to-End Recruitment Support
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Section 3: Club Membership Benefit */}
                <section className="feature-section">
                    <div className="text-content">
                        <div className="icon-placeholder">
                            <div className="blue-icon trophy-icon"></div>
                        </div>
                        <h2>Club Membership Benefit</h2>

                        <p className="description">
                            Experience the prestige of our exclusive agents’ club. Gain access to elite networking events and status-driven perks that recognize your dedication and provide you with unique privileges within our community.
                        </p>
                        <ul className="benefits-list">
                            <li>
                                <span className="check-icon">✔</span> Priority Leads & Exclusive Networking
                            </li>
                            <li>
                                <span className="check-icon">✔</span> Performance Rewards & Member Privileges
                            </li>
                        </ul>
                    </div>
                    <div className="image-content">
                        <div className="image-placeholder" style={{ backgroundImage: `url(${section3Img})` }}></div>
                    </div>
                </section>

                {/* Section 4: Enjoy Foreign Tours */}
                <section className="feature-section reverse-layout">
                    <div className="image-content">
                        <div className="image-placeholder" style={{ backgroundImage: `url(${section4Img})` }}></div>
                    </div>
                    <div className="text-content">
                        <div className="icon-placeholder">
                            <div className="blue-icon plane-icon"></div>
                        </div>
                        <h2>Enjoy Foreign Tours</h2>

                        <p className="description">
                            Fuel your motivation with extraordinary travel rewards. Our top performers are celebrated with annual international tours, offering unforgettable experiences as a tribute to your exceptional achievements.
                        </p>
                        <ul className="benefits-list">
                            <li>
                                <span className="check-icon">✔</span> International Performance Rewards
                            </li>
                            <li>
                                <span className="check-icon">✔</span> Annual Achievement-Based Travel
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Section 5: Participate in Skill Development Meetings */}
                <section className="feature-section">
                    <div className="text-content">
                        <div className="icon-placeholder">
                            <div className="blue-icon graduation-icon"></div>
                        </div>
                        <h2>Participate in Skill Development Meetings</h2>

                        <p className="description">
                            Elevate your professionalism through continuous learning. Our skill development sessions ensure you stay ahead with the latest IRDAI compliance standards and mastering advisory techniques for client success.
                        </p>
                        <ul className="benefits-list">
                            <li>
                                <span className="check-icon">✔</span> Sales & Advisory Skill Training
                            </li>
                            <li>
                                <span className="check-icon">✔</span> IRDAI Updates & Digital Tools
                            </li>
                        </ul>
                    </div>
                    <div className="image-content">
                        <div className="image-placeholder" style={{ backgroundImage: `url(${section5Img})` }}></div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="cta-section">
                    <div className="cta-card">
                        <h2>Ready to start your journey?</h2>
                        <p>Join 10,000+ Successful agents who have transformed their careers with Success Insurance Point.<br />Your future starts today.</p>
                        <button
                            className="cta-button"
                            onClick={() => window.open('https://wa.me/919842718201?text=Hello%20I%20need%20details', '_blank')}
                        >
                            Join Today & Apply Now
                        </button>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    )
}

export default NewPage
