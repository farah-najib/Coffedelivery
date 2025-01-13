import GlobalStyles from './styles/ GlobalStyles'
//import './app.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/LandingPage'

function App() {


  return (
      <>
          <GlobalStyles />
          <Router>
              <Routes>
                  <Route path="/" element={<HomePage />} />
              </Routes>
          </Router>
      </>
  )
}

export default App
