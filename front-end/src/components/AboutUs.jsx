import Gallary2 from '../assets/gallary/gallary2.png'
import Gallary4 from '../assets/gallary/gallary4.png'
import Gallary6 from '../assets/gallary/gallary6.png'
import styled from 'styled-components'


const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #ba2d0b;
    background-size: cover;
    background-position: 50% 50%;
`

const ComponentTitle = styled.div`
    padding: 20px;
    font-family: var(--title-m-semibold-font-family);
    font-weight: var(--title-m-semibold-font-weight);
    color: var(--base-900);
    font-size: var(--title-m-semibold-font-size);
    letter-spacing: var(--title-m-semibold-letter-spacing);
    line-height: var(--title-m-semibold-line-height);
    white-space: nowrap;
    font-style: var(--title-m-semibold-font-style);
`




const Content = styled.div`
    position: relative;
    width: 1118px;
    height: 367px;
    display: flex;
    flex-direction: colunm;
`

const Gallary = styled.div`
    width: 463px;
    height: 367px;
    display: grid;
    grid-template-columns: 1fr 1fr; /* Two columns of equal width */
    gap: 10px; /* Spacing between grid items */
`

const Column2 = styled.div`
  display: grid;
  grid-template-rows: 1fr ; /* Two rows of equal height */
  gap: 10px; /* Spacing between rows */
`;

const Photo = styled.img`
    position: relative;
    object-fit: cover;

    &.column1photo {
        width: 219px;
        height: 367px;
    }

    &.column2row1 {
        width: 222px;
        height: 122px;
    }

    &.column2row2 {
        width: 218px;
        height: 226px;
    }
`

const Description = styled.div`
    position: relative;
    width: 548px;
    height: 367px;
    display: flex;
    flex-direction: column;
`


const List = styled.div`
    position: relative;
    width: 258px;
    height: 42px;
`



const ListItem = styled.p`
    position: relative;
    width: 224px;
    font-family: var(--text-m-bold-font-family);
    font-weight: var(--text-m-bold-font-weight);
    color: #ffffff;
    font-size: var(--text-m-bold-font-size);
    letter-spacing: var(--text-m-bold-letter-spacing);
    line-height: var(--text-m-bold-line-height);
    font-style: var(--text-m-bold-font-style);
`

const Button = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px 24px;
    position: relative;
    background-color: var(--basewhite);
    border-radius: 8px;
`



const Aboutus = () => {
    return (
        <Container>
            <ComponentTitle>#About us</ComponentTitle>
            <Content>
                <Description>
                    <p>
                        Nature &amp; Love At our company, we strive to make your
                        coffee time more enjoyable. Since 2020, we have been
                        providing high-quality coffee and excellent service.
                    </p>

                    <List>
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
