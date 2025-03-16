import styled from 'styled-components'
import Logo from 'assets/logo-img/logo1.png'
import mediaQuery from 'styles/mediaQuery'
export const HeaderContainer = styled.nav`
    height: 4.813rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
   
`
export const HeaderLogo = styled.a`
    display: block;
    width: 63px;
    height: 45px;
    background-image: url(${Logo});
    background-repeat: no-repeat;
    background-size: contain;
    float: left;
    margin: 10px 20px;
`

export const SearchWrapper = styled.div`
    display: none;
    ${mediaQuery('desktop')`
         display: flex;
         align-items: center;`}
`

export const SearchIcon = styled.i`
    font-size: 1.5rem;
    cursor: pointer;
    margin-right: 10px;
`

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
export const NavLinks = styled.ul`
    display: flex;
    list-style: none;
    @media screen and (max-width: 768px) {
        position: absolute;
        top: 50px;
        left: 0;
        width: 100%;
        height: 100%;
        flex-direction: column;
        background-color: #252525;
        align-items: center;
        //display: ${(props) => (props.show ? 'flex' : 'none')};
        padding-top: 60px;
    }
`

export const Link = styled.li`
    a {
        color: black;
        text-decoration: none;
        display: inline-block;
        padding: 10px 20px;
        &:hover {
        }

            margin-bottom: 10px;
            display: block;

    }

    ${mediaQuery('desktop')`
    d
        `}
`

export const MenuBtn = styled.div`
    display: block;
    position: absolute;
    color: black;
    top: 10px;
    right: 30px;
    font-size: 2rem;
    cursor: pointer;
    ${mediaQuery('desktop')`
        display:none;
        `}

`

export const SigninButton = styled.button`
    display: none;
    position: relative;
    background-color: var(--green-600);
    border-radius: 8px;
    color: black;
    padding: 8px 16px;
    ${mediaQuery('desktop')`
        display:block;
        `}
`
