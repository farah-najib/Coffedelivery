

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

const DarkGreyTerrazzoWrapper = styled.div`
    position: absolute;
    width: 212px;
    height: 42px;
    top: 120px;
    left: 160px;
`

const DarkGreyTerrazzo2 = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    font-family: var(--title-m-semibold-font-family);
    font-weight: var(--title-m-semibold-font-weight);
    color: var(--base-900);
    font-size: var(--title-m-semibold-font-size);
    letter-spacing: var(--title-m-semibold-letter-spacing);
    line-height: var(--title-m-semibold-line-height);
    white-space: nowrap;
    font-style: var(--title-m-semibold-font-style);
`

const Group46 = styled.div`
    position: absolute;
    width: 544px;
    height: 80px;
    top: 338px;
    left: 160px;
`

const TextWrapper42 = styled.div`
    position: absolute;
    top: -1px;
    left: 96px;
    font-family: var(--title-s-semibold-font-family);
    font-weight: var(--title-s-semibold-font-weight);
    color: var(--base-900);
    font-size: var(--title-s-semibold-font-size);
    letter-spacing: var(--title-s-semibold-letter-spacing);
    line-height: var(--title-s-semibold-line-height);
    white-space: nowrap;
    font-style: var(--title-s-semibold-font-style);
`

const TextWrapper43 = styled.div`
    position: absolute;
    width: 64px;
    top: -1px;
    left: 480px;
    font-family: var(--title-s-semibold-font-family);
    font-weight: var(--title-s-semibold-font-weight);
    color: var(--green-500);
    font-size: var(--title-s-semibold-font-size);
    text-align: center;
    letter-spacing: var(--title-s-semibold-letter-spacing);
    line-height: var(--title-s-semibold-line-height);
    font-style: var(--title-s-semibold-font-style);
`



const ElementFlat = styled.img`
    position: absolute;
    width: 55px;
    height: 55px;
    top: 13px;
    left: 13px;
    object-fit: cover;
`

const TextWrapper44 = styled.p`
    width: 352px;
    top: 38px;
    left: 96px;
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
        <>
            <OurProducts>
                <DarkGreyTerrazzoWrapper>
                    <DarkGreyTerrazzo2>#Our products</DarkGreyTerrazzo2>
                </DarkGreyTerrazzoWrapper>
                <Group46>
                    <TextWrapper42>Expresso coffee</TextWrapper42>
                    <TextWrapper43>$9.99</TextWrapper43>

                        <ElementFlat
                            src={ProductPlaceholder}
                            alt="Expresso coffee"
                        />

                    <TextWrapper44>
                        Lorem ipsum dolor sit amet consectetur. Acondiment mi
                        velit imperdiet cras cras in
                    </TextWrapper44>
                </Group46>
                
            </OurProducts>
        </>
    )
}

export default Products
