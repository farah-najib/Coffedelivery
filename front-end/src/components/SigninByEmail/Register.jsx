import {
    LoginContainer,
    Containertitle,
    EnterInformations,
    InputField,
    Label,
    Input,
    Button,
    NewAccount
} from './SigninByEmail.styles'

const Register = ({ setCurrentForm }) => {
    return (
        <LoginContainer>
            <Containertitle>Register</Containertitle>
            <EnterInformations>
                Please enter your information in the fields below
            </EnterInformations>

            <InputField>
                <Label>Name</Label>
                <Input placeholder="Enter your name" />
            </InputField>

            <InputField>
                <Label>Last name</Label>
                <Input placeholder="Enter your last name" />
            </InputField>

            <InputField>
                <Label>Email</Label>
                <Input placeholder="Enter your email" />
            </InputField>

            <InputField>
                <Label>Password</Label>
                <Input type="password" placeholder="Enter your password" />
            </InputField>

            <InputField>
                <Label>Confirm password</Label>
                <Input type="password" placeholder="Confirm your password" />
            </InputField>

            <span>I accept the terms and conditions</span>

            <Button>Sign in</Button>

            <span>Do you already have an account? </span>
            <NewAccount onClick={() => setCurrentForm('email')}>
                Login
            </NewAccount>
        </LoginContainer>
    )
}

export default Register
