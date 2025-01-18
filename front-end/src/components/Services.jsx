import CoffeeCup from '../assets/coffeecup.png'
import CoffeeBag from '../assets/coffeebag.png'
import ArrowEight from '../assets/vectors/arrow8.png'
import styled from 'styled-components'
const OurServices = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    //justify-content: center;
    //align-items: center;
    width: 100vw;
    height: 100vh; /* Full viewport height */
    // overflow: hidden;
    background-color: palevioletred;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
`

const ListOfCard = styled.div`
    display: flex;
    flex-direction: row;
    gap:32px;
`
const Card = styled.div`
    width: 352px;
    height: 248px;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: var(--drop-2);
    justify-content: center;
    align-items: center;

`

const CardHeader = styled.i`
    font-size: 56px;
    color: #4e5b3e;
    display: inline-block;
`

const Title = styled.div`

    font-family: var(--title-s-semibold-font-family);
    font-weight: var(--title-s-semibold-font-weight);
    color: #000000;
    font-size: var(--title-s-semibold-font-size);
    letter-spacing: var(--title-s-semibold-letter-spacing);
    line-height: var(--title-s-semibold-line-height);
    white-space: nowrap;
    font-style: var(--title-s-semibold-font-style);
`

const Description = styled.p`

    width: 320px;
    font-family: var(--text-s-regular-font-family);
    font-weight: var(--text-s-regular-font-weight);
    color: var(--base-600);
    font-size: var(--text-s-regular-font-size);
    text-align: center;
    letter-spacing: var(--text-s-regular-letter-spacing);
    line-height: var(--text-s-regular-line-height);
    font-style: var(--text-s-regular-font-style);
`

const Button = styled.div`
    padding: 12px 24px;
    border-radius: 8px;
    border: 1px solid var(--green-600);
`


const CheckOurProducts = styled.div`
    width: 1120px;
    height: 241px;
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, auto);
    gap: 5px;
    background-color: #1f2130;

    color: #ffffff;
    background-size: 100% 100%;
`

const Column1 = styled.div`
    height: 100%;
    //background: blue;
`
const Column2 = styled.div`
    height: 100%;
    //background: rgb(175, 76, 149);
`
const Column3 = styled.div`
    height: 100%;
    // background: green;
`





const TextButton6 = styled.div`
    position: relative;
    width: fit-content;
    margin-top: -1px;
    font-family: var(--text-m-bold-font-family);
    font-weight: var(--text-m-bold-font-weight);
    color: var(--blue-900);
    font-size: var(--text-m-bold-font-size);
    letter-spacing: var(--text-m-bold-letter-spacing);
    line-height: var(--text-m-bold-line-height);
    white-space: nowrap;
    font-style: var(--text-m-bold-font-style);
`


const ArrowImg = styled.div`
    width: 245px;
    height: 148px;
    background: url(${ArrowEight}) no-repeat center;
    background-size: cover;
`

const CupBagImg = styled.div`
   // position: absolute;
    width: 243px;
    height: 283px;
`

const Bag = styled.div`
    //position: absolute;
    width: 144px;
    height: 283px;
    background: url(${CoffeeBag}) no-repeat center;
    background-size: cover;
`

const Cup = styled.div`
    position: absolute;
    width: 126px;
    height: 190px;
    background: url(${CoffeeCup}) no-repeat center;
    background-size: cover;
    top: 93px;
    left: 117px;
`


const Services = () => {
    return (
        <OurServices>
            <ComponentTitle>#Our services</ComponentTitle>
            <Content>
                <ListOfCard>
                    <Card>
                        <CardHeader className="fi fi-rr-calendar-day" />
                        <Title>Schedule</Title>
                        <Description>
                            Planning an office party or a coffee break with
                            friends? Let us take care of everything.
                        </Description>
                        <Button>Schedule our service</Button>
                    </Card>

                    <Card>
                        <CardHeader className="fi fi-rs-shop" />
                        <Title>Stores</Title>
                        <Description>
                            Find the nearest one and come try a new experience
                            and taste for yourself.
                        </Description>
                        <Button>Find a store near you</Button>
                    </Card>

                    <Card>
                        <CardHeader className="fi fi-rs-shipping-fast" />
                        <Title>Delivery</Title>
                        <Description>
                            With our platform, we can deliver coffee straight to
                            you, no matter where you are.
                        </Description>
                        <Button>Order coffee now</Button>
                    </Card>
                </ListOfCard>

                <CheckOurProducts>
                    <Column1>
                        <CupBagImg>
                            <Bag />
                            <Cup />
                        </CupBagImg>
                    </Column1>
                    <Column2>
                        <ArrowImg />
                    </Column2>
                    <Column3>
                            Upgrade your experience

                        Upgrade your coffee experience. Try our fresh beans and
                        taste the rich, delicious flavour for yourself. You
                        won&#39;t be disappointed.
                        <TextButton6>Try our fresh beans</TextButton6>
                    </Column3>
                </CheckOurProducts>
            </Content>
        </OurServices>
    )
}

export default Services



