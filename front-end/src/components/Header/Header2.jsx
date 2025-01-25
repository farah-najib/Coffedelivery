import styled from 'styled-components'

import Avatar from 'assets/avatar.png'
// Styled Components
const FlexRowAba = styled.div`
    position: relative;
    width: 1122px;
    height: 45px;
    margin: 16px 0 0 159px;
    z-index: 20;
`

const Coffee = styled.span`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    position: absolute;
    height: 30.717px;
    top: 0;
    left: 4.742px;
    color: #89937c;
    font-family: 'Dancing Script', var(--default-font-family);
    font-size: 23.55px;
    font-weight: 700;
    line-height: 30.61px;
    text-align: left;
    white-space: nowrap;
    z-index: 8;
`

const Frame = styled.div`
    position: absolute;
    width: 31.37%;
    height: 40px;
    top: 50%;
    left: 34.31%;
    background: #ffffff;
    border: 1px solid #c8c8c8;
    transform: translate(0, -48.75%);
    z-index: 10;
    overflow: hidden;
    border-radius: 8px;
`

const FrameInput = styled.input`
    position: absolute;
    width: 352px;
    height: 40px;
    top: -1px;
    left: -1px;
    background: transparent;
    border: none;
    z-index: 14;
    outline: none;
`

const IconoirSearch = styled.div`
    position: absolute;
    width: 20px;
    height: 20px;
    top: 10px;
    left: 16px;
    // background: url() no-repeat center;
    background-size: cover;
    z-index: 11;
    overflow: hidden;
`

const SearchForCoffeesStores = styled.span`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    position: absolute;
    height: 18px;
    top: 11px;
    left: 46px;
    color: #a7a7a7;
    font-family: Ruda, var(--default-font-family);
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-align: left;
    white-space: nowrap;
    z-index: 12;
`

const IconoirFilter = styled.div`
    position: absolute;
    width: 16px;
    height: 16px;
    top: 12px;
    left: 320px;
    //background: url() no-repeat center;
    background-size: cover;
    z-index: 13;
    overflow: hidden;
`

const Ellipse = styled.div`
    position: absolute;
    width: 40px;
    height: 40px;
    top: 3px;
    left: 1082px;
    background: url(${Avatar})
        no-repeat center;
    background-size: cover;
    z-index: 16;
    border-radius: 50%;
`

const Frame1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: nowrap;
    position: absolute;
    width: 191px;
    height: 31px;
    top: 7px;
    left: 95px;
    z-index: 2;
`

const Address = styled.span`
    flex-shrink: 0;
    flex-basis: auto;
    position: relative;
    height: 13px;
    color: #79797f;
    font-family: Ruda, var(--default-font-family);
    font-size: 10px;
    font-weight: 400;
    line-height: 13px;
    text-align: left;
    white-space: nowrap;
    z-index: 3;
`

const Frame2 = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    flex-shrink: 0;
    gap: 4px;
    position: relative;
    width: 191px;
    z-index: 4;
`

const ChamberlainAvenue = styled.span`
    flex-shrink: 0;
    flex-basis: auto;
    position: relative;
    height: 18px;
    color: #4e4c56;
    font-family: Ruda, var(--default-font-family);
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-align: left;
    white-space: nowrap;
    z-index: 5;
`

const IconoirNavArrowDown = styled.div`
    flex-shrink: 0;
    position: relative;
    width: 12px;
    height: 12px;
    background: url(./assets/images/2ac6bfa5-e129-429b-8632-676d9cbbda34.png)
        no-repeat center;
    background-size: cover;
    z-index: 6;
    overflow: hidden;
`

const Ellipse3 = styled.button`
    position: absolute;
    width: 1.43%;
    height: 35.56%;
    top: 20%;
    left: 93.58%;
    cursor: pointer;
    background: transparent;
    background: no-repeat center;
    background-size: 100% 100%;
    border: none;
    z-index: 19;
    border-radius: 50%;
`

const IconoirSimpleCart = styled.div`
    position: absolute;
    width: 2.14%;
    height: 53.33%;
    top: 26.67%;
    left: 92.25%;
    background: url(./assets/images/377be65b-5ae5-4986-a5bb-8db5264c4d99.png)
        no-repeat center;
    background-size: 100% 100%;
    z-index: 18;
    overflow: hidden;
`

const Text5 = styled.span`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    position: absolute;
    height: 22.22%;
    top: 26.67%;
    left: 94.12%;
    color: #ffffff;
    font-family: Ruda, var(--default-font-family);
    font-size: 8px;
    font-weight: 400;
    line-height: 10px;
    text-align: left;
    white-space: nowrap;
    z-index: 20;
`

const Delivery = styled.span`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    position: absolute;
    height: 14.863px;
    top: 30.137px;
    left: 0;
    color: #262220;
    font-family: Halant, var(--default-font-family);
    font-size: 11.77px;
    font-weight: 300;
    line-height: 14.863px;
    text-align: left;
    white-space: nowrap;
    letter-spacing: 2.83px;
    z-index: 9;
`

// React Component
const CoffeeComponent = () => {
    return (
        <FlexRowAba>

            <Frame>
                <FrameInput />
            </Frame>
            <Ellipse />
            <Frame1>
                <Address>Address</Address>
                <Frame2>
                    <ChamberlainAvenue>
                        Chamberlain Avenue, 360...
                    </ChamberlainAvenue>
                    <IconoirNavArrowDown />
                </Frame2>
            </Frame1>
            <Ellipse3 />
            <IconoirSimpleCart />
            <Text5>2</Text5>

        </FlexRowAba>
    )
}

export default CoffeeComponent
