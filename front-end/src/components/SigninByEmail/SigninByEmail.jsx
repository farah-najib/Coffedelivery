
import{Group15 , WelcomeBack , EnterInformations , AtomInput , Label , Frame , Input ,Placeholder , Button , TextButton ,NewAccount } from './SigninByEmail.styles'

const SigninByEmail = () => {
    return (
        <Group15>
            <WelcomeBack>Welcome back</WelcomeBack>
            <EnterInformations>
                Please enter your informations to continue
            </EnterInformations>
            <AtomInput>
                <Label>Email</Label>
                <Frame>
                    <Input type="text" />
                    <Placeholder>Enter your email</Placeholder>
                </Frame>
            </AtomInput>
            <AtomInput margin="16px 0 0 1px">
                <Label>Password</Label>
                <Frame>
                    <Input type="password" />
                    <Placeholder>Enter your password</Placeholder>
                </Frame>
            </AtomInput>
            <Button>
                <TextButton>Sign with email</TextButton>
            </Button>
            <NewAccount>
                <span>New here?</span> <span>Create an account</span>
            </NewAccount>
        </Group15>
    )
}

export default SigninByEmail
