import styled from 'styled-components'
import ElementImg3 from '../assets/element4.png'
import ElementImg from '../assets/element.png'
import ArrowFive from '../assets/vectors/arrow5.svg'
import ArrowSex from '../assets/vectors/arrow6.png'
import ArrowSeven from '../assets/vectors/arrow7.svg'
import Square from '../assets/vectors/Square.svg'
const HowItWorks = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #C8AAAA;
    background-size: cover;
    background-position: 50% 50%;
    // display:flex;
    // flex-direction:column;
    // justify-content:center;
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


const Content = styled.div`
    width: 1120px;
    height: 446px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, auto);
    gap: 5px;
    width: 100%;
    max-width: 800px;
`
const Column1 = styled.div`
    height: 100%;
    //background: blue;
`
const Column2 = styled.div`
    height: 100%;
    //background: rgb(175, 76, 149);
`
const Column3 = styled.div`
    height: 100%;
   // background: green;
`
const Item = styled.div`

    width: 254px;
    height: 254px;
    object-fit: cover;
    // display: flex;
    // flex-direction: row;
   // background:white;
    color: black;
    font-size: 20px;
`
const Card = styled.div`
    background-color: var(--basewhite);
    border-radius: 16px;
    box-shadow: var(--drop-card);
`
const CardHeader = styled.div`

`
const CardTitle = styled.div`
    width: 352px;
    height: 196px;
    font-family: var(--title-m-semibold-font-family);
    font-weight: var(--title-m-semibold-font-weight);
    color: var(--base-900);
    font-size: var(--title-m-semibold-font-size);
    letter-spacing: var(--title-m-semibold-letter-spacing);
    line-height: var(--title-m-semibold-line-height);
    font-style: var(--title-m-semibold-font-style);
`

const CardBody = styled.div`
        font-family: var(--text-m-regular-font-family);
        font-weight: var(--text-m-regular-font-weight);
        color: var(--base-600);
        font-size: var(--text-m-regular-font-size);
        letter-spacing: var(--text-m-regular-letter-spacing);
        line-height: var(--text-m-regular-line-height);
        font-style: var(--text-m-regular-font-style);
`
 const SpecialItem = styled.div`
     //   width:100%;
     // //  background:yellow;
     // //     //grid-column: 1 / span 2; /* Spans 2 columns */
     // //     //grid-row: 1 / span 2; /* Spans 2 rows */
     //      display: flex;
     //      flex-direction:row;
     //  //grid-template-columns: 1fr 1fr; /* Inner grid: 2 columns */
     // //      grid-template-rows: auto auto; /* Inner grid: 2 rows */
     // //      background-color: #f0f0f0;
     // //      gap: 2px;

     display: flex;
     flex-wrap: wrap; /* Allows items to wrap */
     gap: 1px; /* Adds spacing between items */
     background: #f0f0f0; /* Background for the container */
     padding: 10px; /* Padding for container */
 `

 const InnerItem = styled.div`
     //  text-align: center;
     //  &:nth-child(1) {
     //      grid-column: span 1;
     //  }

     box-sizing: border-box; /* Consistent sizing */
     padding: 20px;
     color: white;
     text-align: center;
     border-radius: 5px; /* Optional rounded corners */
     &:nth-child(1) {
        // background: #3498db; /* Blue */
         flex: 1 1 calc(50% - 10px); /* Half-width minus gap */
     }

     &:nth-child(2) {
         //background: #3498db; /* Blue */
         flex: 1 1 calc(50% - 10px); /* Half-width minus gap */
     }

     &:nth-child(3) {
         //background: #2ecc71; /* Green */
         flex: 1 1 100%; /* Full width */
         text-align: center; /* Center text */
     }
 `
const Img = styled.img`
    width: 48px;
    height: 48px;
`

const HowToOrder = () => {
    return (
        <>
            <HowItWorks>
                <ComponentTitle>#order wherever you are</ComponentTitle>
                <Content>
                    <Column1>
                        <Item>
                            <Card>
                                <CardHeader>
                                    <img src={Square} />
                                </CardHeader>
                                <CardTitle> Set your address</CardTitle>
                                <CardBody>
                                    We use your address to find best partners
                                    and stores near to you.
                                </CardBody>
                            </Card>
                        </Item>

                        <Item>
                            <img src={ArrowSeven} />
                        </Item>
                    </Column1>

                    <Column2>
                        <Item>
                            <SpecialItem>
                                <InnerItem>
                                    <Img src={ElementImg} />
                                </InnerItem>
                                <InnerItem>
                                    <Img src={ElementImg3} />
                                </InnerItem>

                                <InnerItem>
                                    <img
                                        src={ArrowFive}
                                        style={{ width: 200, height: 100 }}
                                    />
                                </InnerItem>
                            </SpecialItem>
                        </Item>

                        <Item>
                            <Card>
                                <CardHeader>
                                    <img src={Square} />
                                </CardHeader>
                                <CardTitle> It is coffee time </CardTitle>
                                <CardBody>
                                    {' '}
                                    After purchase, wait a few mins for your
                                    delicious and warm coffee
                                </CardBody>
                            </Card>
                        </Item>
                    </Column2>

                    <Column3>
                        <Item>
                            <Card>
                                <CardHeader>
                                    <img src={Square} />
                                </CardHeader>
                                <CardTitle>Add to cart</CardTitle>
                                <CardBody>
                                    {' '}
                                    Customize the flavour, roast, size, and type
                                    to your preference.
                                </CardBody>
                            </Card>
                        </Item>

                        <Item>
                            <img
                                src={ArrowSex}
                                style={{ width: 200, height: 100 }}
                            />
                        </Item>
                    </Column3>
                </Content>
            </HowItWorks>

            {/* <Group2>
                        <AtomProducts>
                            <Macchiato src="https://c.animaapp.com/EXuBewV4/img/macchiato-1@2x.png" />
                        </AtomProducts>
                        <AtomProducts2 />
                        <Vector src="https://c.animaapp.com/EXuBewV4/img/vector-4.svg" />
                    </Group2>
                    <Img src="https://c.animaapp.com/EXuBewV4/img/group-32@2x.png" />
                    <Group3>
                        <TextWrapper>Add to cart</TextWrapper>
                        <P>
                            Customize the flavour, roast, size, and type to your
                            preference.
                        </P>
                        <GroupWrapper>
                            <OverlapGroupWrapper>
                                <OverlapGroup>
                                    <Rectangle src="https://c.animaapp.com/EXuBewV4/img/rectangle-22-2.svg" />
                                    <Rectangle2 src="https://c.animaapp.com/EXuBewV4/img/rectangle-23-2.svg" />
                                    <AtomIcons src="https://c.animaapp.com/EXuBewV4/img/atom-icons-1.svg" />
                                </OverlapGroup>
                            </OverlapGroupWrapper>
                        </GroupWrapper>
                    </Group3>
                    <Frame src="https://c.animaapp.com/EXuBewV4/img/frame-44.svg" />
                    <Group4>
                        <TextWrapper>Set your address</TextWrapper>
                        <P>
                            We use your address to find best partners and stores
                            near to you.
                        </P>
                        <GroupWrapper>
                            <OverlapGroupWrapper>
                                <OverlapGroup>
                                    <Rectangle src="https://c.animaapp.com/EXuBewV4/img/rectangle-22-2.svg" />
                                    <Rectangle2 src="https://c.animaapp.com/EXuBewV4/img/rectangle-23-2.svg" />
                                    <AtomIcons src="https://c.animaapp.com/EXuBewV4/img/atom-icons-2.svg" />
                                </OverlapGroup>
                            </OverlapGroupWrapper>
                        </GroupWrapper>
                    </Group4>
                    <Group5>
                        <TextWrapper>It is coffee time</TextWrapper>
                        <P>
                            After purchase, wait a few mins for your delicious
                            and warm coffee
                        </P>
                        <GroupWrapper>
                            <OverlapGroupWrapper>
                                <OverlapGroup>
                                    <Rectangle src="https://c.animaapp.com/EXuBewV4/img/rectangle-22-2.svg" />
                                    <Rectangle2 src="https://c.animaapp.com/EXuBewV4/img/rectangle-23-2.svg" />
                                    <AtomIcons src="https://c.animaapp.com/EXuBewV4/img/atom-icons-3.svg" />
                                </OverlapGroup>
                            </OverlapGroupWrapper>
                        </GroupWrapper>
                    </Group5> */}
        </>
    )
}

export default HowToOrder





// const Group = styled.div`
//     position: relative;
//     width: 1122px;
//     height: 568px;
//     top: 120px;
//     left: 159px;
// `

// const Div = styled.div`
//     position: absolute;
//     width: 1120px;
//     height: 446px;
//     top: 122px;
//     left: 0;
// `
// const Group2 = styled.div`
//     position: absolute;
//     width: 366px;
//     height: 206px;
//     top: 0;
//     left: 370px;
// `

// const AtomProducts = styled.div`
//     position: absolute;
//     width: 116px;
//     height: 116px;
//     top: 16px;
//     left: 16px;
//     transform: rotate(19.36deg);
// `

// const Macchiato = styled.img`
//     position: absolute;
//     width: 148px;
//     height: 148px;
//     top: -16px;
//     left: -16px;
//     transform: rotate(-19.36deg);
//     object-fit: cover;
// `

// const AtomProducts2 = styled.div`
//     position: absolute;
//     width: 116px;
//     height: 116px;
//     top: 19px;
//     left: 250px;
//     background-image: url(https://c.animaapp.com/EXuBewV4/img/mocaccino-1@2x.png);
//     background-size: cover;
//     background-position: 50% 50%;
// `

// const Vector = styled.img`
//     position: absolute;
//     width: 350px;
//     height: 68px;
//     top: 138px;
//     left: 16px;
// `

// const Img = styled.img`
//     position: absolute;
//     width: 348px;
//     height: 200px;
//     top: 246px;
//     left: 772px;
// `

// const Group3 = styled.div`
//     position: absolute;
//     width: 352px;
//     height: 196px;
//     top: 0;
//     left: 768px;
//     background-color: var(--basewhite);
//     border-radius: 16px;
//     box-shadow: var(--drop-card);
// `

// const TextWrapper = styled.div`
//     position: absolute;
//     width: 304px;
//     top: 79px;
//     left: 24px;
//     font-family: var(--title-m-semibold-font-family);
//     font-weight: var(--title-m-semibold-font-weight);
//     color: var(--base-900);
//     font-size: var(--title-m-semibold-font-size);
//     letter-spacing: var(--title-m-semibold-letter-spacing);
//     line-height: var(--title-m-semibold-line-height);
//     font-style: var(--title-m-semibold-font-style);
// `

// const P = styled.p`
//     position: absolute;
//     width: 304px;
//     top: 129px;
//     left: 24px;
//     font-family: var(--text-m-regular-font-family);
//     font-weight: var(--text-m-regular-font-weight);
//     color: var(--base-600);
//     font-size: var(--text-m-regular-font-size);
//     letter-spacing: var(--text-m-regular-letter-spacing);
//     line-height: var(--text-m-regular-line-height);
//     font-style: var(--text-m-regular-font-style);
// `

// const GroupWrapper = styled.div`
//     position: absolute;
//     width: 44px;
//     height: 40px;
//     top: 24px;
//     left: 27px;
// `

// const OverlapGroupWrapper = styled.div`
//     height: 40px;
// `

// const OverlapGroup = styled.div`
//     position: relative;
//     width: 44px;
//     height: 40px;
// `

// const Rectangle = styled.img`
//     position: absolute;
//     width: 39px;
//     height: 34px;
//     top: 0;
//     left: 0;
// `

// const Rectangle2 = styled.img`
//     position: absolute;
//     width: 40px;
//     height: 30px;
//     top: 10px;
//     left: 4px;
// `

// const AtomIcons = styled.img`
//     position: absolute;
//     width: 24px;
//     height: 24px;
//     top: 13px;
//     left: 12px;
// `

// const Frame = styled.img`
//     position: absolute;
//     width: 351px;
//     height: 200px;
//     top: 246px;
//     left: 2px;
// `

// const Group4 = styled.div`
//     top: 0;
//     left: 0;
//     position: absolute;
//     width: 352px;
//     height: 196px;
//     background-color: #ffffff;
//     border-radius: 16px;
//     box-shadow: var(--drop-card);
// `

// const Group5 = styled.div`
//     top: 246px;
//     left: 386px;
//     position: absolute;
//     width: 352px;
//     height: 196px;
//     background-color: var(--basewhite);
//     border-radius: 16px;
//     box-shadow: var(--drop-card);
// `

// const TextWrapper2 = styled.div`
//     position: absolute;
//     top: 0;
//     left: 1px;
//     font-family: var(--title-m-semibold-font-family);
//     font-weight: var(--title-m-semibold-font-weight);
//     color: var(--base-900);
//     font-size: var(--title-m-semibold-font-size);
//     letter-spacing: var(--title-m-semibold-letter-spacing);
//     line-height: var(--title-m-semibold-line-height);
//     white-space: nowrap;
//     font-style: var(--title-m-semibold-font-style);
// `
