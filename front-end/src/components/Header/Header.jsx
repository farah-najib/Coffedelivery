
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {
    HeaderContainer,
    HeaderLogo,
    NavLinks,
    SigninButton,
    SearchInput,
    Link,
    MenuBtn,
    SearchWrapper,
    SearchIcon
} from './Header.styles'

const navLinks = [
    { href: '#Home', label: 'Home' },
    { href: '#About', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#menu', label: 'Menu' },
    { href: '#schedule', label: 'Schedule' }
]
const Header = ({type='default'}) => {
    const navigate = useNavigate()

    const handleSignInClick = () => {
        navigate('/signin')
    }
    const [menuOpen, setMenuOpen] = useState(false)

     const [isSearchOpen, setIsSearchOpen] = useState(false)
     const [searchValue, setSearchValue] = useState('')

     const handleSearchToggle = () => {
         setIsSearchOpen(!isSearchOpen)
     }

     const handleSearchSubmit = (e) => {
         e.preventDefault()
         console.log('Search value:', searchValue)
         // Perform search or navigation logic here
     }
     if (type === 'logged'){return(<></>)}
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
            <SearchWrapper>
                {isSearchOpen ? (
                    <form onSubmit={handleSearchSubmit}>
                        <SearchInput
                            type="text"
                            placeholder="Search..."
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            onBlur={() => setIsSearchOpen(false)} // Close input on blur
                            autoFocus // Automatically focus the input
                        />
                    </form>
                ) : (
                    <SearchIcon
                        className="fi fi-br-search"
                        onClick={handleSearchToggle}
                    />
                )}
                <SigninButton onClick={handleSignInClick}>Sign in</SigninButton>
            </SearchWrapper>
        </HeaderContainer>
    )
}

export default Header
