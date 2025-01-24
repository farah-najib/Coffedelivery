
import {
    Frame,
    Group,
    TextWrapper,
    DoYouAlreadyHave,
    Span,
    TextWrapper2,
    Div,
    AtomOutlinedButton,
    TextButton,
    AtomPrimaryButton,
    Group2,
    TextButton2,
    Vector,
    TextWrapper3,
    Img,
    AtomOutlinedButton2
} from './SigninByAccount.styles'
const SignIn = () => {
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
