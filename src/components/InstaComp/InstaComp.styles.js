import styled from 'styled-components'

export const Instagram = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: pink;
    background-size: cover;
    background-position: 50% 50%;
    padding-top: 100px;
    padding-left: 150px;

`

export const  ListOfPost = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, auto);
    gap: 10px;
    width: 100%;
    max-width: 800px;
`

export const  Post = styled.img`
    width: 254px;
    height: 254px;
    object-fit: cover;

`
