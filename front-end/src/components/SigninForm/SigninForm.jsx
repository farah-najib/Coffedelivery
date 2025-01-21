import React from 'react';
import styled from 'styled-components';
import GoogleLoginButton from './GoogleLoginButton';


const Frame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden; 
  align-self: flex-start;
  

  
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100vw; 
  padding: 80px;
 
  border-radius: 8px;
  
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: var(--base-900);
  margin-bottom: 10px;
  align-self:flex-start;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: rgba(137, 147, 124, 1);
  margin-bottom: 20px;
  text-align: left;
  align-self:flex-start;
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 20px 0;
  color: #aaa;
  font-size: 14px;
  text-transform: uppercase;

  &:before,
  &:after {
    content: '';
    flex: 1;
    height: 1px;
    background: #ddd;
  }

  &:before {
    margin-right: 10px;
  }

  &:after {
    margin-left: 10px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 100vw;
`;

const PrimaryButton = styled.button`
  padding: 12px;
  width: 25vw;
  font-size: 16px;
  color: rgba(78, 91, 62, 1);
  background-color: #ffffff;
  border: 1px solid rgba(78, 91, 62, 1);
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: rgba(78, 91, 62, 1);
    color:#ffffff;
  }
`;

const SecondaryButton = styled.button`
  padding: 12px;
  width: 100%;
  font-size: 16px;
  color: #ffffff;
  background-color:rgba(78, 91, 62, 1);
  border: 1px solid rgba(78, 91, 62, 1);
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #ffffff;
    color:rgba(78, 91, 62, 1);
  }
`;

const SignIn = () => {
  return (
    <Frame>
      <Group>
        <Title>Sign today</Title>
        <Subtitle>Select how you want to sign in</Subtitle>
        <ButtonWrapper>
          <GoogleLoginButton />
          <PrimaryButton>Continue with Facebook</PrimaryButton>
        </ButtonWrapper>
        <Divider>or</Divider>
        <SecondaryButton>Sign with email</SecondaryButton>
      </Group>
    </Frame>
  );
};

export default SignIn;
