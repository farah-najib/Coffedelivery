import Logo from '../assets/logo.png'

import styled from 'styled-components'

// Styled-components
const FooterWrapper = styled.footer`
    position: relative;
    width: 1441px;
    height: 533px;

    background-color: transparent;
`

const OrganismFooter = styled.div`
    width: 1441px;
    height: 533px;
`

const Overlap12 = styled.div`
    position: relative;
    height: 541px;
    top: -8px;
    background-image: url(https://c.animaapp.com/EXuBewV4/img/rectangle-24-2.png);
    background-size: 100% 100%;
`

const TextWrapper49 = styled.div`
    position: absolute;
    top: 198px;
    left: 1028px;
    font-family: var(--title-s-semibold-font-family);
    font-weight: var(--title-s-semibold-font-weight);
    color: #ffffff;
    font-size: var(--title-s-semibold-font-size);
    letter-spacing: var(--title-s-semibold-letter-spacing);
    line-height: var(--title-s-semibold-line-height);
    white-space: nowrap;
    font-style: var(--title-s-semibold-font-style);
`

const Group61 = styled.div`
    position: absolute;
    width: 259px;
    height: 97px;
    top: 246px;
    left: 1026px;
`

const AtomInput = styled.div`
    position: absolute;
    width: 259px;
    height: 42px;
    top: 0;
    left: 0;
    border-radius: 8px;
`

const PlaceholderWrapper = styled.div`
    display: flex;
    width: 259px;
    align-items: center;
    gap: 10px;
    padding: 12px 16px;
    position: relative;
    border-radius: 8px;
    border: 1px solid;
    border-color: var(--base-400);
`

const Placeholder = styled.div`
    position: relative;
    width: fit-content;
    margin-top: -1px;
    font-family: var(--text-s-regular-font-family);
    font-weight: var(--text-s-regular-font-weight);
    color: var(--base-500);
    font-size: var(--text-s-regular-font-size);
    letter-spacing: var(--text-s-regular-letter-spacing);
    line-height: var(--text-s-regular-line-height);
    white-space: nowrap;
    font-style: var(--text-s-regular-font-style);
`

const AtomPrimaryButton2 = styled.div`
    gap: 4px;
    padding: 12px 24px;
    top: 55px;
    left: 0;
    background-color: var(--basewhite);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    border-radius: 8px;
`

const TextWrapper50 = styled.div`
    color: var(--base-900);
    font-size: var(--text-s-bold-font-size);
    line-height: var(--text-s-bold-line-height);
    position: relative;
    width: fit-content;
    margin-top: -1px;
    font-family: var(--text-s-bold-font-family);
    font-weight: var(--text-s-bold-font-weight);
    letter-spacing: var(--text-s-bold-letter-spacing);
    white-space: nowrap;
    font-style: var(--text-s-bold-font-style);
`

const Footer = () => {
    return (
        <FooterWrapper>
            <OrganismFooter>
                <Overlap12>
                    <TextWrapper49>News letter</TextWrapper49>
                    <Group61>
                        <AtomInput>
                            <PlaceholderWrapper>
                                <Placeholder>example@email.com</Placeholder>
                            </PlaceholderWrapper>
                        </AtomInput>
                        <AtomPrimaryButton2>
                            <TextWrapper50>Text button</TextWrapper50>
                        </AtomPrimaryButton2>
                    </Group61>
                    {/* More components here, refactor the rest the same way */}
                </Overlap12>
            </OrganismFooter>
        </FooterWrapper>
    )
}

export default Footer
