
import Instagram1 from 'assets/instagram/instagram1.png'
import Instagram2 from 'assets/instagram/instagram2.png'
import Instagram3 from 'assets/instagram/instagram3.png'
import Instagram4 from 'assets/instagram/instagram4.png'


import {Instagram , ListOfPost ,Post} from "./InstaComp.styles"
const instagramImages = {
    Instagram1,
    Instagram2,
    Instagram3,
    Instagram4
}
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
