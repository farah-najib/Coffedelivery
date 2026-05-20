import styled from 'styled-components'
import BackgroundImg from 'assets/bkfooter.png'
export const FooterContainer = styled.footer`
    position: relative;
    width: 100%;
    min-height: 420px;
    background-image: url(${BackgroundImg});
    background-size: cover;
    background-position: center;
    color: #fff;
    padding: clamp(3rem, 7vw, 5rem) clamp(1rem, 5vw, 5rem);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    font-family: var(--text-s-regular-font-family);
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
        color: var(--cream-300);
        text-decoration: none;
        margin-bottom: 5px;
        display: block;
    }

    a:hover {
        color: var(--cream-100);
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
    width: min(259px, 100%);
`
export const Input = styled.input`
    width: 100%;
    height: 42px;
    gap: 10px;
    border-radius: 999px;
    border: 1px solid;
    border-color: rgba(255, 248, 239, 0.35);
    background: rgba(255, 255, 255, 0.92);
    padding: 0 1rem;
`

export const Button = styled.button`
    gap: 4px;
    padding: 12px 24px;
    width: 124px;
    height: 42px;
    background-color: var(--cream-100);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    color: var(--coffee-900);
    font-weight: 700;
`
