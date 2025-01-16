import styled from 'styled-components'

const HowItWorks = styled.div`
    position: relativ;
    width: 1440px;
    height: 808px;
`

const Group = styled.div`
    position: relative;
    width: 1122px;
    height: 568px;
    top: 120px;
    left: 159px;
`

const Div = styled.div`
    position: absolute;
    width: 1120px;
    height: 446px;
    top: 122px;
    left: 0;
`

const Group2 = styled.div`
    position: absolute;
    width: 366px;
    height: 206px;
    top: 0;
    left: 370px;
`

const AtomProducts = styled.div`
    position: absolute;
    width: 116px;
    height: 116px;
    top: 16px;
    left: 16px;
    transform: rotate(19.36deg);
`

const Macchiato = styled.img`
    position: absolute;
    width: 148px;
    height: 148px;
    top: -16px;
    left: -16px;
    transform: rotate(-19.36deg);
    object-fit: cover;
`

const AtomProducts2 = styled.div`
    position: absolute;
    width: 116px;
    height: 116px;
    top: 19px;
    left: 250px;
    background-image: url(https://c.animaapp.com/EXuBewV4/img/mocaccino-1@2x.png);
    background-size: cover;
    background-position: 50% 50%;
`

const Vector = styled.img`
    position: absolute;
    width: 350px;
    height: 68px;
    top: 138px;
    left: 16px;
`

const Img = styled.img`
    position: absolute;
    width: 348px;
    height: 200px;
    top: 246px;
    left: 772px;
`

const Group3 = styled.div`
    position: absolute;
    width: 352px;
    height: 196px;
    top: 0;
    left: 768px;
    background-color: var(--basewhite);
    border-radius: 16px;
    box-shadow: var(--drop-card);
`

const TextWrapper = styled.div`
    position: absolute;
    width: 304px;
    top: 79px;
    left: 24px;
    font-family: var(--title-m-semibold-font-family);
    font-weight: var(--title-m-semibold-font-weight);
    color: var(--base-900);
    font-size: var(--title-m-semibold-font-size);
    letter-spacing: var(--title-m-semibold-letter-spacing);
    line-height: var(--title-m-semibold-line-height);
    font-style: var(--title-m-semibold-font-style);
`

const P = styled.p`
    position: absolute;
    width: 304px;
    top: 129px;
    left: 24px;
    font-family: var(--text-m-regular-font-family);
    font-weight: var(--text-m-regular-font-weight);
    color: var(--base-600);
    font-size: var(--text-m-regular-font-size);
    letter-spacing: var(--text-m-regular-letter-spacing);
    line-height: var(--text-m-regular-line-height);
    font-style: var(--text-m-regular-font-style);
`

const GroupWrapper = styled.div`
    position: absolute;
    width: 44px;
    height: 40px;
    top: 24px;
    left: 27px;
`

const OverlapGroupWrapper = styled.div`
    height: 40px;
`

const OverlapGroup = styled.div`
    position: relative;
    width: 44px;
    height: 40px;
`

const Rectangle = styled.img`
    position: absolute;
    width: 39px;
    height: 34px;
    top: 0;
    left: 0;
`

const Rectangle2 = styled.img`
    position: absolute;
    width: 40px;
    height: 30px;
    top: 10px;
    left: 4px;
`

const AtomIcons = styled.img`
    position: absolute;
    width: 24px;
    height: 24px;
    top: 13px;
    left: 12px;
`

const Frame = styled.img`
    position: absolute;
    width: 351px;
    height: 200px;
    top: 246px;
    left: 2px;
`

const Group4 = styled.div`
    top: 0;
    left: 0;
    position: absolute;
    width: 352px;
    height: 196px;
    background-color: #ffffff;
    border-radius: 16px;
    box-shadow: var(--drop-card);
`

const Group5 = styled.div`
    top: 246px;
    left: 386px;
    position: absolute;
    width: 352px;
    height: 196px;
    background-color: var(--basewhite);
    border-radius: 16px;
    box-shadow: var(--drop-card);
`

const TextWrapper2 = styled.div`
    position: absolute;
    top: 0;
    left: 1px;
    font-family: var(--title-m-semibold-font-family);
    font-weight: var(--title-m-semibold-font-weight);
    color: var(--base-900);
    font-size: var(--title-m-semibold-font-size);
    letter-spacing: var(--title-m-semibold-letter-spacing);
    line-height: var(--title-m-semibold-line-height);
    white-space: nowrap;
    font-style: var(--title-m-semibold-font-style);
`
const HowToOrder = () => {
    return (
        <>
            <HowItWorks>
                <Group>
                    <Div>
                        <Group2>
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
                                Customize the flavour, roast, size, and type to
                                your preference.
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
                                We use your address to find best partners and
                                stores near to you.
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
                                After purchase, wait a few mins for your
                                delicious and warm coffee
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
                        </Group5>
                    </Div>
                    <TextWrapper2>#order wherever you are</TextWrapper2>
                </Group>
            </HowItWorks>

        
        </>
    )
}

export default HowToOrder
