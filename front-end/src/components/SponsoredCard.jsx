// import styled from 'styled-components'
// import CoffeePhoto from 'assets/78626a06800a404b376fb78f515b1499a7ea0a29.png'
import Elilpse from 'assets/90e6b2d9-fbab-41e0-9530-5ee5bc04d6ad.png'
import CupBagComponent from './CupBagComponent'


// const Card = styled.div`
//     position: relative;
//     width: 544px;
//     height: 291px;
//     background: #ba2d0b;
//     padding: 20px;
//     border-radius: 10px;
// `

// const RightRound = styled.div`
//     position: absolute;
//     width: 281px;
//     height: 291px;
//     top: 0;
//     left: 263px;
//     background: url(${Background})
//         no-repeat center;
//     background-size: cover;
// `

// const SponsoredTag = styled.span`
//     color: #c8c8c8;
//     font-family: Ruda, sans-serif;
//     font-size: 10px;
//     font-weight: 700;
//     line-height: 13px;
//     text-align: left;
//     white-space: nowrap;
// `

// const CardTitle = styled.span`
//     position: absolute;
//     width: 267px;
//     top: 43px;
//     left: 24px;
//     color: #ffffff;
//     font-family: Halant, serif;
//     font-size: 32px;
//     font-weight: 600;
//     line-height: 41.6px;
//     text-align: left;
//     z-index: 40;
// `

// const CardImage = styled.div`
//     position: absolute;
//     width: 202px;
//     height: 202px;
//     top: 89px;
//     left: 272px;
//     background: url(${CoffeePhoto}) no-repeat center;
//     background-size: cover;
//     z-index: 35;
// `

// const CardDescription = styled.span`
//     position: absolute;
//     width: 267px;
//     top: 127px;
//     left: 24px;
//     color: #ffffff;
//     font-family: Ruda, sans-serif;
//     font-size: 10px;
//     font-weight: 400;
//     line-height: 13px;
//     text-align: left;
//     z-index: 36;
// `

// const CardButton = styled.button`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 10px;
//     position: absolute;
//     width: 147px;
//     height: 37px;
//     top: 203px;
//     left: 24px;
//     padding: 8px 24px;
//     cursor: pointer;
//     background: #ffffff;
//     border: none;
//     z-index: 38;
//     border-radius: 8px;
//     color: #1f2130;
//     font-family: Ruda, sans-serif;
//     font-size: 16px;
//     font-weight: 700;
//     line-height: 20.8px;
//     text-align: left;
//     text-transform: uppercase;
//     white-space: nowrap;
// `

// const SponsoredCard = () => {
//     return (
//         <Card>
//             <RightRound />
//             <SponsoredTag>Sponsored</SponsoredTag>
//             <CardTitle>We made all with our love</CardTitle>
//             <CardImage />
//             <CardDescription>
//                 Lorem ipsum dolor sit amet consectetur. Egestas senectus lorem
//                 nunc non vestibulum. Nibh tristique cursus est at ut. In ac
//                 vulputate viverra facilisis porttitor blandit.
//             </CardDescription>
//             <CardButton>Check it out</CardButton>
//         </Card>
//     )
// }

// export default SponsoredCard







import styled from 'styled-components'

const Card = styled.div`
    position: relative;
    width: 544px;
    height: 291px;
    background: ${(props) => props.bgColor || '#ba2d0b'};
    padding: 20px;
    border-radius: 10px;
`

const RightRound = styled.div`
    position: absolute;
    width: 281px;
    height: 291px;
    top: 0;
    left: 263px;
    background: url(${(props) =>
            props.image ||
            './assets/images/996b1d78-b83e-4df0-9d5b-5ebbd2817a4c.png'})
        no-repeat center;
    background-size: cover;
    display: ${(props) => (props.show ? 'block' : 'none')};
`
const Ellipse1 = styled.div`
    position: absolute;
    width: 123px;
    height: 123px;
    top: 240px;
    left: -31px;
    background: url(${Elilpse})
        no-repeat center;
    background-size: cover;
    z-index: 31;
    border-radius: 50%;
    display: ${(props) => (props.show ? 'block' : 'none')};
`

const Ellipse2 = styled.div`
    position: absolute;
    width: 123px;
    height: 123px;
    top: -18px;
    left: 452px;
    background: url(${Elilpse}) no-repeat center;
    background-size: cover;
    z-index: 31;
    border-radius: 50%;
    display: ${(props) => (props.show ? 'block' : 'none')};
`
const SponsoredTag = styled.span`
    color: #c8c8c8;
    font-family: Ruda, sans-serif;
    font-size: 10px;
    font-weight: 700;
    line-height: 13px;
    text-align: left;
    white-space: nowrap;
`

const CardTitle = styled.span`
    position: absolute;
    width: 267px;
    top: 43px;
    left: 24px;
    color: #ffffff;
    font-family: Halant, serif;
    font-size: 32px;
    font-weight: 600;
    line-height: 41.6px;
    text-align: left;
    z-index: 40;
`
const ImgDiv = styled.div`
    position: absolute;
    top: 89px;
    left: 340px;

`
const CardImage = styled.img`
    height: 202px;
    no-repeat center;
    background-size: cover;

`

const CardDescription = styled.span`
    position: absolute;
    width: 267px;
    top: 127px;
    left: 24px;
    color: #ffffff;
    font-family: Ruda, sans-serif;
    font-size: 10px;
    font-weight: 400;
    line-height: 13px;
    text-align: left;
    z-index: 36;
`

const CardButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    position: absolute;
    width: 147px;
    height: 37px;
    top: 203px;
    left: 24px;
    padding: 8px 24px;
    cursor: pointer;
    background: #ffffff;
    border: none;
    z-index: 38;
    border-radius: 8px;
    color: #1f2130;
    font-family: Ruda, sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 20.8px;
    text-align: left;
    text-transform: uppercase;
    white-space: nowrap;
`

const SponsoredCard = ({
    bgColor,
    rightRoundImage,
    showRightRound = true,
    showEllipse=true,
    cardImage,
    cardimg=true,
    title,
    description,
   showCupBag =false,
  cupBagProps
}) => {
    return (
        <Card bgColor={bgColor}>
            <RightRound image={rightRoundImage} show={showRightRound} />
            <Ellipse1 show={showEllipse} />
            <Ellipse2 show={showEllipse} />
            <SponsoredTag>Sponsored</SponsoredTag>
            <CardTitle>{title}</CardTitle>
            <ImgDiv>
                <CardImage src={cardImage} show={cardimg} />
                {showCupBag && <CupBagComponent {...cupBagProps} />}
            </ImgDiv>
            <CardDescription>{description}</CardDescription>
            <CardButton>Check it out</CardButton>
        </Card>
    )
}

export default SponsoredCard
