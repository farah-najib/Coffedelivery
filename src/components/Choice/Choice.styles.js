import styled from 'styled-components'
import ColdBeverage from 'assets/coldbeverage.png'
// import VectorFour from 'assets/vectors/vector4.png'
// import VectorFive from 'assets/vectors/vector5.png'
import mediaQuery from 'styles/mediaQuery'
export const WhereverYouAre3 = styled.div`
    position: relative;
    width: 100%;
    background-color: var(--coffee-900);
    background-size: cover;
    background-position: 50% 50%;
    padding: clamp(3rem, 7vw, 6rem) clamp(1rem, 5vw, 5rem);
    overflow: hidden;
`

export const ComponentTitle = styled.div`
    padding: 0;
    font-family: var(--title-m-semibold-font-family);
    font-weight: var(--title-m-semibold-font-weight);
    color: var(--cream-100);
    font-size: clamp(1.75rem, 4vw, var(--title-m-semibold-font-size));
    letter-spacing: var(--title-m-semibold-letter-spacing);
    line-height: var(--title-m-semibold-line-height);
    white-space: nowrap;
    font-style: var(--title-m-semibold-font-style);

    ${mediaQuery('mediumHandset', 'max')`
        white-space: normal;
    `}
`

export const Description = styled.div`
    width: min(1120px, 100%);
    min-height: 445px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: clamp(1.5rem, 4vw, 3rem);
    align-items: center;
    margin: 3rem auto 0;

    ${mediaQuery('largeTablet', 'max')`
        grid-template-columns: 1fr;
    `}
`

export const GridRow = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 20px;
    gap: 1rem;
`
export const StepDescription = styled.div`
    width: 100%;
    padding: 1rem 1.1rem;
    background: rgba(255, 248, 239, 0.08);
    border: 1px solid rgba(255, 248, 239, 0.12);
    border-radius: 22px;
    color: var(--cream-200);
    font-family: var(--text-s-regular-font-family);
    font-size: 0.95rem;
    line-height: 1.55;
`

export const Column1 = styled.div`
    height: 100%;
    
`
export const Column2 = styled.div`
    height: 100%;

`
export const Column3 = styled.div`
    height: 100%;

`
export const ColdBeverageImg = styled.div`
    width: clamp(150px, 42vw, 191px);
    height: auto;
    aspect-ratio: 191 / 374;
    background: url(${ColdBeverage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    filter: drop-shadow(0 22px 35px rgba(0, 0, 0, 0.28));
`
