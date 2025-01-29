import styled from 'styled-components'

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
    background-color: lavenderblush;
    width: 256px;
    height: 214px;
    border-radius: 16px;
    margin: 84px 0 0 160px;
`

const ImgProduct = styled.div`
    position: absolute;
    width: 104px;
    height: 104px;
    margin: -60px;
    top: 0px;
    background: url(./assets/images/820404aa7446d73e56ae949340722246fcae03d7.png)
        no-repeat center;
    background-size: cover;
`

const Tags = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    background-color: plum;
    width: 146px;
    height: 30px;
    margin-top: 50px;
`

const ButtonTag = styled.button`
    justify-content: center;
    position: relative;
    width: 69px;
    padding: 4px 8px;
    cursor: pointer;
    background: #9caa9c;
    border: none;
    border-radius: 100px;
    color: #ffffff;
    font-family: Ruda, sans-serif;
    font-size: 10px;
    font-weight: 700;
    line-height: 13px;
    text-align: left;
    white-space: nowrap;
`

const ProductName = styled.span`
    display: block;
    position: relative;
    height: 18px;
    color: #393846;
    font-family: Ruda, sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    text-align: left;
    white-space: nowrap;
`

const Description = styled.span`
    position: relative;
    width: 227px;
    height: 23px;
    margin: 4px 0 0 17px;
    color: #79797f;
    font-family: Ruda, sans-serif;
    font-size: 10px;
    font-weight: 400;
    line-height: 13px;
    text-align: center;
    z-index: 85;
`

const FlexRow = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    background-color: pink;
    position: relative;
    width: 224px;
    height: 34px;
    z-index: 83;
`

const PriceContainer = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    width: 69px;
    height: 31px;
    font-family: Roboto, sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 31px;
    text-align: right;
    white-space: nowrap;
    z-index: 76;
`

const Currency = styled.span`
    color: #393846;
    font-family: Ruda, sans-serif;
    font-size: 10px;
    font-weight: 400;
    line-height: 31.2px;
    text-align: right;
`

const Price = styled.span`
    color: #1d1c25;
    font-family: Halant, sans-serif;
    font-size: 24px;
    font-weight: 600;
    line-height: 37.8px;
    text-align: right;
`

const AddButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    position: relative;
    width: 97px;
    padding: 8px 16px;
    cursor: pointer;
    background: transparent;
    border: 1px solid #4e5b3d;
    z-index: 83;
    border-radius: 8px;
    color: #4e5b3d;
    font-family: Ruda, sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    text-align: left;
    white-space: nowrap;
`

const ProductCard = () => {
    return (
        <Card>
            <ImgProduct />
            <Tags>
                <ButtonTag>Tradicional</ButtonTag>
                <ButtonTag>Tradicional</ButtonTag>
            </Tags>
            <ProductName>Expresso Tradicional</ProductName>
            <Description>
                The traditional coffee made with hot water and ground grains
            </Description>
            <FlexRow>
                <PriceContainer>
                    <Currency>CAD$</Currency>
                    <Price>9.90</Price>
                </PriceContainer>
                <AddButton>Add order</AddButton>
            </FlexRow>
        </Card>
    )
}

export default ProductCard
