import styled from 'styled-components'
import ArrowImg2 from '../assets/arrow2.png'
import ArrowImg1 from '../assets/arrow.png'
import Coffeebeans from '../assets/coffee-beans.png'
import ElementImg from '../assets/element.png'
import ElementImg2 from '../assets/element2.png'
import ElementImg3 from '../assets/element3.png'


const BannerContainer = styled.div`
    background-color: #f1dedc;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh; /* Full viewport height */
    // overflow: hidden;
`
const Overlap2 = styled.div`
    position: absolute;


    left: 0;
`

const OverlapWrapper = styled.div`
    position: absolute;
    width: 1440px;
    height: 241px;
    top: 109px;
    left: 0;
`

const OverlapGroup2 = styled.div`
    position: relative;
    height: 241px;
`

const DivWrapper = styled.div`
    position: absolute;
    width: 547px;
    height: 241px;
    top: 0;
    left: 0;
`

const CoffeeBeans = styled.img`
    position: absolute;
    width: 299px;
    height: 176px;
    top: 64px;
    left: 0;
    object-fit: cover;
    animation: float 6s ease-in-out infinite;
`

const CoffeeBeans2 = styled.img`
    position: absolute;
    width: 299px;
    height: 176px;
    top: 0;
    left: 248px;
    object-fit: cover;
    animation: float-reverse 8s ease-in-out infinite;
    @keyframes float {
        0%,
        100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-20px);
        }
    }

    @keyframes float-reverse {
        0%,
        100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(20px);
        }
    }
`

const Group6 = styled.div`
    position: absolute;
    width: 547px;
    height: 241px;
    top: 0;
    left: 474px;
`

const Group7 = styled.div`
    position: absolute;
    width: 547px;
    height: 241px;
    top: 0;
    left: 893px;
`

const Group8 = styled.img`
    position: absolute;
    width: 315px;
    height: 315px;
    top: 0;
    left: 547px;
    background-size: cover;
    background-position: 50% 50%;
`

const Element = styled.img`
    position: absolute;
    width: 200px;
    height: 200px;
    top: 0;
    left: 331px;
    object-fit: cover;
`

const Element2 = styled.img`
    position: absolute;
    width: 200px;
    height: 200px;
    top: 12px;
    left: 884px;
    object-fit: cover;
`



const Overlap3 = styled.div`
    position: absolute;
    width: 1141px;
    height: 245px;
    top: 162px;
    left: 237px;

`

const LeftText = styled.div`
    position: absolute;
    width: 927px;
    height: 234px;
    top: 0;
    left: 19px;
`

const Frame2 = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    position: relative;
`

const Title = styled.div`
    position: relative;
    width: 927px;
    height: 176px;
`

const CravingThePerfect = styled.p`
    position: absolute;
    width: 927px;
    top: -1px;
    left: 0;
    font-family: 'Halant', Helvetica;
    font-weight: 700;
    // color: transparent;
    font-size: 48px;
    text-align: center;
    letter-spacing: 0;
    line-height: 62.4px;
`

const Span = styled.span`
    color: green;
`

const TextWrapper3 = styled.span`
    color: #ba2d0b;
`

const TextWrapper4 = styled.p`
    position: absolute;
    width: 527px;
    top: 123px;
    left: 200px;
    font-family: var(--text-l-regular-font-family);
    font-weight: var(--text-l-regular-font-weight);
    color: var(--base-600);
    font-size: var(--text-l-regular-font-size);
    text-align: center;
    letter-spacing: var(--text-l-regular-letter-spacing);
    line-height: var(--text-l-regular-line-height);
    font-style: var(--text-l-regular-font-style);
`



const AtomPrimaryButton = styled.div`
    // display: inline-flex;
    // align-items: center;
    // justify-content: center;
    // gap: 10px;
    // padding: 12px 24px;
    // position: relative;
    // background-color: var(--green-600);
    // border-radius: 8px;

    background-color: #556b2f;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.2rem;
    margin-top: 20px;

    &:hover {
        background-color: #6b8e23;
    }
`

const TextButton = styled.div`
    color: #ffffff;
    font-size: var(--text-s-bold-font-size);
    line-height: var(--text-s-bold-line-height);
    position: relative;
    width: fit-content;
    margin-top: -1px;
    font-family: var(--text-s-bold-font-family);
    font-weight: var(--text-s-bold-font-weight);
    letter-spacing: var(--text-s-bold-letter-spacing);
    white-space: nowrap;
    font-style: var(--text-s-bold-font-style);
`

const Group9 = styled.img`
    position: absolute;
    width: 336px;
    height: 95px;
    top: 81px;
    left: 805px;
`

const Group10 = styled.img`
    position: absolute;
    width: 95px;
    height: 228px;
    top: 17px;
    left: 0;
`

const Banner = () => {
    return (
        <BannerContainer>
            <Overlap3>
                <LeftText>
                    <Frame2>
                        <Title>
                            <CravingThePerfect>
                                <Span>Craving the perfect cup of coffee?</Span>
                                <br />
                                Our blends are{' '}
                                <TextWrapper3>
                                    lovely and delicious.
                                </TextWrapper3>
                            </CravingThePerfect>
                            <TextWrapper4>
                                With Coffee Delivery, you can have your coffee
                                delivered to you wherever you are, at any time.
                            </TextWrapper4>
                        </Title>

                        <AtomPrimaryButton>
                            <TextButton>Order your coffee now</TextButton>
                        </AtomPrimaryButton>
                    </Frame2>
                </LeftText>
                <Group9 src={ArrowImg1} />
                <Group10 src={ArrowImg2} />
            </Overlap3>

            <Overlap2>
                <OverlapWrapper>
                    <OverlapGroup2>
                        <DivWrapper>
                            <OverlapGroup2>
                                <CoffeeBeans src={Coffeebeans} />
                                <CoffeeBeans2 src={Coffeebeans} />
                            </OverlapGroup2>
                        </DivWrapper>
                        <Group6>
                            <OverlapGroup2>
                                <CoffeeBeans src={Coffeebeans} />
                                <CoffeeBeans2 src={Coffeebeans} />
                            </OverlapGroup2>
                        </Group6>
                        <Group7>
                            <OverlapGroup2>
                                <CoffeeBeans src={Coffeebeans} />
                                <CoffeeBeans2 src={Coffeebeans} />
                            </OverlapGroup2>
                        </Group7>
                    </OverlapGroup2>
                </OverlapWrapper>

                <Group8 src={ElementImg3} />
                <Element src={ElementImg2} />
                <Element2 src={ElementImg} />
            </Overlap2>
        </BannerContainer>
    )
}

export default Banner
