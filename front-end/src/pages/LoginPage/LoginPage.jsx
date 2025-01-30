import styled from 'styled-components'
import { useState } from 'react'
import GreenBg from 'assets/greenbk.png'
import CoffeeBag from 'assets/coffeebag.png'
import CoffeeCup from 'assets/coffeecup.png'
import Vector from 'assets/vectors/vector1.png'
import VectorTwo from 'assets/vectors/vector2.png'
import VectorThree from 'assets/vectors/vector3.png'
import VectorFour from 'assets/vectors/vector4.png'

import SignInByEmail from 'components/SigninByEmail/SigninByEmail'
import Register from 'components/SigninByEmail/Register'
import mediaQuery from 'styles/mediaQuery'

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    ${mediaQuery('mediumHandset')`

        flex-direction: column;
      `}
`

const FlexRowB = styled.div`
    position: relative;
    width: 704px;
    height: 100%;
    background: url(${GreenBg});
    display: flex;
    flex-direction: column;

    ${mediaQuery('mediumHandset')`

        display:none;
      `}
`

const TextArea = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ImageArea = styled.div`
    width: 704px;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const CupBagImg = styled.div`
    position: relative;
    width: 243px;
    height: 388px;
`

const Bag = styled.div`
    position: absolute;
    width: 198px;
    height: 388px;
    top: 0;
    left: 0;
    background: url(${CoffeeBag}) no-repeat center;
    background-size: cover;
`

const Cup = styled.div`
    position: absolute;
    width: 172px;
    height: 261px;
    top: 93px;
    left: 117px;
    background: url(${CoffeeCup}) no-repeat center;
    background-size: cover;
`

const Title = styled.span`
    height: 62px;
    color: #ffffff;
    font-family: 'Dancing Script', sans-serif;
    font-size: 48px;
    font-weight: 600;
    line-height: 62px;
    white-space: nowrap;
`

const Paragraph = styled.span`
    position: relative;
    width: 444px;
    height: 42px;
    color: #ffffff;
    font-family: 'Ruda', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 20.8px;
    text-overflow: initial;
    overflow: hidden;
`

const Vector1 = styled.div`
    position: absolute;
    width: 182.769px;
    height: 193.879px;
    top: 0;
    left: 0;
    background: url(${Vector}) no-repeat center;
    background-size: cover;
    z-index: 2;
`
const Vector2 = styled.div`
    position: absolute;
    width: 631.174px;
    height: 242.218px;
    top: 550px;
    left: 0;
    background: url(${VectorTwo}) no-repeat center;
    background-size: cover;
`
const Vector3 = styled.div`
    position: absolute;
    width: 252px;
    height: 252px;
    top: 0;
    left: 1314.708px;
    background: url(${VectorThree}) no-repeat center;
    background-size: cover;
    border-radius: 50%;
`

const Vector4 = styled.div`
    position: absolute;
    width: 32px;
    height: 32px;
    top: 628px;
    left: 621px;
    background: url(${VectorFour}) no-repeat center;
    background-size: cover;
`

const loginFlow = () => {

    const [currentForm, setCurrentForm] = useState('register') // Default form

    // Renders the correct form based on the state
    const renderForm = () => {
        switch (currentForm) {
            // case 'signin':
            //     return <SigninByAccount setCurrentForm={setCurrentForm} />
            case 'email':
                return <SignInByEmail setCurrentForm={setCurrentForm} />
            case 'register':
            default:
                return <Register setCurrentForm={setCurrentForm} /> // Pass the setter
        }
    }

    return (
        <MainContainer>
            <FlexRowB>
                <Vector1 />
                <Vector2 />
                <TextArea>
                    <Title>Check our products</Title>
                    <Paragraph>
                        All our products are prepared with love step by step.{' '}
                        <br />
                        The best choice of coffee beans and totally natural.
                    </Paragraph>
                </TextArea>
                <ImageArea>
                    <CupBagImg>
                        <Bag />
                        <Cup />
                    </CupBagImg>
                </ImageArea>
            </FlexRowB>

            {renderForm()}
            <Vector3 />
            <Vector4 />
        </MainContainer>
    )
}
export default loginFlow
