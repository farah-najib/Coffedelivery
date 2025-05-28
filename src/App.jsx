//import GlobalStyles from ' styles/ GlobalStyles'
//import ' app.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from 'pages/LandingPage'
import LoginFlow from './pages/LoginPage/LoginPage'
import CheckoutPage from './pages/CheckoutPage'
import styled from 'styled-components'
import GlobalStyles from './styles/ GlobalStyles'
import OrderPage from './pages/OrderPage'
import ProductsPage from './pages/ProductsPage'

const Application = styled.div`
overflow:hidden;

`
function App() {
    return (
        <Application>
            <GlobalStyles />
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/signin" element={<LoginFlow />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/orders" element={<OrderPage />} />
                </Routes>
            </Router>
        </Application>
    )
}

export default App
