import React from 'react';
import styled from 'styled-components';
import SigninForm from '../components/SigninForm/SigninForm';
import GreenBg from '../assets/greenbk.png';
import CoffeeBag from '../assets/coffeebag.png';
import CoffeeCup from '../assets/coffeecup.png';
import Vector1 from '../assets/vectors/vector1.png';
import Vector2 from '../assets/vectors/vector2.png';
import Vector3 from '../assets/vectors/vector3.png';
import Logo from "../assets/logo-img/logo1.png";



const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: row;
    overflow: hidden;
    position:relative;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const LeftSection = styled.div`
    position: relative;
    width: 50%;
    background: url(${GreenBg}) no-repeat center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
       display:none;
    }
`;

const Vectors = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;

    .vector1 {
        position: absolute;
        top: 10px;
        left: 10px;
        width: 200px;
    }

    .vector2 {
        position: absolute;
        bottom: 20px;
        left: 20px;
        width: 400px;
    }

  
`;

const Content = styled.div`
    z-index: 1;
    color: white;
    text-align: center;
`;

const RightSection = styled.div`
    width: 50%;
    display: flex;
    justify-content:left;
    
   
    padding: 5px;

  

    @media (max-width: 768px) {
        width: 100%;
        height: 50%;
    }
`;

const LogoWrapper = styled.div`
    position: absolute;
    top: 20px;
    width: 100px;
   
    left:50%;
    img {
        width: 75%;
        

    }
`;

const Vector3Image = styled.img`
  position: absolute;
  top: 50%;
  right: -180px;
  transform: translateY(-50%);
  width: 250px;
  border-radius: 50%;
`;

const loginFlow = () => (
    <Container>
        <LeftSection>
            <Vectors>
                <img src={Vector1} alt="Vector1" className="vector1" />
                <img src={Vector2} alt="Vector2" className="vector2" />
                
            </Vectors>
            <Content>
                <h1>Check our Products</h1>
                <p>All our products are prepared with love step by step.</p>
                <img src={CoffeeBag} alt="Coffee Bag" style={{ width: '200px' }} />
                <img src={CoffeeCup} alt="Coffee Cup" style={{ width: '150px', marginLeft: '20px' }} />
            </Content>
        </LeftSection>
        <LogoWrapper>
                <img src={Logo} alt="Logo" />
            </LogoWrapper>
        <RightSection>
          
            <SigninForm />
                           
            <Vector3Image src={Vector3} alt="Vector3" />
        </RightSection>
    </Container>
);

export default loginFlow;
