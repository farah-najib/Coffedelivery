import styled from 'styled-components'
import ArrowImg2 from '../assets/vectors/arrow2.png'
import ArrowImg1 from '../assets/vectors/arrow.png'
import Coffeebeans from '../assets/coffee-beans.png'
import ElementImg from '../assets/element.png'
import ElementImg2 from '../assets/element2.png'
import ElementImg3 from '../assets/element3.png'


const BannerContainer = styled.div`
    background-color: #f1dedc;
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`
const BannerFooter = styled.footer`
    position: absolute;
    bottom: 0; /* Position the footer at the bottom of the container */
    width: 100%;
`

const CoffeeBean = styled.div`
    width: 100%;
    height: 241px;
    display: flex;
    // background-color:yellow;
`
const Cloumn1 = styled.div`
    width: 547px;
    height: 241px;
    display:flex;
`
const CoffeeBeanImg = styled.div`
    position: relative;
    width: 299px;
    height: 176px;
    background: url(${Coffeebeans});
    background-size: cover;
    animation: float 6s ease-in-out infinite;
`
const CoffeeBeanImg2 = styled.div`
    position: relative;
    width: 299px;
    height: 176px;
    background: url(${Coffeebeans});
    background-size: cover;

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
const Cloumn2 = styled.div`
    width: 547px;
    height: 241px;
    display: flex;
`
const Cloumn3 = styled.div`
    width: 547px;
    height: 241px;
    display: flex;

`

const Cup = styled.div`
    position: absolute;
    top: -50%;
    z-index: 500;
    padding: 10px;

`

const Latte = styled.div`
    position: absolute;
    width: 315px;
    height: 315px;
    top: 0;
    left: 547px;
    background-size: cover;
    background-position: 50% 50%;
    background: url(${ElementImg3});
    background-size: cover;
`

const Americano = styled.div`
    position: absolute;
    width: 200px;
    height: 200px;
    top: 0;
    left: 331px;
    background:url(${ElementImg2});
    background-size: cover;
`

const Cappuccino = styled.div`
    position: absolute;
    width: 200px;
    height: 200px;
    top: 0;
    left: 884px;
    object-fit: cover;
    background: url(${ElementImg});
    background-size: cover;
`



const Content = styled.div`
    position: absolute;
    width: 927px;
    height: 234px;
    margin-top: 150px;
    margin-left: 200px;
    margin-right: 150px;
    //background-color: yellow;
`

const LeftText = styled.div`
    position: absolute;
    width: 927px;
    height: 234px;

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
    font-family: 'Halant', Helvetica;
    font-weight: 700;
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

const Arrow1 = styled.div`
    position: absolute;
    width: 336px;
    height: 95px;
    background :url(${ArrowImg1});
    background-size:cover;
    top: 81px;
    left: 805px;
`

const Arrow2 = styled.div`
    position: absolute;
    width: 95px;
    height: 228px;
     background :url(${ArrowImg2});
    background-size:cover;
    top: 17px;
    left: 0;
`

const Banner = () => {
    return (
        <BannerContainer>
            <Content>
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
                <Arrow1 />
                <Arrow2 />
            </Content>

            <BannerFooter>
                <CoffeeBean>
                    <Cloumn1>
                        <CoffeeBeanImg />
                        <CoffeeBeanImg2 />
                    </Cloumn1>
                    <Cloumn2>
                        <CoffeeBeanImg />
                        <CoffeeBeanImg2 />
                    </Cloumn2>
                    <Cloumn3>
                        <CoffeeBeanImg />
                        <CoffeeBeanImg2 />
                    </Cloumn3>
                </CoffeeBean>
                <Cup>
                    <Latte />
                    <Americano />
                    <Cappuccino />
                </Cup>
            </BannerFooter>
        </BannerContainer>
    )
}

export default Banner
