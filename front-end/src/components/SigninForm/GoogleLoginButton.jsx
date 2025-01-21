import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 15px;
  width: 350px;
  margin: 10px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 50px;
  background-color: var(--base-100);
  top: 95px;
  left: 1px;
  border: 1px solid;
  border-color: var(--green-600);
  color: var(--green-600);
    

  &:hover {
    background-color:rgba(137, 147, 124, 1);
  }

  img {
    margin-right: 10px;
  }
`;

const GoogleLoginButton = () => {
    const clientId = '1086579091179-paegp25hugcvv6n50s70t2qn5892ukq5.apps.googleusercontent.com';

    const onSuccess = (response) => {
        console.log('Login Success: currentUser:', response.profileObj);
        
    };

    const onFailure = (response) => {
        console.log('Login failed: res:', response);
        if (response.error === 'popup_closed_by_user') {
            alert('Login was cancelled. Please try again.');
        } else {
            alert('Login failed. Please try again.');
        }
        
    };

    return (
        <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
            onSuccess={onSuccess}
            onError={onFailure}
            render={renderProps => (
                <StyledButton onClick={renderProps.onClick} disabled={renderProps.disabled}>
                     Sign with Google
                </StyledButton>
            )}
        />
    </GoogleOAuthProvider>
    );
};

export default GoogleLoginButton;