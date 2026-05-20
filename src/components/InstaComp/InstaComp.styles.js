import styled from 'styled-components'

export const Instagram = styled.div`
    position: relative;
    width: 100%;
    background-color: var(--cream-100);
    background-size: cover;
    background-position: 50% 50%;
    padding: clamp(3rem, 7vw, 6rem) clamp(1rem, 5vw, 5rem);

`

export const  ListOfPost = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;

    @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`

export const  Post = styled.img`
    width: 100%;
    aspect-ratio: 1;
    height: auto;
    object-fit: cover;
    border-radius: 28px;
    box-shadow: var(--drop-2);

`
