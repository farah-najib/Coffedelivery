import styled from 'styled-components'
import Logo from '../assets/logo1.png'
import Search from '../assets/search.svg'
import { useNavigate } from 'react-router-dom'
const NavbarContainer = styled.nav`
    padding: 16px 159px;
    position: relative;
`

const BrandContainer = styled.img`

`

const NavLinks = styled.div`
    display: flex;
    gap: 16px;
`

const CustomButton = styled.button`
    background-color: var(--green-600);
    border-radius: 8px;
    color: white;
    padding: 8px 16px;
`

const Navbar = () => {
     const navigate = useNavigate() // Initialize navigate function

     const handleSignInClick = () => {
         navigate('/signin') // Navigate to the Sign In page
     }
    return (
        <NavbarContainer className="navbar navbar-expand-lg">
            <div className="container">
                <a href="#home" className="navbar-brand">
                    <BrandContainer src={Logo}/>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <NavLinks className="navbar-nav ms-auto">
                        <a href="#features" className="nav-link">
                            Home
                        </a>
                        <a href="#pricing" className="nav-link">
                            About
                        </a>
                        <a href="#services" className="nav-link">
                            Services
                        </a>
                        <a href="#menu" className="nav-link">
                            Menu
                        </a>
                        <a href="#schedule" className="nav-link">
                            Schedule
                        </a>
                    </NavLinks>
                    <div>
                        <img
                            className="me-3"
                            src={Search}
                            alt="Search Icon"
                            style={{ width: '32px', height: '32px' }}
                        />
                        <CustomButton onClick={handleSignInClick}>
                            Search
                        </CustomButton>
                    </div>
                </div>
            </div>
        </NavbarContainer>
    )
}

export default Navbar
