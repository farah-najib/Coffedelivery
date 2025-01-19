import styled from 'styled-components'
import BackgroundImg from 'assets/bkfooter.png'
export const FooterContainer = styled.footer`
    position: relative;
    width: 1441px;
    height: 533px;
    background-image: url(${BackgroundImg});
    color: #fff;
    padding: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    font-family: 'Arial', sans-serif;
`

export const Column = styled.div`
    flex: 1;
    margin: 10px;
    min-width: 200px;

    h3 {
        font-size: 18px;
        margin-bottom: 10px;
        font-weight: bold;
    }

    p,
    a {
        font-size: 14px;
        color: #aaa;
        text-decoration: none;
        margin-bottom: 5px;
        display: block;
    }

    a:hover {
        color: #fff;
    }
`

export const SocialIcons = styled.div`
    display: flex;
    gap: 10px;

    a {
        font-size: 20px;
        color: #fff;
        transition: color 0.3s;
    }
`

export const NewsletterContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 259px;
    height: 97px;
`
export const Input = styled.input`
    width: 259px;
    height: 42px;
    // align-items: center;
    gap: 10px;
    border-radius: 8px;
    border: 1px solid;
    border-color: var(--base-400);
`

export const Button = styled.button`
    gap: 4px;
    padding: 12px 24px;
    width: 124px;
    height: 42px;
    background-color: var(--basewhite);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    color: black;
`
