import styled from 'styled-components'
import ColdBeverage from '../assets/coldbeverage.png'
//import VectorFour from '../assets/vectors/vector4.png'
//import VectorFive from '../assets/vectors/vector5.png'
const WhereverYouAre3 = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color:#000000;
    background-size: cover;
    background-position: 50% 50%;
`

const ComponentTitle = styled.div`
    padding: 20px;
    font-family: var(--title-m-semibold-font-family);
    font-weight: var(--title-m-semibold-font-weight);
    color: var(--basewhite);
    font-size: var(--title-m-semibold-font-size);
    letter-spacing: var(--title-m-semibold-letter-spacing);
    line-height: var(--title-m-semibold-line-height);
    white-space: nowrap;
    font-style: var(--title-m-semibold-font-style);
`


const Description = styled.div`
    //background: yellow;
    width: 1120px;
    height: 445px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 5px;
    grid-row-gap: 7px;

`

const GridRow =styled.div`
      height:100%;
      display: flex;
      flex-direction:column;
      align-items: center;
      justify-content: center;

      color: white;
      font-size: 20px;

`
const StepDescription=styled.div``


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
    //background: green;

`
const ColdBeverageImg = styled.img`
    width: 191px;
    height: 374px;
`

const column1Data = [
    'Which size? Our coffees are carefully selected for quality, flavor, and social impact',
    'Try our special blends. Our coffees are carefully selected for quality, flavor, and social impact',
    'Check out our menu. Our coffees are carefully selected for quality, flavor, and social impact'
];
const column3Data = [
    'Upgrade your coffee. Our coffees are carefully selected for quality, flavor, and social impact',
    'Variety of milk. Our coffees are carefully selected for quality, flavor, and social impact',
    'Do you need more one? Our coffees are carefully selected for quality, flavor, and social impact'
];


const Choice = () => {
    return (
        <>
            <WhereverYouAre3>
                <ComponentTitle>#variety of choices</ComponentTitle>
                <Description>
                    <Column1>
                        <GridRow>
                            {column1Data.map((text, index) => (
                                <StepDescription key={index}>
                                    {text}
                                </StepDescription>
                            ))}
                        </GridRow>
                    </Column1>
                    <Column2>
                        <GridRow>
                            <ColdBeverageImg src={ColdBeverage} />
                        </GridRow>
                    </Column2>
                    <Column3>
                        <GridRow>
                            {column3Data.map((text, index) => (
                                <StepDescription key={index}>
                                    {text}
                                </StepDescription>
                            ))}
                        </GridRow>
                    </Column3>
                </Description>
            </WhereverYouAre3>
        </>
    )
}

export default Choice
