import styled from 'styled-components'
import ElementImg3 from 'assets/element4.png'
import ElementImg from 'assets/element.png'
import ArrowFive from 'assets/vectors/arrow5.svg'
import ArrowSex from 'assets/vectors/arrow6.png'
import ArrowSeven from 'assets/vectors/arrow7.svg'
import Square from 'assets/vectors/square.svg'
import{ HowItWorks, ComponentTitle , Content ,Column1 , Column2 , Column3 , Item , Card , CardHeader , CardTitle ,
     CardBody , SpecialItem , InnerItem , Img} from "./HowToOrder.styles"

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
