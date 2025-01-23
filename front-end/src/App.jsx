//import GlobalStyles from ' styles/ GlobalStyles'
//import ' app.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from 'pages/LandingPage'
import SignInPage from 'pages/LoginFlow'
import styled from 'styled-components'
import GlobalStyles from './styles/ GlobalStyles'



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
                    <Route path="/signin" element={<SignInPage />} />
                </Routes>
            </Router>
        </Application>
    )
}

export default App
