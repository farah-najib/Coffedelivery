import styled from 'styled-components'
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
    background-image: url(https://c.animaapp.com/EXuBewV4/img/unsplash-olo8qpj1fja-1@2x.png);
    background-size: cover;
    background-position: 50% 50%;
`

const IconoirInstagram = styled.img`
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
                    <UnsplashImage src="https://c.animaapp.com/EXuBewV4/img/unsplash-c5jxeqjbzu4@2x.png" />
                    <UnsplashImage
                        src="https://c.animaapp.com/EXuBewV4/img/unsplash-c5jxeqjbzu4-1@2x.png"
                        top="286px"
                    />
                    <UnsplashImage
                        src="https://c.animaapp.com/EXuBewV4/img/unsplash-olo8qpj1fja@2x.png"
                        top="286px"
                        left="288px"
                    />
                    <UnsplashImage
                        src="https://c.animaapp.com/EXuBewV4/img/unsplash-qj8n1w8eivu@2x.png"
                        top="0"
                        left="574px"
                    />
                    <UnsplashImage
                        src="https://c.animaapp.com/EXuBewV4/img/unsplash-qj8n1w8eivu-1@2x.png"
                        top="286px"
                        left="574px"
                    />
                    <UnsplashImage
                        src="https://c.animaapp.com/EXuBewV4/img/unsplash-kwdp-0pok-i@2x.png"
                        top="0"
                        left="866px"
                    />
                    <UnsplashImage
                        src="https://c.animaapp.com/EXuBewV4/img/unsplash-kwdp-0pok-i-1@2x.png"
                        top="286px"
                        left="866px"
                    />
                    <IconoirInstagramWrapper>
                        <IconoirInstagram src="https://c.animaapp.com/EXuBewV4/img/iconoir-instagram-2.svg" />
                    </IconoirInstagramWrapper>
                </Group56>
            </Instagram>
        </>
    )
}

export default InstaComp
