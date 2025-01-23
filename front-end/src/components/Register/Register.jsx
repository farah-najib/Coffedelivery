import React from 'react'
import styled from 'styled-components'

const Group = styled.div`
    position: relative;
    width: 352px;
    height: 661px;
    margin: 77.109px 0 0 96px;
    font-size: 0px;
    z-index: 14;
    overflow: visible auto;
`

const Register = styled.span`
    display: block;
    position: relative;
    height: 42px;
    margin: 0;
    color: #393846;
    font-family: Halant, sans-serif;
    font-size: 32px;
    font-weight: 600;
    line-height: 41.6px;
    text-align: left;
    white-space: nowrap;
    z-index: 15;
`

const EnterInformations = styled.span`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    width: 351px;
    height: 42px;
    margin: 0;
    color: #a7a7a7;
    font-family: Ruda, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 20.8px;
    text-align: left;
    z-index: 17;
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
    margin: 4px 0 0 0;
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
    z-index: 28;
    outline: none;
`

const Placeholder = styled.span`
    flex-shrink: 0;
    flex-basis: auto;
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

const CheckboxWrapper = styled.div`
    position: relative;
    width: 116px;
    height: 20px;
    margin: 11px 0 0 1px;
    z-index: 45;
`

const Rectangle = styled.div`
    position: absolute;
    width: 17.24%;
    height: 100%;
    top: 0;
    left: 0;
    border: 1px solid #c8c8c8;
    z-index: 46;
    border-radius: 4px;
`

const TextF = styled.span`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    position: absolute;
    height: 65%;
    top: 20%;
    left: 20.69%;
    color: #79797f;
    font-family: Ruda, sans-serif;
    font-size: 10px;
    font-weight: 700;
    line-height: 13px;
    text-align: left;
    white-space: nowrap;
    z-index: 47;
`

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    gap: 4px;
    position: relative;
    width: 350px;
    margin: 24px 0 0 1px;
    padding: 12px 24px;
    cursor: pointer;
    background: #89937c;
    border: none;
    z-index: 18;
    border-radius: 8px;
    color: #ffffff;
    font-family: Ruda, sans-serif;
    font-size: 14px;
    font-weight: 700;
`

const Box6 = styled.div`
    position: relative;
    width: 165px;
    height: 13px;
    margin: 31px 0 0 94px;
    font-family: Ruda, sans-serif;
    font-size: 10px;
    font-weight: 400;
    line-height: 13px;
    text-align: left;
    white-space: nowrap;
    z-index: 16;
`

const Text11 = styled.span`
    color: #79797f;
`

const Text12 = styled.span`
    color: #1d1c25;
    font-weight: 700;
`

export default function RegisterForm() {
    return (
        <Group>
            <Register>Register</Register>
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
