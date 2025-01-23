import Gallary2 from 'assets/gallary/gallary2.png'
import Gallary4 from 'assets/gallary/gallary4.png'
import Gallary6 from 'assets/gallary/gallary6.png'
import {
    Container,
    ComponentTitle,
    Content,
    Gallary,
    Column2,
    Photo,
    Description,
    List,
    ListItem,
    Button

} from './AboutUs.styles'

const Aboutus = () => {
    return (
        <Container id="About">
            <ComponentTitle>#About us</ComponentTitle>
            <Content>
                <Description>
                    <p>
                        <span className="title">Nature &amp; Love </span>
                        <br />
                        At our company, we strive to make your coffee time more
                        enjoyable. Since 2020, we have been providing
                        high-quality coffee and excellent service.
                    </p>

                    <List>
                        <ListItem>
                            Lorem ipsum dolor sit amet consectetur. Tortor non
                        </ListItem>
                        <ListItem>
                            Lorem ipsum dolor sit amet consectetur. Tortor non
                        </ListItem>
                        <ListItem>
                            Lorem ipsum dolor sit amet consectetur. Tortor non
                        </ListItem>
                    </List>
                    <Button>FIND A STORE NEAR TO YOU</Button>
                </Description>

                <Gallary>
                    <Photo className="column1photo" src={Gallary2} />
                    <Column2>
                        <Photo className="column2row1" src={Gallary4} />
                        <Photo className="column2row2" src={Gallary6} />
                    </Column2>
                </Gallary>
            </Content>
        </Container>
    )
}

export default Aboutus

// const AboutUs = () => {
//     return (
//         <div className="about-us">
//             #About us
//             <img className="unsplash-vobvkmg-sta" src={Gallary2} />
//             <img className="unsplash" src={Gallary4} />
//             <img className="unsplash-zunspgdg" src={Gallary6} />
//             Nature &amp; Love
//             <p>
//                 At our company, we strive to make your coffee time more
//                 enjoyable. Since 2020, we have been providing high-quality
//                 coffee and excellent service.
//             </p>
//             <p className="text-wrapper-24">
//                 Lorem ipsum dolor sit amet consectetur. Tortor non
//             </p>
//             <p className="text-button-2">FIND A STORE NEAR TO YOU</p>
//         </div>
//     )
// }

// export default AboutUs
