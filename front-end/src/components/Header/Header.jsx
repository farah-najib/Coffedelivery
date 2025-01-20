
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {
    HeaderContainer,
    HeaderLogo,
    NavLinks,
    SigninButton,
    Link,
    MenuBtn
} from './Header.styles'

const navLinks = [
    { href: '#Home', label: 'Home' },
    { href: '#About', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#menu', label: 'Menu' },
    { href: '#schedule', label: 'Schedule' }
]
const Header = () => {
    const navigate = useNavigate() // Initialize navigate function

    const handleSignInClick = () => {
        navigate('/signin') // Navigate to the Sign In page
    }
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <HeaderContainer>
            <HeaderLogo href="#home" />
            <MenuBtn onClick={() => setMenuOpen(!menuOpen)}>
                <i className="fi fi-br-menu-burger"></i>
            </MenuBtn>
            <NavLinks show={menuOpen}>
                {navLinks.map((link, index) => (
                    <Link key={index}>
                        <a href={link.href}>{link.label}</a>
                    </Link>
                ))}
            </NavLinks>
            <div>
                <i className="fi fi-br-search"></i>
                <SigninButton onClick={handleSignInClick}>Sign in</SigninButton>
            </div>
        </HeaderContainer>
    )
}

export default Header
