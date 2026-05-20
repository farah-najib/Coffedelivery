import Gallary1 from 'assets/gallary/gallary1.png'
import Gallary3 from 'assets/gallary/gallary3.png'
//import Arrow4 from 'assets/vectors/arrow4.png'

import styled from 'styled-components'
export const ScheduleComponent = styled.div`
    position: relative;
    width: 100%;
    background-color: var(--red-500);
    background-size: cover;
    background-position: 50% 50%;
    padding: clamp(3rem, 7vw, 6rem) clamp(1rem, 5vw, 5rem);
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

    @media (max-width: 480px) {
        white-space: normal;
    }
`

export const Container = styled.div`
    width: min(1120px, 100%);
    margin: 3rem auto 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: clamp(1.5rem, 4vw, 3rem);
    align-items: center;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`

export const LeftSection = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 900px) {
        justify-content: center;
    }
`
export const Img1 = styled.div`
    width: min(344px, 80vw);
    height: auto;
    aspect-ratio: 344 / 548;
    background: url(${Gallary1}) no-repeat center center;
    background-size: cover;
    border-radius: 32px;
`

export const RightSection = styled.div`
    display: flex;
    flex-direction: row-reverse;
    color: var(--cream-100);
    position: relative;
    align-items: center;

    @media (max-width: 900px) {
        justify-content: center;
    }
`
export const Img2 = styled.div`
    width: min(292px, 80vw);
    height: auto;
    aspect-ratio: 292 / 489;
    background: url(${Gallary3}) no-repeat center center;
    background-size: cover;
    border-radius: 32px;
`

export const Hashtag = styled.div`
    font-size: 48px;
    font-weight: bold;
    color: rgba(255, 248, 239, 0.62);
    writing-mode: vertical-lr;
    text-transform: uppercase;

    @media (max-width: 480px) {
        font-size: 32px;
    }
`

export const MiddletSection = styled.div`
    color: var(--cream-100);
`

export const Heading = styled.h1`
    font-family: var(--title-XL-semibold-font-family);
    font-size: clamp(2rem, 4vw, 3.25rem);
    font-weight: bold;
    margin-bottom: 20px;
`

export const Text = styled.p`
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 30px;
`

export const Button = styled.button`
    background-color: var(--cream-100);
    color: var(--red-500);
    font-size: 16px;
    padding: 15px 30px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    border-radius: 999px;
    max-width: 100%;
    text-align: center;
`
