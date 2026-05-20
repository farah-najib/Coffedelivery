import styled from 'styled-components'
import Logo from 'assets/logo-img/logo1.png'
import mediaQuery from 'styles/mediaQuery'

export const HeaderContainer = styled.nav`
  min-height: 4.813rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem clamp(1rem, 5vw, 5rem);
  background-color: rgba(255, 248, 239, 0.92);
  border-bottom: 1px solid rgba(111, 66, 39, 0.1);
  backdrop-filter: blur(18px);
  position: sticky;
  top: 0;
  z-index: 30;

  ${mediaQuery('smallDesktop', 'max')`
    min-height: 4.5rem;
  `}
`

export const HeaderLogo = styled.a`
  display: block;
  width: 76px;
  height: 52px;
  background-image: url(${Logo});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin: 10px 0;
`

export const SearchWrapper = styled.div`
  display: none;
  gap: 0.75rem;

  ${mediaQuery('smallDesktop')`
    display: flex;
    align-items: center;
  `}
`

export const SearchIcon = styled.i`
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--cream-200);
  color: var(--coffee-800);
  font-size: 1rem;
  cursor: pointer;
`

export const SearchInput = styled.input`
  height: 42px;
  padding: 0 14px;
  border: 1px solid rgba(111, 66, 39, 0.18);
  border-radius: 999px;
  outline: none;
  width: 200px;
  transition: width 0.3s ease;
  font-size: 0.9rem;
  background-color: var(--basewhite);
  color: var(--coffee-900);

  &:focus {
    width: 250px;
    border-color: var(--coffee-500);
  }
`

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: clamp(0.25rem, 2vw, 1.25rem);

  ${mediaQuery('smallDesktop', 'max')`
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 4.5rem;
    left: 0;
    width: 100%;
    background-color: var(--coffee-900);
    padding: 2rem 0;
    display: ${(props) => (props.show ? 'flex' : 'none')};
    transition: all 0.3s ease-in-out;
  `}
`

export const Link = styled.li`
  a {
    color: var(--coffee-800);
    text-decoration: none;
    display: inline-block;
    padding: 10px 14px;
    font-family: var(--text-s-bold-font-family);
    font-weight: var(--text-s-bold-font-weight);
    font-size: 14px;
    transition: color 0.3s ease;

    &:hover {
      color: var(--red-500);
    }
  }

  ${mediaQuery('smallDesktop', 'max')`
    a {
      color: var(--cream-100);
      display: block;
      text-align: center;
      min-width: 10rem;
    }
  `}
`

export const MenuBtn = styled.div`
  display: block;
  position: absolute;
  color: var(--coffee-900);
  top: 18px;
  right: 24px;
  font-size: 1.75rem;
  cursor: pointer;
  z-index: 20;
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;

  ${mediaQuery('smallDesktop')`
    display: none;
  `}
`

export const SigninButton = styled.button`
  display: none;
  background-color: var(--coffee-800);
  border-radius: 999px;
  border: none;
  color: var(--cream-100);
  padding: 11px 20px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 700;
  box-shadow: var(--drop-2);
  transition: transform 0.2s ease, background-color 0.3s ease;

  &:hover {
    background-color: var(--red-500);
    transform: translateY(-1px);
  }

  ${mediaQuery('smallDesktop')`
    display: block;
  `}
`
