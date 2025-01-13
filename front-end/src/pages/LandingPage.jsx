
import Header from '../components/Header'
import Banner from '../components/Banner'
import AboutUs from '../components/AboutUs'
import Services from '../components/Services'
import Products from '../components/Products'
import Footer from '../components/Footer'
import Schedule from '../components/Schedule'

const LandingPage = () => {
    return (
        <div className="landing-page">
            <Header />
            <Banner />
            <AboutUs />
            <Services />
            <Products />
            <Schedule />
            <Footer />
        </div>
    )
}

export default LandingPage
