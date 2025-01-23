import styled from 'styled-components'

export const  HowItWorks = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #c8aaaa;
    background-size: cover;
    background-position: 50% 50%;
    // display:flex;
    // flex-direction:column;
    // justify-content:center;
`

export const  ComponentTitle = styled.div`
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
    width: 1120px;
    height: 446px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, auto);
    gap: 5px;
    width: 100%;
    padding-top: 100px;
    padding-left: 150px;
`
export const  Column1 = styled.div`
    height: 100%;
    //background: blue;
`
export const  Column2 = styled.div`
    height: 100%;
    //background: rgb(175, 76, 149);
`
export const  Column3 = styled.div`
    height: 100%;
    // background: green;
`
export const  Item = styled.div`
    width: 352px;
    height: 196px;
    object-fit: cover;
    // display: flex;
    // flex-direction: row;
    // background:white;
    color: black;
    font-size: 20px;
`
export const  Card = styled.div`
    background-color: var(--basewhite);
    border-radius: 16px;
    box-shadow: var(--drop-card);
    width: 352px;
    height: 196px;
`
export const  CardHeader = styled.div``
export const  CardTitle = styled.div`
    font-family: var(--title-m-semibold-font-family);
    font-weight: var(--title-m-semibold-font-weight);
    color: var(--base-900);
    font-size: var(--title-m-semibold-font-size);
    letter-spacing: var(--title-m-semibold-letter-spacing);
    line-height: var(--title-m-semibold-line-height);
    font-style: var(--title-m-semibold-font-style);
`

export const  CardBody = styled.div`
    font-family: var(--text-m-regular-font-family);
    font-weight: var(--text-m-regular-font-weight);
    color: var(--base-600);
    font-size: var(--text-m-regular-font-size);
    letter-spacing: var(--text-m-regular-letter-spacing);
    //line-height: var(--text-m-regular-line-height);
    font-style: var(--text-m-regular-font-style);
`
export const  SpecialItem = styled.div`
    width: 352px;
    height: 196px;
    display: flex;
    flex-wrap: wrap;
    gap: 1px;
    //padding: 10px;
`

export const  InnerItem = styled.div`
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
export const  Img = styled.img`
    width: 48px;
    height: 48px;
`
