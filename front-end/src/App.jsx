//import GlobalStyles from ' styles/ GlobalStyles'
//import ' app.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from 'pages/LandingPage'
import SignInPage from 'pages/LoginFlow'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle``
function App() {
    return (
        <div className="app">
            <GlobalStyle />
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/signin" element={<SignInPage />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
