import styled from 'styled-components'


export const OurProducts = styled.div`
    position: relative;
    width: 100%;
    background-color: var(--cream-100);
    background-size: cover;
    background-position: 50% 50%;
    padding: clamp(3rem, 7vw, 6rem) clamp(1rem, 5vw, 5rem);
`
export const ComponentTitle = styled.div`
    padding: 0;
    font-family: var(--title-m-semibold-font-family);
    font-weight: var(--title-m-semibold-font-weight);
    color: var(--coffee-900);
    font-size: clamp(1.75rem, 4vw, var(--title-m-semibold-font-size));
    letter-spacing: var(--title-m-semibold-letter-spacing);
    line-height: var(--title-m-semibold-line-height);
    white-space: nowrap;
    font-style: var(--title-m-semibold-font-style);

    @media (max-width: 480px) {
        white-space: normal;
    }
`
export const ProductList = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
    width: min(1120px, 100%);
    margin: 3rem auto 0;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`

export const ProductItem = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    min-height: 112px;
    padding: 1rem;
    background: var(--basewhite);
    border-radius: 28px;
    box-shadow: var(--drop-2);

    @media (max-width: 480px) {
        display: grid;
        grid-template-columns: 64px 1fr;
        align-items: start;
    }
`

export const Image = styled.img`
    width: 76px;
    height: 76px;
    border-radius: 50%;
    object-fit: cover;
    background: var(--cream-200);

    @media (max-width: 480px) {
        width: 64px;
        height: 64px;
    }
`
export const Description = styled.div`
    flex: 1;
    min-width: 0;
`

export const Price = styled.div`
    font-family: var(--title-s-semibold-font-family);
    font-weight: var(--title-s-semibold-font-weight);
    color: var(--red-500);
    font-size: clamp(1.25rem, 2.5vw, var(--title-s-semibold-font-size));
    text-align: center;
    letter-spacing: var(--title-s-semibold-letter-spacing);
    line-height: var(--title-s-semibold-line-height);
    font-style: var(--title-s-semibold-font-style);

    @media (max-width: 480px) {
        grid-column: 2;
        text-align: left;
    }
`

export const Name = styled.div`
    font-family: var(--title-s-semibold-font-family);
    font-weight: var(--title-s-semibold-font-weight);
    color: var(--coffee-900);
    font-size: var(--title-s-semibold-font-size);
    letter-spacing: var(--title-s-semibold-letter-spacing);
    line-height: var(--title-s-semibold-line-height);
    white-space: normal;
    font-style: var(--title-s-semibold-font-style);
`

export const Detail = styled.div`
    font-weight: var(--text-s-regular-font-weight);
    color: var(--coffee-700);
    font-size: var(--text-s-regular-font-size);
    line-height: var(--text-s-regular-line-height);
    position: relative;
    font-family: var(--text-s-regular-font-family);
    letter-spacing: var(--text-s-regular-letter-spacing);
    font-style: var(--text-s-regular-font-style);
    margin-top: 0.25rem;
`
