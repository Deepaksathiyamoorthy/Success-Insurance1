import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import AwardsSection from '../../components/AwardsSection/AwardsSection';
import PartnersMarquee from '../../components/PartnersMarquee/PartnersMarquee';
import PlansSection from '../../components/PlansSection/PlansSection';
import AboutSection from '../../components/AboutSection/AboutSection';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection';
import CTASection from '../../components/CTASection/CTASection';
import Testimonials from '../../components/Testimonials/Testimonials';
import Footer from '../../components/Footer/Footer';
import '../../App.scss'

const Home = () => {
    return (
        <div className="app">
            <Header />
            <main>
                <Hero />
                <PartnersMarquee />
                <AwardsSection />
                <PlansSection />
                <AboutSection />
                <FeaturesSection />
                <Testimonials />
                <CTASection />
            </main>
            <Footer />
        </div>
    )
}

export default Home
