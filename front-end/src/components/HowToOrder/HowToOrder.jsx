import ElementImg3 from 'assets/element4.png'
import ElementImg from 'assets/element.png'
import ArrowFive from 'assets/vectors/arrow5.svg'
import ArrowSex from 'assets/vectors/arrow6.png'
import ArrowSeven from 'assets/vectors/arrow7.svg'
import Square from 'assets/vectors/square.svg'
import {
    HowItWorks,
    ComponentTitle,
    Content,
    Column,
    Item,
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    SpecialItem,
    InnerItem,
    Img,
    ArrowImg
} from './HowToOrder.styles'

const HowToOrder = () => {
    return (
        <>
            <HowItWorks>
                <ComponentTitle>#order wherever you are</ComponentTitle>
                <Content>
                    <Column>
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
                            <ArrowImg src={ArrowSeven} />
                        </Item>
                    </Column>
                    <Column>
                        <Item>
                            <SpecialItem>
                                <InnerItem>
                                    <Img src={ElementImg} />
                                </InnerItem>
                                <InnerItem>
                                    <Img src={ElementImg3} />
                                </InnerItem>

                                <InnerItem>
                                    <ArrowImg
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
                    </Column>
                    <Column>
                        <Item>
                            <Card>
                                <CardHeader>
                                    <img src={Square} />
                                </CardHeader>
                                <CardTitle>Add to cart</CardTitle>
                                <CardBody>
                                    Customize the flavour, roast, size, and type
                                    to your preference.
                                </CardBody>
                            </Card>
                        </Item>

                        <Item>
                            <ArrowImg
                                src={ArrowSex}
                                style={{ width: 200, height: 100 }}
                            />
                        </Item>
                    </Column>
                </Content>
            </HowItWorks>
        </>
    )
}

export default HowToOrder
