
import styled from 'styled-components'

const Frame = styled.div`
    width: 544px;
    height: 900px;
`

const Group = styled.div`
    position: relative;
    width: 358px;
    height: 332px;
    top: 284px;
    left: 96px;
`

const TextWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    font-family: var(--title-m-semibold-font-family);
    font-weight: var(--title-m-semibold-font-weight);
    color: var(--base-800);
    font-size: var(--title-m-semibold-font-size);
    letter-spacing: var(--title-m-semibold-letter-spacing);
    line-height: var(--title-m-semibold-line-height);
    white-space: nowrap;
    font-style: var(--title-m-semibold-font-style);
`

const DoYouAlreadyHave = styled.p`
    position: absolute;
    top: 319px;
    left: 94px;
    font-family: 'Ruda-Regular', Helvetica;
    font-weight: 400;
    color: transparent;
    font-size: 10px;
    letter-spacing: 0;
    line-height: 13px;
    white-space: nowrap;
`

const Span = styled.span`
    color: #79797f;
    font-family: var(--text-XXS-regular-font-family);
    font-style: var(--text-XXS-regular-font-style);
    font-weight: var(--text-XXS-regular-font-weight);
    letter-spacing: var(--text-XXS-regular-letter-spacing);
    line-height: var(--text-XXS-regular-line-height);
    font-size: var(--text-XXS-regular-font-size);
`

const TextWrapper2 = styled.span`
    font-family: var(--text-XXS-bold-font-family);
    font-weight: var(--text-XXS-bold-font-weight);
    color: #1d1c25;
    font-style: var(--text-XXS-bold-font-style);
    letter-spacing: var(--text-XXS-bold-letter-spacing);
    line-height: var(--text-XXS-bold-line-height);
    font-size: var(--text-XXS-bold-font-size);
`

const Div = styled.p`
    position: absolute;
    width: 351px;
    top: 42px;
    left: 1px;
    font-family: var(--text-m-regular-font-family);
    font-weight: var(--text-m-regular-font-weight);
    color: var(--base-500);
    font-size: var(--text-m-regular-font-size);
    letter-spacing: var(--text-m-regular-letter-spacing);
    line-height: var(--text-m-regular-line-height);
    font-style: var(--text-m-regular-font-style);
`

const AtomOutlinedButton = styled.div`
    display: flex;
    width: 350px;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 12px 24px;
    position: absolute;
    top: 95px;
    left: 1px;
    border-radius: 8px;
    border: 1px solid;
    border-color: var(--green-600);
`

const TextButton = styled.div`
    position: relative;
    width: fit-content;
    margin-top: -1px;
    font-family: var(--text-s-bold-font-family);
    font-weight: var(--text-s-bold-font-weight);
    color: var(--green-600);
    font-size: var(--text-s-bold-font-size);
    letter-spacing: var(--text-s-bold-letter-spacing);
    line-height: var(--text-s-bold-line-height);
    white-space: nowrap;
    font-style: var(--text-s-bold-font-style);
`

const AtomPrimaryButton = styled.div`
    display: flex;
    width: 350px;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 12px 24px;
    position: absolute;
    top: 246px;
    left: 1px;
    background-color: var(--green-500);
    border-radius: 8px;
`

const TextButton2 = styled.div`
    position: relative;
    width: fit-content;
    margin-top: -1px;
    font-family: var(--text-s-bold-font-family);
    font-weight: var(--text-s-bold-font-weight);
    color: #ffffff;
    font-size: var(--text-s-bold-font-size);
    letter-spacing: var(--text-s-bold-letter-spacing);
    line-height: var(--text-s-bold-line-height);
    white-space: nowrap;
    font-style: var(--text-s-bold-font-style);
`

const Group2 = styled.div`
    position: absolute;
    width: 212px;
    height: 13px;
    top: 213px;
    left: 71px;
`

const Vector = styled.img`
    left: 0;
    position: absolute;
    width: 84px;
    height: 8px;
    top: 2px;
`

const Img = styled.img`
    left: 126px;
    position: absolute;
    width: 84px;
    height: 8px;
    top: 2px;
`

const TextWrapper3 = styled.div`
    position: absolute;
    top: 0;
    left: 100px;
    font-family: var(--text-XXS-regular-font-family);
    font-weight: var(--text-XXS-regular-font-weight);
    color: var(--base-500);
    font-size: var(--text-XXS-regular-font-size);
    letter-spacing: var(--text-XXS-regular-letter-spacing);
    line-height: var(--text-XXS-regular-line-height);
    white-space: nowrap;
    font-style: var(--text-XXS-regular-font-style);
`

const AtomOutlinedButton2 = styled.div`
    display: flex;
    width: 350px;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 12px 24px;
    position: absolute;
    top: 152px;
    left: 1px;
    border-radius: 8px;
    border: 1px solid;
    border-color: var(--green-600);
`

 const SignIn= () => {
    return (
        <Frame>
            <Group>
                <TextWrapper>Sign today</TextWrapper>
                <DoYouAlreadyHave>
                    <Span>Do you already have account? </Span>
                    <TextWrapper2>Login</TextWrapper2>
                </DoYouAlreadyHave>
                <Div>Select how do you want to sign in</Div>
                <AtomOutlinedButton>
                    <TextButton>Sign with Google</TextButton>
                </AtomOutlinedButton>
                <AtomPrimaryButton>
                    <TextButton2>Sign with email</TextButton2>
                </AtomPrimaryButton>
                <Group2>
                    <Vector className="vector" src="img/vector-10.svg" />
                    <Img className="img" src="img/vector-11.svg" />
                    <TextWrapper3>or</TextWrapper3>
                </Group2>
                <AtomOutlinedButton2>
                    <TextButton>Continue with Facebook</TextButton>
                </AtomOutlinedButton2>
            </Group>
        </Frame>
    )
}
export default SignIn
