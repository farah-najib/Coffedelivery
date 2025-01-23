import React from 'react'
import styled from 'styled-components'

const Group15 = styled.div`
    position: relative;
    width: 352px;
    height: 552px;
    margin: 174px 0 0 96px;
    font-size: 0px;
    z-index: 51;
    overflow: visible auto;
`

const WelcomeBack = styled.span`
    display: block;
    position: relative;
    height: 42px;
    color: #393846;
    font-family: Halant, sans-serif;
    font-size: 32px;
    font-weight: 600;
    line-height: 41.6px;
    text-align: left;
    white-space: nowrap;
    z-index: 52;
`

const EnterInformations = styled.span`
    display: block;
    position: relative;
    height: 21px;
    color: #a7a7a7;
    font-family: Ruda, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 20.8px;
    text-align: left;
    white-space: nowrap;
    z-index: 54;
`

const AtomInput = styled.div`
    position: relative;
    width: 351px;
    height: 68px;
    margin: ${(props) => props.margin || '32px 0 0 1px'};
    z-index: ${(props) => props.zIndex || 63};
    overflow: visible auto;
`

const Label = styled.span`
    display: block;
    position: relative;
    height: 18px;
    margin: 4px 0 0 0;
    color: #393846;
    font-family: Ruda, sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    text-align: left;
    white-space: nowrap;
`

const Frame = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: 10px;
    position: relative;
    width: 351px;
    margin: ${(props) => props.margin || '4px 0 0 0'};
    padding: 12px 16px;
    border: 1px solid #c8c8c8;
    border-radius: 8px;
    overflow: hidden;
`

const Input = styled.input`
    flex-shrink: 0;
    position: absolute;
    width: 351px;
    height: 42px;
    top: -1px;
    left: -1px;
    background: transparent;
    border: none;
    outline: none;
`

const Placeholder = styled.span`
    flex-shrink: 0;
    position: relative;
    height: 18px;
    color: #a7a7a7;
    font-family: Ruda, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-align: left;
    white-space: nowrap;
`

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    gap: ${(props) => props.gap || '4px'};
    position: relative;
    width: ${(props) => props.width || '350px'};
    margin: ${(props) => props.margin || '32px 0 0 1px'};
    padding: ${(props) => props.padding || '12px 24px'};
    cursor: pointer;
    background: ${(props) => props.background || '#89937c'};
    border: ${(props) => props.border || 'none'};
    border-radius: 8px;
`

const TextButton = styled.span`
    flex-shrink: 0;
    position: relative;
    height: 18px;
    color: ${(props) => props.color || '#ffffff'};
    font-family: Ruda, sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    text-align: left;
    white-space: nowrap;
`

const NewAccount = styled.div`
    position: relative;
    width: 138px;
    height: 13px;
    margin: 31px 0 0 106px;
    font-family: Ruda, sans-serif;
    font-size: 10px;
    font-weight: 400;
    line-height: 13px;
    text-align: center;
    text-overflow: initial;
    white-space: nowrap;
`

const App = () => {
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

export default App
