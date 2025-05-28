import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import OurProducts from 'components/OurProducts/OurProducts'
import Popular from 'src/components/Popular'

import Carousel from 'src/components/Carousel'

const ProductsPage = () => {
    return (
        <div className="landing-page">
            <Header />
            <Carousel/>
            <Popular/>
            <OurProducts />
            <Footer />
        </div>
    )
}

export default ProductsPage
