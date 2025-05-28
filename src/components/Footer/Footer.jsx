import Logo from 'assets/logo-img/logo.png'

import { FooterContainer ,Column ,SocialIcons,NewsletterContainer,Input,Button} from './Footer.styles.js'

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
