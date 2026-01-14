import React from 'react';
import './PartnersMarquee.scss';

// Import Partner Logos
import licLogo from '../../assets/lic-india-seeklogo-2.png';
import starLogo from '../../assets/star-health-insurance-seeklogo-1.png';
import newIndiaLogo from '../../assets/the-new-india-assurance-co-ltd-seeklogo-1.png';
import cholaLogo from '../../assets/chola-ms-seeklogo-1.png';
import tataAiaLogo from '../../assets/assets/tata aia logo.png';

const partners = [
    { name: 'LIC', logo: licLogo },
    { name: 'Star Health', logo: starLogo },
    { name: 'New India Assurance', logo: newIndiaLogo },
    { name: 'Tata AIA', logo: tataAiaLogo },
    { name: 'Chola MS', logo: cholaLogo },
    { name: 'LIC', logo: licLogo },
    { name: 'Star Health', logo: starLogo },
    { name: 'New India Assurance', logo: newIndiaLogo },
    { name: 'Tata AIA', logo: tataAiaLogo },
    { name: 'Chola MS', logo: cholaLogo },
];

const PartnersMarquee: React.FC = () => {
    return (
        <section className="partners-marquee">
            <div className="marquee-container">
                <div className="track">
                    {/* Double the content for seamless loop */}
                    {[...partners, ...partners, ...partners].map((partner, index) => (
                        <div key={index} className={`partner-logo ${partner.name === 'Tata AIA' ? 'tata-aia' : ''}`}>
                            <img src={partner.logo} alt={partner.name} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnersMarquee;
