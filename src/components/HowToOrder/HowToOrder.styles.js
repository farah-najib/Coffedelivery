import styled from 'styled-components'
import mediaQuery from 'styles/mediaQuery'

export const  HowItWorks = styled.div`
    position: relative;
    width: 100%;
    background-color: var(--cream-200);
    background-size: cover;
    background-position: 50% 50%;
    padding: clamp(3rem, 7vw, 6rem) clamp(1rem, 5vw, 5rem);
`

export const  ComponentTitle = styled.div`
    padding: 0;
    font-family: var(--title-m-semibold-font-family);
    font-weight: var(--title-m-semibold-font-weight);
    color: var(--coffee-900);
    font-size: clamp(1.75rem, 4vw, var(--title-m-semibold-font-size));
    letter-spacing: var(--title-m-semibold-letter-spacing);
    line-height: var(--title-m-semibold-line-height);
    white-space: nowrap;
    font-style: var(--title-m-semibold-font-style);

    ${mediaQuery('mediumHandset', 'max')`
        white-space: normal;
    `}
`
export const Content = styled.div`
    width: min(1120px, 100%);
    min-height: 446px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin: 3rem auto 0;

    ${mediaQuery('largeTablet', 'max')`

        display:flex;
        flex-direction:column;
        padding-top: 0px;
        padding-left: 0px;
        gap:1rem;
        `}
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    ${mediaQuery('mediumHandset', 'max')`

        height:auto
        `}
`

export const Item = styled.div`
    width: 100%;
    min-height: 196px;
    object-fit: cover;
    color: var(--coffee-900);
    font-size: 20px;

    ${mediaQuery('mediumHandset', 'max')`

    min-height: auto;
       `}
`
export const  Card = styled.div`
    background-color: var(--basewhite);
    border-radius: 28px;
    box-shadow: var(--drop-card);
    width: 100%;
    min-height: 196px;
    padding: 1.5rem;
`
export const  CardHeader = styled.div`
    img {
        width: 36px;
        height: 36px;
    }
`
export const  CardTitle = styled.div`
    font-family: var(--title-m-semibold-font-family);
    font-weight: var(--title-m-semibold-font-weight);
    color: var(--coffee-900);
    font-size: clamp(1.6rem, 3vw, var(--title-m-semibold-font-size));
    letter-spacing: var(--title-m-semibold-letter-spacing);
    line-height: var(--title-m-semibold-line-height);
    font-style: var(--title-m-semibold-font-style);
`

export const  CardBody = styled.div`
    font-family: var(--text-m-regular-font-family);
    font-weight: var(--text-m-regular-font-weight);
    color: var(--coffee-700);
    font-size: var(--text-m-regular-font-size);
    letter-spacing: var(--text-m-regular-letter-spacing);
    //line-height: var(--text-m-regular-line-height);
    font-style: var(--text-m-regular-font-style);
`
export const SpecialItem = styled.div`
    width: 100%;
    min-height: 196px;
    display: flex;
    flex-wrap: wrap;
    gap: 1px;
    //padding: 10px;
`

export const InnerItem = styled.div`
    box-sizing: border-box;
    padding: 20px;
    color: white;
    text-align: center;
    border-radius: 5px;
    &:nth-child(1) {
        flex: 1 1 calc(50% - 10px);
    }

    &:nth-child(2) {
        flex: 1 1 calc(50% - 10px);
    }

    &:nth-child(3) {
        flex: 1 1 100%;
        text-align: center;
    }

`
export const Img = styled.img`
    width: 96px;
    height: 96px;

    ${mediaQuery('mediumHandset', 'max')`
        display:none`}
`

export const ArrowImg = styled.img`
   
       ${mediaQuery('mediumHandset', 'max')`
        display:none`}
`
