import React, { useEffect } from 'react';
import './AwardsSection.scss';
import trophy1 from '../../assets/assets/Frame 1321 (1).png';
import trophy2 from '../../assets/assets/Frame 1321 (2).png';
import trophy3 from '../../assets/assets/Frame 1321.png';
import { sr, revealSettings } from '../../utils/scrollReveal';

const AwardsSection: React.FC = () => {
    useEffect(() => {
        sr.reveal('.awards__header', revealSettings(0));
        sr.reveal('.awards__card', { ...revealSettings(200), interval: 200 });
    }, []);

    const awards = [
        {
            image: trophy1,
            company: 'Life Insurance Corporation of India (LIC)',
            title: 'Sixer Trophy',
            description: '"Awarded for outstanding sales performance and consistent excellence in life insurance services."'
        },
        {
            image: trophy2,
            company: 'Star Health Insurance',
            title: 'Super Hero Award',
            description: '"Honored for remarkable contribution in health insurance outreach and customer service excellence."'
        },
        {
            image: trophy3,
            company: 'Life Insurance Corporation of India (LIC)',
            title: 'LIC Corporate Trophy',
            description: '"Recognized for exceptional corporate insurance solutions and long-term client trust."'
        }
    ];

    return (
        <section className="awards">
            <div className="awards__container">
                <div className="awards__header">
                    <h2>Awards & Recognitions</h2>
                    <p>Recognized by India's leading insurance providers for excellence, performance, and trust.</p>
                </div>

                <div className="awards__grid">
                    {awards.map((award, index) => (
                        <div key={index} className="awards__card">
                            <div className="awards__card-image">
                                <img src={award.image} alt={award.title} />
                            </div>
                            <div className="awards__card-content">
                                <h4>{award.company}</h4>
                                <h3>{award.title}</h3>
                                <p>{award.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AwardsSection;
