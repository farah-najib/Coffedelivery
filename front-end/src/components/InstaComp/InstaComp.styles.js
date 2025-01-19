import styled from 'styled-components'

export const  Instagram = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: pink;
    background-size: cover;
    background-position: 50% 50%;
`

export const  ListOfPost = styled.div`
    position: relative;
    // width: 1120px;
    // height: 540px;
    // display: grid;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, auto);
    gap: 10px;
    width: 100%;
    max-width: 800px;
`

export const  Post = styled.img`
    // position: absolute;
    width: 254px;
    height: 254px;
    object-fit: cover;
    // top: ${(props) => props.top || '0'};
    // left: ${(props) => props.left || '0'};
`
