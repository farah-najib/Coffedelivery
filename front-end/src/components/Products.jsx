

import styled from 'styled-components'
import ProductPlaceholder from '../assets/product-placeholder.png'

const OurProducts = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: lightgrey;
    background-size: cover;
    background-position: 50% 50%;
`
const ComponentTitle = styled.div`
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
const ProductList= styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    gap: 20px;
    width: 100%;
    max-width: 600px;

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

     const product = {
         id: 'expressoCoffee',
         name: 'Expresso Coffee',
         description:
             'Lorem ipsum dolor sit amet consectetur. Acondiment mi velit imperdiet cras cras in',
         price: 9.99,
         currency: 'USD',
         quantity: 6
     }
    return (
        <OurProducts>
            <ComponentTitle>#Our products</ComponentTitle>

            <ProductList>
                {Array.from({ length: product.quantity }).map((_, index) => (
                    <ProductItem key={`${product.id}-${index}`}>
                        <Image src={ProductPlaceholder} alt={product.name} />
                        <Description>
                            <Name>{product.name}</Name>
                            <Detail>{product.description}</Detail>
                        </Description>
                        <Price>{`$${product.price.toFixed(2)}`}</Price>
                    </ProductItem>
                ))}
            </ProductList>
        </OurProducts>
    )
}

export default Products
