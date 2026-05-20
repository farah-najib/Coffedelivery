import styled from 'styled-components'
import ArrowImg2 from 'assets/vectors/arrow2.png'
import ArrowImg1 from 'assets/vectors/arrow.png'
import Coffeebeans from 'assets/coffee-beans.png'
import ElementImg from 'assets/element.png'
import ElementImg2 from 'assets/element2.png'
import ElementImg3 from 'assets/element3.png'
import mediaQuery from 'styles/mediaQuery'

export const BannerContainer = styled.div`
    position: relative;
    width: 100%;
    min-height: calc(100vh - 77px);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;
    padding: clamp(3rem, 8vw, 6.5rem) 1.25rem 18rem;
    background:
        radial-gradient(circle at 12% 18%, rgba(214, 163, 95, 0.22), transparent 28%),
        linear-gradient(180deg, var(--cream-100) 0%, var(--cream-200) 100%);
`
export const BannerFooter = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
    ${mediaQuery('desktop')`

   `}
`
export const CoffeeBean = styled.div`
    width: 100%;
    height: 220px;
    display: flex;
    justify-content: center;
    opacity: 0.36;
`
export const Cloumn1 = styled.div`
    width: 33.33%;
    height: 220px;
    display: flex;
`
export const CoffeeBeanImg = styled.div`
    position: absolute;
    width: 299px;
    height: 176px;
    background: url(${Coffeebeans});
    background-size: cover;
    animation: float 6s ease-in-out infinite;

    position: relative;
`
export const CoffeeBeanImg2 = styled.div`
    position: absolute;
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

    position: relative;
`
export const Cloumn2 = styled.div`
    width: 33.33%;
    height: 220px;
    display: flex;
`
export const Cloumn3 = styled.div`
    width: 33.33%;
    height: 220px;
    display: flex;
`

export const Cup = styled.div`
    position: absolute;
    bottom: 42px;
    left: 50%;
    width: min(760px, 90vw);
    height: 245px;
    transform: translateX(-50%);
`

export const Latte = styled.div`
    position: absolute;
    width: clamp(190px, 28vw, 315px);
    height: clamp(190px, 28vw, 315px);
    top: -22px;
    left: 50%;
    transform: translateX(-50%);
    background-size: cover;
    background-position: 50% 50%;
    background: url(${ElementImg3});
    background-size: cover;
`

export const Americano = styled.div`
    position: absolute;
    width: clamp(130px, 18vw, 200px);
    height: clamp(130px, 18vw, 200px);
    top: 38px;
    left: 12%;
    background: url(${ElementImg2});
    background-size: cover;
`

export const Cappuccino = styled.div`
    position: absolute;
    width: clamp(130px, 18vw, 200px);
    height: clamp(130px, 18vw, 200px);
    top: 38px;
    right: 12%;
    object-fit: cover;
    background: url(${ElementImg});
    background-size: cover;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: min(760px, 100%);
    text-align: center;
    position: relative;
    z-index: 2;
`

export const Title = styled.div`
    font-family: var(--title-XL-bold-font-family);
    font-weight: 700;
    font-size: clamp(2.35rem, 7vw, 4.6rem);
    text-align: center;
    letter-spacing: 0;
    line-height: 1.02;
    color: var(--coffee-900);
    .craving-the-perfect {
        color: var(--coffee-900);
    }

    .lovely {
        color: var(--red-500);
    }
`

export const Description = styled.p`
    max-width: 520px;
    margin: 1.25rem auto 0;
    font-family: var(--text-l-regular-font-family);
    font-weight: var(--text-l-regular-font-weight);
    color: var(--coffee-700);
    font-size: clamp(1rem, 2vw, 1.15rem);
    text-align: center;
    letter-spacing: var(--text-l-regular-letter-spacing);
    line-height: 1.65;
    font-style: var(--text-l-regular-font-style);
`

export const Button = styled.button`
    min-width: 218px;
    min-height: 50px;
    margin-top: 1.75rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 14px 24px;
    position: relative;
    background-color: var(--coffee-800);
    border-radius: 999px;
    box-shadow: var(--drop-card);
    transition: transform 0.2s ease, background-color 0.2s ease;
    &:hover {
        transform: translateY(-2px);
        background-color: var(--red-500);
    }
    .text-button {
        color: var(--cream-100);
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
    }
`

export const Arrow1 = styled.div`
    display: none;
    width: 336px;
    height: 95px;
    background: url(${ArrowImg1});
    background-size: cover;
    top: 200px;
    left: 1000px;

    ${mediaQuery('smallDesktop')`
    display: block;
    position: absolute;
    opacity: 0.5;
        `}
`

export const Arrow2 = styled.div`
    display: none;
    width: 95px;
    height: 228px;
    background: url(${ArrowImg2});
    background-size: cover;
    top: 100px;
    left: 0px;

    ${mediaQuery('smallDesktop')`
    display: block;
    position: absolute;
    opacity: 0.45;
        `}
`
