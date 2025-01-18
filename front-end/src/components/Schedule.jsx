import Gallary1 from '../assets/gallary/gallary1.png'
import Gallary3 from '../assets/gallary/gallary3.png'
import Arrow4 from '../assets/vectors/arrow4.png'

import styled from 'styled-components'
const ScheduleComponent = styled.div`
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

const Container = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 5px;
    grid-row-gap: 7px;
`

const LeftSection = styled.div`

    position: relative;
    display: flex;
    flex-direction: row;
    //background: blue;
`
const Img1 = styled.div`
    width: 344px;
    height: 548px;
    background: url(${Gallary1}) no-repeat center center;
    background-size: cover;
`

const RightSection = styled.div`

    flex-direction: row-reverse;
    color: white;
    //background: pink;
    position: relative;
`
const Img2 = styled.div`
    width: 292px;
    height: 489px;
    background: url(${Gallary3}) no-repeat center center;
    background-size: cover;
`

const Hashtag = styled.div`
    font-size: 48px;
    font-weight: bold;
    color: #002451;
    writing-mode: vertical-lr;
    text-transform: uppercase;
`

const MiddletSection = styled.div``

const Heading = styled.h1`
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
`

const Text = styled.p`
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 30px;
`

const Button = styled.button`
    background-color: white;
    color: #ba2b1a;
    font-size: 16px;
    padding: 15px 30px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    border-radius: 5px;
`
const Schedule = () => {
    return (
        <ScheduleComponent>
            <ComponentTitle>#schedule your order</ComponentTitle>
            <Container>
                <LeftSection>
                    <Img1 />
                    <Hashtag>#Friends</Hashtag>
                </LeftSection>

                <MiddletSection>
                    <Heading>
                        Grab a cup of coffee with your buds or at the office.
                    </Heading>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur. Justo faucibus
                        fusce urna faucibus. Blandit sociis pulvinar habitasse
                        aliquam arcu massa at mi consectetur.
                    </Text>
                    <Button>Order Now and Schedule Your Delivery</Button>
                </MiddletSection>

                <RightSection>
                    <Img2 />
                    <Hashtag>#Work</Hashtag>
                </RightSection>
            </Container>
        </ScheduleComponent>
    )
}
export default Schedule
