import {
    Group,
    Title,
    EnterInformations,
    Label,
    Frame,
    Input,
    Placeholder,
    CheckboxWrapper,
    Rectangle,
    TextF,
    Button,
    Box6,
    Text11,
    Text12
} from './Register.styles'

const Register = () => {
    return (
        <Group>
            <Title>Register</Title>
            <EnterInformations>
                Please enter your information in the fields below
            </EnterInformations>

            <Label>Name</Label>
            <Frame>
                <Input />
                <Placeholder>Enter your name</Placeholder>
            </Frame>

            <Label>Last name</Label>
            <Frame>
                <Input />
                <Placeholder>Enter your last name</Placeholder>
            </Frame>

            <Label>Email</Label>
            <Frame>
                <Input />
                <Placeholder>Enter your email</Placeholder>
            </Frame>

            <Label>Password</Label>
            <Frame>
                <Input type="password" />
                <Placeholder>Enter your password</Placeholder>
            </Frame>

            <Label>Confirm password</Label>
            <Frame>
                <Input type="password" />
                <Placeholder>Confirm your password</Placeholder>
            </Frame>

            <CheckboxWrapper>
                <Rectangle />
                <TextF>I accept the terms and conditions</TextF>
            </CheckboxWrapper>

            <Button>Sign in</Button>

            <Box6>
                <Text11>Do you already have an account? </Text11>
                <Text12>Login</Text12>
            </Box6>
        </Group>
    )
}

export default Register
