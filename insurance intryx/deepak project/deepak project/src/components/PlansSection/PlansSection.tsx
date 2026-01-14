import React, { useEffect } from 'react';
import './PlansSection.scss';
import { sr, revealSettings } from '../../utils/scrollReveal';

// Plan Images (Matched from reference)
import lifeImg from '../../assets/kid-playing-with-paper-plane-1.png';
import healthImg from '../../assets/kid-playing-with-paper-plane-2.png';
import vehicleImg from '../../assets/kid-playing-with-paper-plane-1-2.png';
import propertyImg from '../../assets/kid-playing-with-paper-plane-1-4.jpeg';
import businessImg from '../../assets/kid-playing-with-paper-plane-1-3.jpeg';
import travelImg from '../../assets/kid-playing-with-paper-plane-1-6.png';

const plans = [
    {
        title: 'Life Insurance',
        desc: 'Financial protection for your family during unexpected life events',
        icon: '👥',
        image: lifeImg
    },
    {
        title: 'Health Insurance',
        desc: 'Covers hospitalization, emergencies, and major medical expenses',
        icon: '❤️',
        image: healthImg
    },
    {
        title: 'Vehicle Insurance',
        desc: 'Protection for your car or bike from accidents, theft, and damages',
        icon: '🚗',
        image: vehicleImg
    },
    {
        title: 'Property Insurance',
        desc: 'Safeguards your home and belongings from fire, theft, and natural disasters',
        icon: '🏠',
        image: propertyImg
    },
    {
        title: 'Business Insurance',
        desc: 'Coverage for your shop, office, equipment, and business liabilities',
        icon: '💼',
        image: businessImg
    },
    {
        title: 'Travel Insurance',
        desc: 'Covers medical emergencies, trip delays, and lost baggage while traveling',
        icon: '✈️',
        image: travelImg
    }
];

const PlanCard: React.FC<{ plan: typeof plans[0]; }> = ({ plan }) => {
    return (
        <div className="plan-card">
            <div className="plan-card__icon">{plan.icon}</div>
            <h3 className="plan-card__title">{plan.title}</h3>
            <p className="plan-card__desc">{plan.desc}</p>
            <div className="plan-card__image-wrapper">
                <div className="overlay"></div>
                <img src={plan.image} alt={plan.title} className="plan-card__image" />
            </div>
        </div>
    );
};

const PlansSection: React.FC = () => {
    useEffect(() => {
        sr.reveal('.plans-header', revealSettings(0));
        sr.reveal('.plan-card', {
            ...revealSettings(),
            interval: 200, // Stagger animations
        });
    }, []);

    return (
        <section className="plans-section" id="plans">
            <div className="plans-container">
                <div className="plans-header">
                    <h2>Insurance Plans</h2>
                    <p>
                        Reliable and affordable insurance solutions designed to keep you and
                        your loved ones secure—without confusion or hidden charges.
                    </p>
                </div>

                <div className="plans-grid">
                    {plans.map((plan, index) => (
                        <PlanCard key={index} plan={plan} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PlansSection;

