

import styled from 'styled-components'
import ProductPlaceholder from '../assets/product-placeholder.png'

const OurProducts = styled.div`
    position: relative;
    width: 1440px;
    height: 634px;
    background-color: lightgrey;
    background-size: cover;
    background-position: 50% 50%;
`
const HeaderTile = styled.header`
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



const ProductItem = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`

const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
`
const Description= styled.div`
display:flex
flex-direction:row;;
`

const Price = styled.div`


        font-family: var(--title-s-semibold-font-family);
        font-weight: var(--title-s-semibold-font-weight);
        color: var(--green-500);
        font-size: var(--title-s-semibold-font-size);
        text-align: center;
        letter-spacing: var(--title-s-semibold-letter-spacing);
        line-height: var(--title-s-semibold-line-height);
        font-style: var(--title-s-semibold-font-style);
`

const Name = styled.div`
    font-family: var(--title-s-semibold-font-family);
        font-weight: var(--title-s-semibold-font-weight);
        color: var(--base-900);
        font-size: var(--title-s-semibold-font-size);
        letter-spacing: var(--title-s-semibold-letter-spacing);
        line-height: var(--title-s-semibold-line-height);
        white-space: nowrap;
        font-style: var(--title-s-semibold-font-style);
`

const Detail = styled.div`
        font-weight: var(--text-s-regular-font-weight);
        color: var(--base-700);
        font-size: var(--text-s-regular-font-size);
        line-height: var(--text-s-regular-line-height);
        position: absolute;
        font-family: var(--text-s-regular-font-family);
        letter-spacing: var(--text-s-regular-letter-spacing);
        font-style: var(--text-s-regular-font-style);
`


const Products = () => {
    return (
        
            <OurProducts>
                <HeaderTile>#Our products</HeaderTile>

                <ProductItem>
                    <Image src={ProductPlaceholder} alt="Expresso coffee" />
                    <Description>
                        <Name>Expresso coffee</Name>
                        <Detail>
                            Lorem ipsum dolor sit amet consectetur. Acondiment
                            mi velit imperdiet cras cras in
                        </Detail>
                    </Description>
                    <Price>$9.99</Price>
                </ProductItem>
            </OurProducts>

    )
}

export default Products
