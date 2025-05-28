import styled from 'styled-components'
import CoffeeCup from 'assets/flat.png'

const Card = styled.div`
    flex-shrink: 0;
    position: relative;
    width: 160px;
    height: 214px;
    z-index: 44;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Img = styled.div`
    position: relative;
    width: 160px;
    height: 160px;
    background: url(${CoffeeCup})
        no-repeat center;
    background-size: cover;
    z-index: 45;
    border-radius: 12px;
`

const Title = styled.span`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    width: 160px;
    height: 21px;
    margin-top: 12px;
    color: #1d1c25;
    font-family: Ruda, sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 20.8px;
    text-align: center;
    white-space: nowrap;
    z-index: 46;
`

const Price = styled.span`
    display: block;
    position: relative;
    height: 21px;
    margin-top: 4px;
    color: #1d1c25;
    font-family: Ruda, sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 20.8px;
    text-align: left;
    white-space: nowrap;
    z-index: 47;
`

const Popular = () => {
    return (
        <Card>
            <Img />
            <Title>Traditional Espresso</Title>
            <Price>$9.99</Price>
        </Card>
    )
}

export default Popular
