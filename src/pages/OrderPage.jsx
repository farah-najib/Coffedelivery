import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import styled from 'styled-components'
import CustomMap from 'components/CustomMap'

import OrderDetails from 'src/components/OrderDetails'
import { APIProvider } from '@vis.gl/react-google-maps'
const ContentWrapper = styled.div`
    position: relative; /* This ensures child absolute elements stay within this section */
    width: 100%;
    height: 100vh; /* Adjust as needed */

    //padding: 50px;
`
const OrderPage = () => {
    return (
        <div className="checkout-page">
            <Header />
            <ContentWrapper>
                <OrderDetails />

                <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                    <CustomMap />
                </APIProvider>
            </ContentWrapper>
            <Footer />
        </div>
    )
}

export default OrderPage
