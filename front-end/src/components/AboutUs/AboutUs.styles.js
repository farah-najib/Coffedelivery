import styled from 'styled-components'
export const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #ba2d0b;
    background-size: cover;
    background-position: 50% 50%;
`

export const ComponentTitle = styled.div`
    padding: 20px;
    font-family: var(--title-m-semibold-font-family);
    font-weight: var(--title-m-semibold-font-weight);
    color: var(--base-900);
    font-size: var(--title-m-semibold-font-size);
    letter-spacing: var(--title-m-semibold-letter-spacing);
    line-height: var(--title-m-semibold-line-height);
    white-space: nowrap;
    font-style: var(--title-m-semibold-font-style);
`

export const Content = styled.div`
    position: relative;
    width: 1118px;
    height: 367px;
    display: flex;
    flex-direction: colunm;
`

export const Gallary = styled.div`
    width: 463px;
    height: 367px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px; /* Spacing between grid items */
`

export const Column2 = styled.div`
    display: grid;
    grid-template-rows: 1fr; /* Two rows of equal height */
    gap: 10px; /* Spacing between rows */
`

export const Photo = styled.img`
    position: relative;
    object-fit: cover;

    &.column1photo {
        width: 219px;
        height: 367px;
    }

    &.column2row1 {
        width: 222px;
        height: 122px;
    }

    &.column2row2 {
        width: 218px;
        height: 226px;
    }
`

export const Description = styled.div`
    position: relative;
    width: 548px;
    height: 367px;
    display: flex;
    flex-direction: column;
`

export const List = styled.div`
    position: relative;
    width: 258px;
    height: 42px;
`

export const ListItem = styled.p`
    position: relative;
    width: 224px;
    font-family: var(--text-m-bold-font-family);
    font-weight: var(--text-m-bold-font-weight);
    color: #ffffff;
    font-size: var(--text-m-bold-font-size);
    letter-spacing: var(--text-m-bold-letter-spacing);
    line-height: var(--text-m-bold-line-height);
    font-style: var(--text-m-bold-font-style);
`

export const Button= styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px 24px;
    position: relative;
    background-color: var(--basewhite);
    border-radius: 8px;
`
