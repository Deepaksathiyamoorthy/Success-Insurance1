import React, { useEffect } from 'react';
import './Testimonials.scss';
import { sr, revealSettings } from '../../utils/scrollReveal';

// Assets for collage and reviewer
import reviewerImg from '../../assets/ellipse-1.png'; // Using as Priya Menon
import collageImg1 from '../../assets/Frame 1059.png';
import collageImg2 from '../../assets/Frame 1060.png';
import collageImg3 from '../../assets/Frame 1058.png';
import collageImg4 from '../../assets/Frame 1057.png';
import collageImg5 from '../../assets/Frame 1056.png';

const Testimonials: React.FC = () => {
    useEffect(() => {
        sr.reveal('.testimonials-header', revealSettings(0));
        sr.reveal('.testimonials-content', revealSettings(200));
        sr.reveal('.testimonials-collage', revealSettings(400));
    }, []);

    return (
        <section className="testimonials" id="testimonials">
            <div className="testimonials-container">
                <div className="testimonials-header">
                    <h2 className="section-title">What Our <br /> Customers Say</h2>
                    <p className="section-subtitle">
                        Real stories from people who trust Success Insurance for
                        their protection.Insurance for their protection.
                    </p>
                </div>

                <div className="testimonials-body">
                    {/* Left Side: Content */}
                    <div className="testimonials-content">
                        <div className="testimonial-card">
                            <div className="stars">★★★★★</div>
                            <p className="quote">
                                "Success Insurance made choosing the right policy effortless.
                                Their guidance was clear, honest, and extremely helpful"
                            </p>

                            <div className="reviewer">
                                <img src={reviewerImg} alt="Priya Menon" className="reviewer-img" />
                                <div className="reviewer-info">
                                    <strong>Priya Menon</strong>
                                    <span>Customer, Health Insurance Plan</span>
                                </div>
                            </div>

                            <div className="nav-buttons">
                                <button className="nav-btn prev">←</button>
                                <button className="nav-btn next">→</button>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Collage */}
                    <div className="testimonials-collage">
                        <div className="collage-grid">
                            <div className="grid-item item-1">
                                <img src={collageImg1} alt="Customer 1" />
                            </div>
                            <div className="grid-item item-2">
                                <img src={collageImg2} alt="Customer 2" />
                            </div>
                            <div className="grid-item item-3">
                                <img src={collageImg3} alt="Customer 3" />
                            </div>
                            <div className="grid-item item-4">
                                <img src={collageImg4} alt="Customer 4" />
                            </div>
                            <div className="grid-item item-5">
                                <img src={collageImg5} alt="Customer 5" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

