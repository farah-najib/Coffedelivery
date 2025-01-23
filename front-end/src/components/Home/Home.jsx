import {
    BannerContainer,
    Content,
    Title,
    Description,
    Arrow1,
    Arrow2,
    BannerFooter,
    CoffeeBean,
    Cloumn1,
    Cloumn2,
    Cloumn3,
    Cup,
    Latte,
    Cappuccino,
    Americano,
    CoffeeBeanImg,
    CoffeeBeanImg2,Button
} from './Home.styles'

const Home = () => {
    return (
        <BannerContainer id="#Home">
            <Content>
                <Title>
                    <span className="craving-the-perfect">
                        Craving the perfect cup of coffee?
                    </span>
                    <br />
                    Our blends are{' '}
                    <span className="lovely">lovely and delicious.</span>
                </Title>
                <Description>
                    With Coffee Delivery, you can have your coffee delivered to
                    you wherever you are, at any time.
                </Description>

                <Button>
                    <span className="text-button">Order your coffee now</span>
                </Button>
               

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
