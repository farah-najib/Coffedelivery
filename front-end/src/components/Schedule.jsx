import Gallary1 from '../assets/gallary1.png'
import Gallary3 from '../assets/gallary3.png'
import Arrow4 from '../assets/arrow4.png'

import styled from 'styled-components'

const WhereverYouAre2 = styled.div`
    height: 876px;

    background-color: aquamarine;
    position: relative;
    width: 1440px;

    background-size: cover;
    background-position: 50% 50%;
`

const Group27 = styled.div`
    position: relative;
    width: 1496px;
    height: 725px;
    top: 76px;
`

const Overlap9 = styled.div`
    position: relative;
    width: 1490px;
    height: 725px;
`

const DarkGreyTerrazzo = styled.div`
    left: 160px;
    position: absolute;
    top: 0;
    font-family: var(--title-m-semibold-font-family);
    font-weight: var(--title-m-semibold-font-weight);
    color: var(--basewhite);
    font-size: var(--title-m-semibold-font-size);
    letter-spacing: var(--title-m-semibold-letter-spacing);
    line-height: var(--title-m-semibold-line-height);
    white-space: nowrap;
    font-style: var(--title-m-semibold-font-style);
`

const OverlapGroup6 = styled.div`
    position: absolute;
    width: 1490px;
    height: 725px;
    top: 0;
    left: 0;
`

const UnsplashLExpfwwoeg = styled.img`
    position: absolute;
    width: 344px;
    height: 548px;
    top: 97px;
    left: 0;
    object-fit: cover;
`

const UnsplashFgknhwlmy = styled.img`
    position: absolute;
    width: 292px;
    height: 489px;
    top: 0;
    left: 1198px;
`

const Group28 = styled.div`
    position: absolute;
    width: 637px;
    height: 251px;
    top: 396px;
    left: 449px;
`

const Group29 = styled.div`
    position: absolute;
    width: 641px;
    height: 186px;
    top: 0;
    left: 0;
`

const GrabACupOfCoffee = styled.p`
    position: absolute;
    width: 637px;
    top: 0;
    left: 0;
    font-family: var(--title-m-semibold-font-family);
    font-weight: var(--title-m-semibold-font-weight);
    color: var(--basewhite);
    font-size: var(--title-m-semibold-font-size);
    letter-spacing: var(--title-m-semibold-letter-spacing);
    line-height: var(--title-m-semibold-line-height);
    font-style: var(--title-m-semibold-font-style);
`

const TextWrapper32 = styled.p`
    width: 552px;
    top: 100px;
    left: 0;
    font-weight: var(--text-m-regular-font-weight);
    color: var(--base-500);
    font-size: var(--text-m-regular-font-size);
    line-height: var(--text-m-regular-line-height);
    position: absolute;
    font-family: var(--text-m-regular-font-family);
    letter-spacing: var(--text-m-regular-letter-spacing);
    font-style: var(--text-m-regular-font-style);
`

const AtomCTAButton2 = styled.div`
    top: 210px;
    left: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px 24px;
    position: absolute;
    background-color: var(--basewhite);
    border-radius: 8px;
`

const TextWrapper33 = styled.div`
    position: absolute;
    top: 240px;
    left: 240px;
    transform: rotate(90deg);
    font-family: 'Ruda', Helvetica;
    font-weight: 700;
    color: var(--base-800);
    font-size: 58.7px;
    letter-spacing: 0;
    line-height: 76.3px;
    white-space: nowrap;
`

const TextWrapper34 = styled.div`
    position: absolute;
    top: 354px;
    left: 1059px;
    transform: rotate(-90deg);
    font-family: 'Ruda', Helvetica;
    font-weight: 700;
    color: var(--base-800);
    font-size: 58.7px;
    letter-spacing: 0;
    line-height: 76.3px;
    white-space: nowrap;
`

const Group30 = styled.img`
    position: absolute;
    width: 212px;
    height: 193px;
    top: 532px;
    left: 248px;
`

const Schedule = () => {
    return (
        <WhereverYouAre2>
            <Group27>
                <Overlap9>
                    <DarkGreyTerrazzo>#schedule your order</DarkGreyTerrazzo>
                    <OverlapGroup6>
                        <UnsplashLExpfwwoeg src={Gallary1} />
                        <UnsplashFgknhwlmy src={Gallary3} />
                        <Group28>
                            <Group29>
                                <GrabACupOfCoffee>
                                    Grab a cup of coffee with your buds
                                    <br />
                                    or at the office.
                                </GrabACupOfCoffee>
                                <TextWrapper32>
                                    Lorem ipsum dolor sit amet consectetur.
                                    Justo faucibus fusce urna faucibus. Blandit
                                    sociis pulvinar habitasse aliquam arcu massa
                                    at mi consectetur. Faucibus ut elementum
                                    fames mauris amet pulvinar ultrices ut sed.
                                    Gravida ornare proin eleifend pulvinar
                                    ultrices sed in in
                                </TextWrapper32>
                            </Group29>
                            <AtomCTAButton2>
                                <p>ORDER NOW AND SCHEDULE YOUR DELIVERY</p>
                            </AtomCTAButton2>
                        </Group28>
                        <TextWrapper33>#FRIENDS</TextWrapper33>
                        <TextWrapper34>#WORK</TextWrapper34>
                        <Group30 src={Arrow4} />
                    </OverlapGroup6>
                </Overlap9>
            </Group27>
        </WhereverYouAre2>
    )
}
export default Schedule
