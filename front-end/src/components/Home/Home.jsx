import styled from 'styled-components'
import ArrowImg2 from 'assets/vectors/arrow2.png'
import ArrowImg1 from 'assets/vectors/arrow.png'
import Coffeebeans from 'assets/coffee-beans.png'
import ElementImg from 'assets/element.png'
import ElementImg2 from 'assets/element2.png'
import ElementImg3 from 'assets/element3.png'

const BannerContainer = styled.div`
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
    display: flex;
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
    background: url(${ElementImg2});
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

const Title = styled.div``

const Description = styled.p``

const Button = styled.div``

const Arrow1 = styled.div`
    position: absolute;
    width: 336px;
    height: 95px;
    background: url(${ArrowImg1});
    background-size: cover;
    top: 81px;
    left: 805px;
`

const Arrow2 = styled.div`
    position: absolute;
    width: 95px;
    height: 228px;
    background: url(${ArrowImg2});
    background-size: cover;
    top: 17px;
    left: 0;
`

const Home = () => {
    return (
        <BannerContainer>
            <Content>
                <Title>
                    Craving the perfect cup of coffee? Our blends are lovely and
                    delicious.
                </Title>
                <Description>
                    With Coffee Delivery, you can have your coffee delivered to
                    you wherever you are, at any time.
                </Description>

                <Button>Order your coffee now</Button>

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

export default Home
