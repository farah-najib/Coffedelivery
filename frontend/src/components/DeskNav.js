import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import '../desknav.css'
function DeskNav() {
    return (
        <Navbar collapseOnSelect expand="lg" className="navbar">
            <Container>
                <Navbar.Brand href="#home">
                    <div className="overlap-group">
                        <h1 className="text-wrapper-4">Coffee</h1>
                        <h1 className="text-wrapper-5">Delivery</h1>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto navlinks">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#menu">Menu</Nav.Link>
                        <Nav.Link href="#schedule">Schedule</Nav.Link>
                    </Nav>
                    <img
                        className="iconoir-search"
                        src="https://c.animaapp.com/EXuBewV4/img/iconoir-search-3.svg"
                    />
                    <Button className="atom-primary-button">Search</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default DeskNav
