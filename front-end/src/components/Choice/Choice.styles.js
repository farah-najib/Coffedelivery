import styled from 'styled-components'
import ColdBeverage from 'assets/coldbeverage.png'
//import VectorFour from 'assets/vectors/vector4.png'
//import VectorFive from 'assets/vectors/vector5.png'
export const WhereverYouAre3 = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #000000;
    background-size: cover;
    background-position: 50% 50%;
`

export const ComponentTitle = styled.div`
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

export const Description = styled.div`
    //background: yellow;
    width: 1120px;
    height: 445px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 5px;
    grid-row-gap: 7px;
`

export const GridRow = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 20px;
`
export const StepDescription = styled.div``

export const Column1 = styled.div`
    height: 100%;
    //background: blue;
`
export const Column2 = styled.div`
    height: 100%;
    //background: rgb(175, 76, 149);
`
export const Column3 = styled.div`
    height: 100%;
    //background: green;
`
export const ColdBeverageImg = styled.div`
    width: 191px;
    height: 374px;
    background: url(${ColdBeverage});
    // no-repeat center;
    background-size: cover;
`
