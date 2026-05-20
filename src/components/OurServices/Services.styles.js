import CoffeeCup from 'assets/coffeecup.png'
import CoffeeBag from 'assets/coffeebag.png'
import ArrowEight from 'assets/vectors/arrow8.png'
import styled from 'styled-components'
import mediaQuery from 'styles/mediaQuery'

export const OurServices = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: var(--cream-100);
    background-size: cover;
    background-position: 50% 50%;
    padding: clamp(3rem, 7vw, 6rem) clamp(1rem, 5vw, 5rem);

    ${mediaQuery('mediumHandset', 'max')`

     height: auto;

      `}
`

export const ComponentTitle = styled.div`
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
    gap: clamp(2rem, 5vw, 4rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${mediaQuery('mediumHandset', 'max')`


        gap:15px
      `}
`

export const ListOfCard = styled.div`
    display: flex;
    flex-direction: row;
    gap: 32px;
    width: min(1120px, 100%);
    justify-content: center;

    ${mediaQuery('largeTablet', 'max')`

        flex-direction: column;
        gap:15px;
        align-items: stretch;
      `}
`
export const Card = styled.div`
    width: 100%;
    max-width: 352px;
    min-height: 248px;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 28px;
    box-shadow: var(--drop-2);
    justify-content: center;
    align-items: center;
    padding: 1.5rem 1rem;

    ${mediaQuery('largeTablet', 'max')`
        max-width: none;
    `}
`

export const CardHeader = styled.i`
    font-size: 56px;
    color: var(--red-500);
    display: inline-block;
`

export const Title = styled.div`
    font-family: var(--title-s-semibold-font-family);
    font-weight: var(--title-s-semibold-font-weight);
    color: var(--coffee-900);
    font-size: var(--title-s-semibold-font-size);
    letter-spacing: var(--title-s-semibold-letter-spacing);
    line-height: var(--title-s-semibold-line-height);
    white-space: nowrap;
    font-style: var(--title-s-semibold-font-style);
`

export const Description = styled.p`
    width: min(320px, 100%);
    font-family: var(--text-s-regular-font-family);
    font-weight: var(--text-s-regular-font-weight);
    color: var(--coffee-700);
    font-size: var(--text-s-regular-font-size);
    text-align: center;
    letter-spacing: var(--text-s-regular-letter-spacing);
    line-height: var(--text-s-regular-line-height);
    font-style: var(--text-s-regular-font-style);
`

export const Button = styled.div`
    padding: 12px 24px;
    border-radius: 999px;
    border: 1px solid rgba(111, 66, 39, 0.22);
    color: var(--coffee-800);
    font-weight: 700;
`

export const CheckOurProducts = styled.div`
    width: min(1120px, 100%);
    min-height: 260px;
    position: relative;
    display: grid;
    grid-template-columns: 260px 210px 1fr;
    gap: clamp(1rem, 4vw, 2rem);
    align-items: center;
    background-color: var(--coffee-900);

    color: var(--cream-100);
    border-radius: 32px;
    padding: 1.5rem clamp(1rem, 4vw, 2.5rem);
    overflow: hidden;

    ${mediaQuery('largeTablet', 'max')`

    width:100%;
    min-height: auto;
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
      `}
`

export const Column1 = styled.div`
    height: 100%;
`
export const Column2 = styled.div`
    height: 100%;

`
export const Column3 = styled.div`
    height: 100%;

    width: min(589px, 100%);
    gap:22px;
    display: flex;
    flex-direction: column;



    .title {

        font-size: clamp(2rem, 6vw, var(--title-XL-semibold-font-size));
        line-height: var(--title-XL-semibold-line-height);
        font-family: var(--title-XL-semibold-font-family);
        font-weight: var(--title-XL-semibold-font-weight);
        color: var(--cream-100);
        letter-spacing: var(--title-XL-semibold-letter-spacing);
        font-style: var(--title-XL-semibold-font-style);
    }
    .paragraph {
        font-family: var(--text-m-regular-font-family);
        font-weight: var(--text-m-regular-font-weight);
        color: var(--cream-300);
        font-size: var(--text-m-regular-font-size);
        letter-spacing: var(--text-m-regular-letter-spacing);
        line-height: var(--text-m-regular-line-height);
        font-style: var(--text-m-regular-font-style);
    }
`

export const TryButton = styled.button`
    position: relative;
    width: fit-content;
    margin-top: -1px;
    font-family: var(--text-m-bold-font-family);
    font-weight: var(--text-m-bold-font-weight);
    color: var(--coffee-900);
    background: var(--cream-100);
    border-radius: 999px;
    padding: 12px 22px;
    font-size: var(--text-m-bold-font-size);
    letter-spacing: var(--text-m-bold-letter-spacing);
    line-height: var(--text-m-bold-line-height);
    white-space: nowrap;
    font-style: var(--text-m-bold-font-style);
    text-align: center;
`

export const ArrowImg = styled.div`
    width: min(245px, 100%);
    height: 148px;
    background: url(${ArrowEight}) no-repeat center;
    background-size: cover;
`

export const CupBagImg = styled.div`
    // position: absolute;
    position: relative;
    width: 243px;
    height: 283px;

    ${mediaQuery('mediumHandset', 'max')`
        transform: scale(0.88);
        transform-origin: center;
    `}
`

export const Bag = styled.div`
    //position: absolute;
    width: 144px;
    height: 283px;
    background: url(${CoffeeBag}) no-repeat center;
    background-size: cover;
`

export const Cup = styled.div`
    position: absolute;
    width: 126px;
    height: 190px;
    background: url(${CoffeeCup}) no-repeat center;
    background-size: cover;
    top: 93px;
    left: 117px;
`
