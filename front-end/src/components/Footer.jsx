
import styled from 'styled-components'
import BackgroundImg from '../assets/bkfooter.png'
import Logo from '../assets/logo-img/logo.png'


const FooterContainer = styled.footer`
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

const Column = styled.div`
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

const SocialIcons = styled.div`
    display: flex;
    gap: 10px;

    a {
        font-size: 20px;
        color: #fff;
        transition: color 0.3s;
    }
`

const NewsletterContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap:1rem;
    width:259px;
    height:97px;
`
const Input = styled.input`
    width: 259px;
    height: 42px;
    // align-items: center;
    gap: 10px;
    border-radius: 8px;
    border: 1px solid;
    border-color: var(--base-400);
`



 const Button = styled.button`
     gap: 4px;
     padding: 12px 24px;
     width: 124px;
     height: 42px;
     background-color: var(--basewhite);
     display: inline-flex;
     align-items: center;
     justify-content: center;
     border-radius: 8px;
     color:black;
 `


const Footer = () => {
    return (
        <FooterContainer>
            <Column>
                <img src={Logo} />
                <p>
                    At our company, we strive to make your coffee time more
                    enjoyable. Since 2020, we have been providing high-quality
                    coffee and excellent service.
                </p>
                <SocialIcons>
                    <a href="#" aria-label="Instagram">
                        <i className="fi fi-brands-instagram" />
                    </a>
                    <a href="#" aria-label="TikTok">
                        <i className="fi fi-brands-tik-tok" />
                    </a>
                    <a href="#" aria-label="YouTube">
                        <i className="fi fi-brands-youtube" />
                    </a>
                </SocialIcons>
            </Column>
            <Column>
                <h3>Quick Links</h3>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Menu</a>
                <a href="#">Purchase</a>
                <a href="#">My Account</a>
                <a href="#">My Orders</a>
                <a href="#">Favorite Coffees</a>
            </Column>
            <Column>
                <h3>Newsletter</h3>
                <NewsletterContainer>
                    <Input type="email" placeholder="example@email.com" />
                    <Button>Subscribe</Button>
                </NewsletterContainer>
            </Column>
        </FooterContainer>
    )
}

export default Footer
