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
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    overflow: hidden;

`
export const BannerFooter = styled.footer`
    position: absolute;
    bottom: 0; /* Position the footer at the bottom of the container */
    width: 100%;
    ${mediaQuery('mediumHandset')``}
`

export const CoffeeBean = styled.div`
    width: 100%;
    height: 241px;
    display: flex;


`
export const Cloumn1 = styled.div`
    width: 547px;
    height: 241px;
    display: flex;
`
export const CoffeeBeanImg = styled.div`
    position: relative;
    width: 299px;
    height: 176px;
    background: url(${Coffeebeans});
    background-size: cover;
    animation: float 6s ease-in-out infinite;

    ${mediaQuery('mediumHandset')`
      width: 192px;
      height: 125px;
  `}
`
export const CoffeeBeanImg2 = styled.div`
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

    ${mediaQuery('mediumHandset')`
      width: 192px;
  height: 125px;
  `}
`
export const Cloumn2 = styled.div`
    width: 547px;
    height: 241px;
    display: flex;
`
export const Cloumn3 = styled.div`
    width: 547px;
    height: 241px;
    display: flex;
`

export const Cup = styled.div`
    position: absolute;
    top: -50%;
    padding: 10px;


`

export const Latte = styled.div`
    position: absolute;
    width: 315px;
    height: 315px;
    top: 0;
    left: 547px;
    background-size: cover;
    background-position: 50% 50%;
    background: url(${ElementImg3});
    background-size: cover;

    ${mediaQuery('mediumHandset')`
        width:168px;
        height:168px;
        top:0;
        left: 0px;
  `}
`



export const Americano = styled.div`
    position: absolute;
    width: 200px;
    height: 200px;
    top: 0;
    left: 331px;
    background: url(${ElementImg2});
    background-size: cover;
    ${mediaQuery('mediumHandset')`
  display: none;
  `}
`

export const Cappuccino = styled.div`
    position: absolute;
    width: 200px;
    height: 200px;
    top: 0;
    left: 884px;
    object-fit: cover;
    background: url(${ElementImg});
    background-size: cover;
    ${mediaQuery('mediumHandset')`
  display: none;
  `}
`

export const Content = styled.div`
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 927px;
    height: 234px;
    margin-top: 50px;
    margin-left: 200px;
    margin-right: 150px;

    ${mediaQuery('mediumHandset')`
 width:400px;
 height:449px;
 margin-top: 0px;
    margin-left: 0px;
    margin-right: 0px;
  `}
`

export const Title = styled.div`
    font-family: 'Halant';
    font-weight: 700;
    font-size: 48px;
    text-align: center;
    letter-spacing: 0;
    line-height: 62.4px;
    .craving-the-perfect {
        color: green;
    }

    .lovely {
        color: #ba2d0b;
    }

`

export const Description = styled.p`
    font-family: var(--text-l-regular-font-family);
    font-weight: var(--text-l-regular-font-weight);
    color: var(--base-600);
    font-size: var(--text-l-regular-font-size);
    text-align: center;
    letter-spacing: var(--text-l-regular-letter-spacing);
    line-height: var(--text-l-regular-line-height);
    font-style: var(--text-l-regular-font-style);
`

export const Button = styled.button`
    width: 196px;
    height: 42px;
    background: var(--green-500);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 12px 24px;
    position: relative;
    background-color: var(--green-600);
    border-radius: 8px;

    .text-button {
        color: #ffffff;
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
    position: absolute;
    width: 336px;
    height: 95px;
    background: url(${ArrowImg1});
    background-size: cover;
    top: 100px;
    left: 805px;
`

export const Arrow2 = styled.div`
    position: absolute;
    width: 95px;
    height: 228px;
    background: url(${ArrowImg2});
    background-size: cover;
    top: 17px;
    left: -50px;
`
