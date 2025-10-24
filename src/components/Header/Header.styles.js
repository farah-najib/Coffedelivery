import styled from 'styled-components'
import Logo from 'assets/logo-img/logo1.png'
import mediaQuery from 'styles/mediaQuery'

// 🟩 Header Container
export const HeaderContainer = styled.nav`
  height: 4.813rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: 10;
`

// 🟦 Logo
export const HeaderLogo = styled.a`
  display: block;
  width: 63px;
  height: 45px;
  background-image: url(${Logo});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin: 10px 0;
`

// 🟨 Search Bar Wrapper
export const SearchWrapper = styled.div`
  display: none;

  ${mediaQuery('smallDesktop')`
    display: flex;
    align-items: center;
  `}
`

// 🔍 Search Icon
export const SearchIcon = styled.i`
  font-size: 1.5rem;
  cursor: pointer;
  margin-right: 10px;
`

// ✏️ Search Input
export const SearchInput = styled.input`
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  width: 200px;
  transition: width 0.3s ease;
  font-size: 1rem;
  background-color: #fff;

  &:focus {
    width: 250px;
    border-color: #007bff;
  }
`

// 🧭 Navigation Links
export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;

  ${mediaQuery('largeTablet', 'max')`
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 4.813rem;
    left: 0;
    width: 100%;
    background-color: #252525;
    padding: 2rem 0;
    display: ${(props) => (props.show ? 'flex' : 'none')};
    transition: all 0.3s ease-in-out;
  `}
`

// 🧩 Each Link Item
export const Link = styled.li`
  a {
    color: black;
    text-decoration: none;
    display: inline-block;
    padding: 10px 20px;
    transition: color 0.3s ease;

    &:hover {
      color: #007bff;
    }
  }

  ${mediaQuery('largeTablet', 'max')`
    a {
      color: white;
      display: block;
      text-align: center;
    }
  `}
`

// 🍔 Mobile Menu Button
export const MenuBtn = styled.div`
  display: block;
  position: absolute;
  color: black;
  top: 12px;
  right: 30px;
  font-size: 2rem;
  cursor: pointer;
  z-index: 20;

  ${mediaQuery('smallDesktop')`
    display: none;
  `}
`

// 🔐 Sign-in Button
export const SigninButton = styled.button`
  display: none;
  background-color: var(--green-600, #4caf50);
  border-radius: 8px;
  border: none;
  color: white;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #43a047;
  }

  ${mediaQuery('smallDesktop')`
    display: block;
  `}
`
