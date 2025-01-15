import Gallary2 from '../assets/gallary2.png'
import Gallary4 from '../assets/gallary4.png'
import Gallary6 from '../assets/gallary6.png'
import styled from 'styled-components'


const WhereverYouAre = styled.div`
    background-color: #ba2d0b;
    background-size: cover;
    background-position: 50% 50%;

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh; /* Full viewport height */
    // overflow: hidden;
`

const Group17 = styled.div`
    position: relative;
    width: 1120px;
    height: 518px;
    top: 120px;
    left: 160px;
`

const TextWrapper22 = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    font-family: var(--title-m-semibold-font-family);
    font-weight: var(--title-m-semibold-font-weight);
    color: var(--basewhite);
    font-size: var(--title-m-semibold-font-size);
    letter-spacing: var(--title-m-semibold-letter-spacing);
    line-height: var(--title-m-semibold-line-height);
    white-space: nowrap;
    font-style: var(--title-m-semibold-font-style);
`

const Group18 = styled.div`
    position: absolute;
    width: 1118px;
    height: 367px;
    top: 151px;
    left: 0;
`

const Group19 = styled.div`
    position: absolute;
    width: 463px;
    height: 367px;
    top: 0;
    left: 655px;
`

const StyledImg = styled.img`
    position: absolute;
    object-fit: cover;

    &.unsplash-vobvkmg-sta {
        width: 219px;
        height: 367px;
        top: 0;
        left: 0;
    }

    &.unsplash {
        width: 222px;
        height: 122px;
        top: 0;
        left: 241px;
    }

    &.unsplash-zunspgdg {
        width: 218px;
        height: 226px;
        top: 141px;
        left: 241px;
    }
`

const Group20 = styled.div`
    position: absolute;
    width: 548px;
    height: 367px;
    top: 0;
    left: 0;
`

const TextWrapper23 = styled.p`
    position: absolute;
    width: 445px;
    top: 58px;
    left: 0;
    font-family: var(--text-l-regular-font-family);
    font-weight: var(--text-l-regular-font-weight);
    color: var(--base-400);
    font-size: var(--text-l-regular-font-size);
    letter-spacing: var(--text-l-regular-letter-spacing);
    line-height: var(--text-l-regular-line-height);
    font-style: var(--text-l-regular-font-style);
`

const Group21 = styled.div`
    position: absolute;
    width: 258px;
    height: 42px;
    top: 267px;
    left: 0;
`

const IconbadgeCheck = styled.i`
    position: absolute;
    width: 24px;
    height: 24px;
`

const TextWrapper24 = styled.p`
    position: absolute;
    width: 224px;
    top: 0;
    left: 32px;
    font-family: var(--text-m-bold-font-family);
    font-weight: var(--text-m-bold-font-weight);
    color: #ffffff;
    font-size: var(--text-m-bold-font-size);
    letter-spacing: var(--text-m-bold-letter-spacing);
    line-height: var(--text-m-bold-line-height);
    font-style: var(--text-m-bold-font-style);
`

const AtomCTAButton = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px 24px;
    position: absolute;
    top: 194px;
    left: 0;
    background-color: var(--basewhite);
    border-radius: 8px;
`

const TextButton2 = styled.p`
    position: relative;
    width: fit-content;
    margin-top: -1px;
    font-family: 'Ruda', Helvetica;
    font-weight: 700;
    color: var(--blue-900);
    font-size: 16px;
    letter-spacing: 0;
    line-height: 20.8px;
    white-space: nowrap;
`

const Aboutus = () => {
    return (
        <WhereverYouAre>
            <Group17>
                <TextWrapper22>#About us</TextWrapper22>
                <Group18>
                    <Group19>
                        <StyledImg
                            className="unsplash-vobvkmg-sta"
                            src={Gallary2}
                        />
                        <StyledImg className="unsplash" src={Gallary4} />
                        <StyledImg
                            className="unsplash-zunspgdg"
                            src={Gallary6}
                        />
                    </Group19>
                    <Group20>
                        <TextWrapper22>Nature &amp; Love</TextWrapper22>
                        <TextWrapper23>
                            At our company, we strive to make your coffee time
                            more enjoyable. Since 2020, we have been providing
                            high-quality coffee and excellent service.
                        </TextWrapper23>
                        <Group21>
                            <IconbadgeCheck className="fi fi-rs-badge-check" />

                            <TextWrapper24>
                                Lorem ipsum dolor sit amet consectetur. Tortor
                                non
                            </TextWrapper24>
                        </Group21>
                        <AtomCTAButton>
                            <TextButton2>FIND A STORE NEAR TO YOU</TextButton2>
                        </AtomCTAButton>
                    </Group20>
                </Group18>
            </Group17>
        </WhereverYouAre>
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
