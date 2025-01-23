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
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin:100px;
`

export const Gallary = styled.div`
    width: 463px;
    height: 367px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
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
    //position: relative;
    width: 548px;
    height: 367px;
    display: flex;
    flex-direction: column;
    font-family: var(--text-l-regular-font-family);
    font-weight: var(--text-l-regular-font-weight);
    color: var(--base-400);
    font-size: var(--text-l-regular-font-size);
    letter-spacing: var(--text-l-regular-letter-spacing);
    line-height: var(--text-l-regular-line-height);
    font-style: var(--text-l-regular-font-style);

    .title {
        font-family: var(--title-m-semibold-font-family);
        font-weight: var(--title-m-semibold-font-weight);
        color: var(--basewhite);
        font-size: var(--title-m-semibold-font-size);
        letter-spacing: var(--title-m-semibold-letter-spacing);
        line-height: var(--title-m-semibold-line-height);
        white-space: nowrap;
        font-style: var(--title-m-semibold-font-style);
    }
`

export const List = styled.div`
    position: relative;
    width: 258px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
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

export const Button = styled.div`

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px 24px;
    //position: relative;
    // top: 194px;
    // left: 0;
    background-color: var(--basewhite);
    border-radius: 8px;
`
