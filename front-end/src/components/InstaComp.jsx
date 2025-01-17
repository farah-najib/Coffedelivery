import styled from 'styled-components'
import Instagram1 from '../assets/instagram/instagram1.png'
import Instagram2 from '../assets/instagram/instagram2.png'
import Instagram3 from '../assets/instagram/instagram3.png'
import Instagram4 from '../assets/instagram/instagram4.png'

const instagramImages = {
    Instagram1,
    Instagram2,
    Instagram3,
    Instagram4
}
const Instagram = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: pink;
    background-size: cover;
    background-position: 50% 50%;


`


const ListOfPost = styled.div`
     position: relative;
    // width: 1120px;
    // height: 540px;
    // display: grid;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, auto);
    gap: 10px;
    width: 100%;
    max-width: 800px;

`

const Post = styled.img`
    // position: absolute;
    width: 254px;
    height: 254px;
    object-fit: cover;
    // top: ${(props) => props.top || '0'};
    // left: ${(props) => props.left || '0'};
`



const InstaComp = () => {

           const imageKeys = [
               'Instagram1',
               'Instagram2',
               'Instagram3',
               'Instagram4',
               'Instagram1',
               'Instagram2',
               'Instagram3',
               'Instagram4'
           ]
    return (
        <>
            <Instagram>
                <ListOfPost>
                    {imageKeys.map((key, index) => (
                        <Post key={index} src={instagramImages[key]} />
                    ))}
                </ListOfPost>
            </Instagram>
        </>
    )
}

export default InstaComp
