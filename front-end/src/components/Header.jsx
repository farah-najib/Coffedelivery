import styled from 'styled-components'
import Search from '../assets/search.svg'

const NavbarContainer = styled.nav`
    padding: 16px 159px;
    position: relative;
`

const BrandContainer = styled.div`
    .overlap-group {
        position: relative;
        width: 63px;
        height: 45px;
    }

    .text-wrapper-4 {
        position: absolute;
        width: 53px;
        top: 0;
        left: 5px;
        font-family: 'Dancing Script', Helvetica;
        font-weight: 700;
        color: var(--green-600);
        font-size: 23.5px;
        letter-spacing: 0;
        line-height: 30.6px;
    }

    .text-wrapper-5 {
        position: absolute;
        width: 63px;
        top: 30px;
        left: 0;
        font-family: 'Halant', Helvetica;
        font-weight: 300;
        color: var(--basetitle);
        font-size: 11.8px;
        letter-spacing: 2.83px;
        line-height: 15.3px;
    }
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
    return (
        <NavbarContainer className="navbar navbar-expand-lg">
            <div className="container">
                <a href="#home" className="navbar-brand">
                    <BrandContainer>
                        <div className="overlap-group">
                            <h1 className="text-wrapper-4">Coffee</h1>
                            <h1 className="text-wrapper-5">Delivery</h1>
                        </div>
                    </BrandContainer>
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
                        <CustomButton>Search</CustomButton>
                    </div>
                </div>
            </div>
        </NavbarContainer>
    )
}

export default Navbar