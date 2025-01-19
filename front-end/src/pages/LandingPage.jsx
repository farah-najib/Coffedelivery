import Header from 'components/Header/Header'
import Banner from 'src/components/Home/Home'
import AboutUs from 'components/AboutUs/AboutUs'
import Services from 'components/Services/Services'
import Products from 'components/Products/Products'
import Footer from 'components/Footer/Footer'
import Schedule from 'components/Schedule/Schedule'
import Choice from 'components/Choice/Choice'
import InstaComp from 'components/InstaComp/InstaComp'
import HowToOrder from 'components/HowToOrder/HowToOrder'

const LandingPage = () => {
    return (
        <div className="landing-page">
            <Header />
            <Banner />
            <AboutUs />
            <Services />
            <HowToOrder />
            <Choice />
            <InstaComp />
            <Products />
            <Schedule />
            <Footer />
        </div>
    )
}

export default LandingPage
