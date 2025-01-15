import GlobalStyles from './styles/ GlobalStyles'
//import './app.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/LandingPage'
import SignInPage from './pages/LoginFlow'
function App() {


  return (
      <>
          <GlobalStyles />
          <Router>
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/signin" element={<SignInPage />} />
              </Routes>
          </Router>
      </>
  )
}

export default App
