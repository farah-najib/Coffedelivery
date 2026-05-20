import styled from 'styled-components'
import mediaQuery from 'styles/mediaQuery'

export const Container = styled.div`
    position: relative;
    width: 100%;
    background-color: var(--coffee-800);
    background-size: cover;
    background-position: 50% 50%;
    padding: clamp(3rem, 7vw, 6rem) clamp(1rem, 5vw, 5rem);
`

export const ComponentTitle = styled.div`
    padding: 0;
    font-family: var(--title-m-semibold-font-family);
    font-weight: var(--title-m-semibold-font-weight);
    color: var(--caramel-500);
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
    position: relative;
    width: min(1120px, 100%);
    min-height: 367px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: clamp(2rem, 5vw, 4.5rem);
    margin: 4rem auto 0;

    ${mediaQuery('largeTablet', 'max')`
          flex-direction: column;
          align-items: stretch;
          margin: 2rem auto 0;
  `}
`

export const Gallary = styled.div`
    width: min(463px, 100%);
    min-height: 367px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;

    ${mediaQuery('mediumHandset', 'max')`
        min-height: auto;
    `}
`

export const Column2 = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    gap: 10px;
`

export const Photo = styled.img`
    position: relative;
    object-fit: cover;

    &.column1photo {
        width: 100%;
        height: 367px;
        border-radius: 28px;
    }

    &.column2row1 {
        width: 100%;
        height: 122px;
        border-radius: 24px;
    }

    &.column2row2 {
        width: 100%;
        height: 226px;
        border-radius: 24px;
    }

    ${mediaQuery('mediumHandset', 'max')`
        &.column1photo,
        &.column2row1,
        &.column2row2 {
            height: auto;
            aspect-ratio: 1 / 1;
            border-radius: 18px;
        }
    `}
`

export const Description = styled.div`
    //position: relative;
    width: min(548px, 100%);
    min-height: 367px;
    display: flex;
    flex-direction: column;
    font-family: var(--text-l-regular-font-family);
    font-weight: var(--text-l-regular-font-weight);
    color: var(--cream-300);
    font-size: var(--text-l-regular-font-size);
    letter-spacing: var(--text-l-regular-letter-spacing);
    line-height: var(--text-l-regular-line-height);
    font-style: var(--text-l-regular-font-style);

    .title {
        font-family: var(--title-m-semibold-font-family);
        font-weight: var(--title-m-semibold-font-weight);
        color: var(--cream-100);
        font-size: clamp(2rem, 5vw, 3.25rem);
        letter-spacing: var(--title-m-semibold-letter-spacing);
        line-height: var(--title-m-semibold-line-height);
        white-space: normal;
        font-style: var(--title-m-semibold-font-style);
    }
`

export const List = styled.div`
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    gap: 1rem 1.5rem;
    margin: 2rem 0;

    ${mediaQuery('mediumHandset', 'max')`
          grid-template-columns: 1fr;
  `}
`

export const ListItem = styled.p`
    position: relative;
    width: auto;
    font-family: var(--text-m-bold-font-family);
    font-weight: var(--text-m-bold-font-weight);
    color: var(--cream-100);
    font-size: var(--text-m-bold-font-size);
    letter-spacing: var(--text-m-bold-letter-spacing);
    line-height: var(--text-m-bold-line-height);
    font-style: var(--text-m-bold-font-style);
`

export const Button = styled.div`

    width: fit-content;
    max-width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px 24px;
    //position: relative;
    // top: 194px;
    // left: 0;
    background-color: var(--cream-100);
    border-radius: 999px;
    color: var(--coffee-800);
    font-family: var(--text-s-bold-font-family);
    font-weight: 700;
    text-align: center;
`
