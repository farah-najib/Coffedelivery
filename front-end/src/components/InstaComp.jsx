import styled from 'styled-components'
import Instagram1 from '../assets/instagram/instagram1.png'
import Instagram2 from '../assets/instagram/instagram2.png'
import Instagram3 from '../assets/instagram/instagram3.png'
import Instagram4 from '../assets/instagram/instagram4.png'
const Instagram = styled.div`
    position: relative;
    width: 1440px;
    height: 780px;
`

const Group56 = styled.div`
    position: relative;
    width: 1120px;
    height: 540px;
    top: 120px;
    left: 160px;
`

const UnsplashImage = styled.img`
    position: absolute;
    width: 254px;
    height: 254px;
    object-fit: cover;
    top: ${(props) => props.top || '0'};
    left: ${(props) => props.left || '0'};
`

const IconoirInstagramWrapper = styled.div`
    position: absolute;
    width: 254px;
    height: 254px;
    top: 0;
    left: 288px;
    background-image: url(${Instagram4});
    background-size: cover;

    background-position: 50% 50%;
`

const IconoirInstagram = styled.i`
    position: absolute;
    width: 108px;
    height: 108px;
    top: 73px;
    left: 73px;
`
const InstaComp = () => {
    return (
        <>
            <Instagram>
                <Group56>
                    <UnsplashImage src={Instagram1} />
                    <UnsplashImage src={Instagram1} top="286px" />
                    <UnsplashImage src={Instagram2} top="286px" left="288px" />
                    <UnsplashImage src={Instagram3} top="0" left="574px" />
                    <UnsplashImage src={Instagram3} top="286px" left="574px" />
                    <UnsplashImage src={Instagram4} top="0" left="866px" />
                    <UnsplashImage src={Instagram4} top="286px" left="866px" />
                    <IconoirInstagramWrapper>
                        <IconoirInstagram
                            className='fi fi-brands-instagram'
                        />
                    </IconoirInstagramWrapper>
                </Group56>
            </Instagram>
        </>
    )
}

export default InstaComp
