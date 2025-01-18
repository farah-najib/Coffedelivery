import Gallary1 from '../assets/gallary/gallary1.png'
import Gallary3 from '../assets/gallary/gallary3.png'
import Arrow4 from '../assets/vectors/arrow4.png'

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

const Group27 = styled.div`
    position: relative;
    width: 1496px;
    height: 725px;
    top: 76px;
`

const Overlap9 = styled.div`
    position: relative;
    width: 1490px;
    height: 725px;
`

const DarkGreyTerrazzo = styled.div`
    left: 160px;
    position: absolute;
    top: 0;
    font-family: var(--title-m-semibold-font-family);
    font-weight: var(--title-m-semibold-font-weight);
    color: var(--basewhite);
    font-size: var(--title-m-semibold-font-size);
    letter-spacing: var(--title-m-semibold-letter-spacing);
    line-height: var(--title-m-semibold-line-height);
    white-space: nowrap;
    font-style: var(--title-m-semibold-font-style);
`



const GallaryImg1 = styled.img`
    position: absolute;
    width: 344px;


    object-fit: cover;
`

const GallaryImg2 = styled.img`
    position: absolute;

    top: 0;
    left: 1198px;
`





const GrabACupOfCoffee = styled.p`
    position: absolute;
    width: 637px;
    top: 0;
    left: 0;
    font-family: var(--title-m-semibold-font-family);
    font-weight: var(--title-m-semibold-font-weight);
    color: var(--basewhite);
    font-size: var(--title-m-semibold-font-size);
    letter-spacing: var(--title-m-semibold-letter-spacing);
    line-height: var(--title-m-semibold-line-height);
    font-style: var(--title-m-semibold-font-style);
`

const TextWrapper32 = styled.p`
    width: 552px;
    top: 100px;
    left: 0;
    font-weight: var(--text-m-regular-font-weight);
    color: var(--base-500);
    font-size: var(--text-m-regular-font-size);
    line-height: var(--text-m-regular-line-height);
    position: absolute;
    font-family: var(--text-m-regular-font-family);
    letter-spacing: var(--text-m-regular-letter-spacing);
    font-style: var(--text-m-regular-font-style);
`

const AtomCTAButton2 = styled.div`
    top: 210px;
    left: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px 24px;
    position: absolute;
    background-color: var(--basewhite);
    border-radius: 8px;
`

const TextWrapper33 = styled.div`
    position: absolute;
    top: 240px;
    left: 240px;
    transform: rotate(90deg);
    font-family: 'Ruda', Helvetica;
    font-weight: 700;
    color: var(--base-800);
    font-size: 58.7px;
    letter-spacing: 0;
    line-height: 76.3px;
    white-space: nowrap;
`

const TextWrapper34 = styled.div`
    position: absolute;
    top: 354px;
    left: 1059px;
    transform: rotate(-90deg);
    font-family: 'Ruda', Helvetica;
    font-weight: 700;
    color: var(--base-800);
    font-size: 58.7px;
    letter-spacing: 0;
    line-height: 76.3px;
    white-space: nowrap;
`

const Group30 = styled.img`
    position: absolute;
    width: 212px;
    height: 193px;
    top: 532px;
    left: 248px;
`

const Schedule = () => {
    return (
        <Container>
            <ComponentTitle>#schedule your order</ComponentTitle>
            <GallaryImg1 src={Gallary1} />
            <GallaryImg2 src={Gallary3} />
            Grab a cup of coffee with your buds
            <br />
            or at the office. Lorem ipsum dolor sit amet consectetur. Justo
            faucibus fusce urna faucibus. Blandit sociis pulvinar habitasse
            aliquam arcu massa at mi consectetur. Faucibus ut elementum fames
            mauris amet pulvinar ultrices ut sed. Gravida ornare proin eleifend
            pulvinar ultrices sed in in
            <p>ORDER NOW AND SCHEDULE YOUR DELIVERY</p>
            #FRIENDS #WORK
            <Group30 src={Arrow4} />
        </Container>
    )
}
export default Schedule
