
import { useState } from 'react'
import axios from 'axios'
import {
    LoginContainer,
    Containertitle,
    EnterInformations,
    InputField,
    Label,
    Input,
    Button,
    NewAccount,



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
} from './SigninByEmail.styles'

const SigninByEmail = ({ setCurrentForm }) => {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState('')

// const handleLogin = async (e) => {

//     e.preventDefault()
//     setError('') // Clear previous errors

//     try {
//         const response = await axios.post(
//             'http://localhost:3000/auth/login',
//             {

//                 email,
//                 password
//             }
//         )

//         // Store token (if returned) in localStorage
//         localStorage.setItem('token', response.data.token)
//         alert('Login successful!')
//     } catch (err) {
//         setError(err.response?.data?.message || 'Login failed.')
//     }
// }


const handleLogin = async (e) => {
    e.preventDefault()
    setError('') // Clear previous errors

    if (!email || !password) {
        setError('Please enter both email and password.')
        return
    }

    try {
        const { data } = await axios.post('http://localhost:3000/auth/login', {
            email,
            password
        })

        if (data?.token) {
            localStorage.setItem('token', data.token)
            alert('Login successful!')
        } else {
            setError('Login failed: No token received.')
        }
    } catch (error) {
        const errorMessage =
            error.response?.data?.message ||
            'Something went wrong. Please try again.'
        setError(errorMessage)
    }
}

    return (
        <LoginContainer>
            <Containertitle>Welcome back</Containertitle>
            <EnterInformations>
                Please enter your informations to continue
            </EnterInformations>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleLogin}>
                <InputField>
                    <Label>Email</Label>

                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                </InputField>
                <InputField>
                    <Label>Password</Label>

                    <Input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </InputField>
                <Button type="submit">Sign with email</Button>
            </form>
            <span>
                New here?{' '}
                <NewAccount onClick={() => setCurrentForm('register')}>
                    Create an account
                </NewAccount>
            </span>



                 <Frame>
                        <Group>
                            <TextWrapper>Sign today</TextWrapper>
                            <DoYouAlreadyHave>
                                <Span>Do you already have account? </Span>
                                <TextWrapper2 onClick={() => setCurrentForm('email')}>Login</TextWrapper2>
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
        </LoginContainer>
    )
}

export default SigninByEmail
