
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import styled from 'styled-components'
import CustomMap from 'components/CustomMap'
import DeliveryDetails from 'src/components/DeliveryDetails'
import { APIProvider } from '@vis.gl/react-google-maps'
const ContentWrapper = styled.div`
    position: relative; 
    width: 100%;
    height: 100vh;
`
const CheckoutPage = () => {
    return (
        <div className="checkout-page">
            <Header />
            <ContentWrapper>
                <DeliveryDetails/>

                <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                    <CustomMap />
                </APIProvider>
            </ContentWrapper>
            <Footer />
        </div>
    )
}

export default CheckoutPage
